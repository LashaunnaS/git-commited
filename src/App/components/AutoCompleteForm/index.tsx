import React, { useState } from 'react';
import { Search } from 'react-feather';
import { Selection } from '../..';
import colorGenerator from '../../../shared/utils/colorGenerator';
import RepositoryNameStyles from '../../../shared/styledComponents/RepositoryNameStyles';
import DropDown from './DropDownStyles/DropDownStyles';
import DropDownItem from './DropDownItemStyles/DropDownItemStyles';
import Form from './FormStyles/FormStyles';
import Input from './InputStyles/InputStyles';

interface AutoCompleteProps {
  repositories: Array<string>;
  addRepository: (newRepo: Selection) => void;
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

  const numberGenerator = Math.floor(Math.random() * (999 - 1 + 1)) + 1;

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
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

  const onClick = (): void => {
    setActive(0);
    setIsShow(false);
    setInput('');
    addRepository({
      id: numberGenerator,
      nameWithOwner: repositories[active],
      color: colorGenerator(),
    });
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
      addRepository({
        id: numberGenerator,
        nameWithOwner: repositories[active],
        color: colorGenerator(),
      });
    } else if (e.keyCode === 38) {
      // "up arrow" key
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // "down arrow" key
      return active + 1 === repositories.length ? active : setActive(active + 1);
    }

    return null;
  };

  const formatRepositoryName = (repository: string): JSX.Element => {
    const repo = repository.split('/');

    return (
      <>
        <RepositoryNameStyles primary>{repo[0]} / </RepositoryNameStyles>
        <RepositoryNameStyles search>{repo[1]}</RepositoryNameStyles>
      </>
    );
  };

  const dropDownList = (): Array<JSX.Element> => {
    return repositories.map((repository: string, index: number) => {
      return (
        <DropDownItem
          active={index === active}
          key={repository}
          onClick={() => onClick()}
          onMouseEnter={() => setActive(repositories.indexOf(repository))}
        >
          {formatRepositoryName(repository)}
        </DropDownItem>
      );
    });
  };

  const renderDropDownContent = (): Array<JSX.Element> | JSX.Element => {
    if (repositories.length) {
      return dropDownList();
    }
    if (loading) {
      return <DropDownItem>loading...</DropDownItem>;
    }
    return (
      <DropDownItem notFound>
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
        disabled={loading}
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder="Search a GitHub Repository..."
      />
      <Search color="var(--color-purple-dark)" />
      {isShow && input && renderAutocomplete()}
    </Form>
  );
};
export default Autocomplete;
