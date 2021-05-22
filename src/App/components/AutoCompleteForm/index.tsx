import React, { useState } from 'react';
import { Search } from 'react-feather';
import DropDown from './DropDownStyles/DropDownStyles';
import DropDownItem from './DropDownItemStyles/DropDownItemStyles';
import RepositoryNameStyles from '../../../shared/styledComponents/RepositoryNameStyles';
import Form from './FormStyles/FormStyles';
import Input from './InputStyles/InputStyles';

interface AutoCompleteProps {
  repositories: Array<string>;
  addRepository: (newRepo: string) => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
}

const Autocomplete = ({
  repositories,
  addRepository,
  setSearchQuery,
  loading,
}: AutoCompleteProps): JSX.Element => {
  const [active, setActive] = useState<number>(0);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newInput = e.currentTarget.value;

    if (newInput === '') {
      setInput('');
      setIsShow(false);
    } else {
      setActive(0);
      setIsShow(true);
      setInput(newInput);
      setSearchQuery(newInput);
    }
  };

  const onClick = (repoIndex: number) => {
    setActive(0);
    setIsShow(false);
    setInput('');
    addRepository(repositories[repoIndex]);
  };

  const onKeyDown = (
    e: React.KeyboardEvent,
  ): void | null | React.SetStateAction<number> => {
    if (e.keyCode === 13) {
      // "enter" key
      e.preventDefault();
      setActive(0);
      setIsShow(false);
      setInput('');
      addRepository(repositories[active]);
    } else if (e.keyCode === 38) {
      // "up arrow" key
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // "down arrow" key
      return active + 1 === repositories.length ? active : setActive(active + 1);
    }

    return null;
  };

  const formatRepositoryName = (repository: string) => {
    const repo = repository.split('/');

    return (
      <>
        <RepositoryNameStyles primary>{repo[0]} / </RepositoryNameStyles>
        <RepositoryNameStyles search>{repo[1]}</RepositoryNameStyles>
      </>
    );
  };

  const dropDownList = () => {
    return repositories.map((repository: string, index: number) => {
      return (
        <DropDownItem
          active={index === active}
          key={repository}
          onClick={() => onClick(index)}
        >
          {formatRepositoryName(repository)}
        </DropDownItem>
      );
    });
  };

  const renderDropDownContent = () => {
    if (repositories.length) {
      return dropDownList();
    }
    if (loading) {
      return <DropDownItem>loading...</DropDownItem>;
    }
    return (
      <DropDownItem>
        We couldn’t find any repositories matching &apos;{input}&apos;
      </DropDownItem>
    );
  };

  const renderAutocomplete = (): JSX.Element => {
    return <DropDown>{renderDropDownContent()}</DropDown>;
  };

  return (
    <Form dropDownActive={isShow}>
      <Input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder="Search a GitHub Repository..."
      />
      <Search color="#37374a" />
      {isShow && input && renderAutocomplete()}
    </Form>
  );
};
export default Autocomplete;
