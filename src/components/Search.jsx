import React, { useContext, useState } from "react";
import { ImageContext } from "../providers/ImagesProvider";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [query, setQuery] = useState('');

  const { searchImage } = useContext(ImageContext);

  const onSubmit = e => {
    e.preventDefault();
    searchImage(query);
  };

  const updateQuery = e => {
    setQuery(e.target.value);
  };


  return (
    <Form onSubmit={onSubmit}>
      <TextInput value={query} type="text" onChange={updateQuery} />
      <Icon onClick={onSubmit}>
        <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
      </Icon>
    </Form>
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