import React, { useContext, useState } from "react";
import { ImageContext } from "../providers/ImagesProvider";
import styled from "styled-components";

function Search() {
  const [query, setQuery] = useState("");

  const { searchImage } = useContext(ImageContext);

  const onSubmit = e => {
    e.preventDefault();
    searchImage(query);
  };

  const updateQuery = e => {
    setQuery(e.target.value);
  };

  const TextInput = styled.input`
    padding: 8px;
    border: none;

    font-size: 18px;
  `;

  const Form = styled.form`
    float: right;
    padding-top: 20px;
    // margin-right: 16px;
  `;

  return (
    <Form onSubmit={onSubmit}>
      <TextInput value={query} onChange={updateQuery} />
      <button>Search</button>
    </Form>
  );
}

export default Search;
