import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { tabs } from "../utils/constants";

import { ImageContext } from "../providers/ImagesProvider";

function Search() {
  const [query, setQuery] = useState("");
  const { searchImage } = useContext(ImageContext);

  const onSubmit = (e, history) => {
    e.preventDefault();
    searchImage(query);
    history.push(tabs.SEARCH);
  };

  const updateQuery = e => {
    setQuery(e.target.value);
  };

  return (
    <Route
      render={({ history }) => (
        <Form onSubmit={e => onSubmit(e, history)}>
          <TextInput value={query} type="text" onChange={updateQuery} />
          <Icon onClick={e => onSubmit(e, history)}>
            <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
          </Icon>
        </Form>
      )}
    />
  );
}

export default Search;

const TextInput = styled.input`
  border: none;
  font-size: 18px;
  padding: 12px;
  margin: 0 12px 0 0;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: inline;
`;
