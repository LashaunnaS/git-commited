import React, { useState } from 'react';
import { Search } from 'react-feather';
import DropDown from './DropDown/DropDownStyle';
import DropDownItem from './DropDownItem.js/DropDownItemStyle';
import DropDownItemText from './DropDownItem.js/DropDownItemTextStyles';
import Form from './Form/FormStyles';
import Input from './Input/InputStyles';

const Autocomplete = ({ repositories }: any) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newInput = e.currentTarget.value;
    if (newInput === '') {
      setFiltered([]);
      setInput('');
      setIsShow(false);
    } else {
      const newFilteredRepositories = repositories.filter(
        (repository: string) =>
          repository.toLowerCase().indexOf(newInput.toLowerCase()) > -1,
      );
      setActive(0);
      setFiltered(newFilteredRepositories);
      setIsShow(true);
      setInput(e.currentTarget.value);
    }
  };

  const onClick = (repoIndex: number) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(filtered[repoIndex]);
  };

  const onKeyDown = (
    e: React.KeyboardEvent,
  ): void | null | React.SetStateAction<number> => {
    if (e.keyCode === 13) {
      // "enter" key
      e.preventDefault();
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      // "up arrow" key
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // "down arrow" key
      return active + 1 === filtered.length ? active : setActive(active + 1);
    }

    return null;
  };

  const formatRepo = (repository: string) => {
    const repo = repository.split('/');

    return (
      <>
        <DropDownItemText primary>{repo[0]} / </DropDownItemText>
        <DropDownItemText>{repo[1]}</DropDownItemText>
      </>
    );
  };

  const renderAutocomplete = (): JSX.Element => {
    return (
      <DropDown>
        {filtered.length ? (
          filtered.map((repository: string, index: number) => {
            return (
              <DropDownItem
                active={index === active}
                key={repository}
                onClick={() => onClick(index)}
              >
                {formatRepo(repository)}
              </DropDownItem>
            );
          })
        ) : (
          <DropDownItem>
            We couldn’t find any repositories matching &apos;{input}&apos;
          </DropDownItem>
        )}
      </DropDown>
    );
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
