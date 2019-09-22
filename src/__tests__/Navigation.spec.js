import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/Navigation/Navigation';
import { act } from "react-dom/test-utils";
import { Route, BrowserRouter as Router } from "react-router-dom";

it('renders without crashing', () => {
  act(()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Router><Navigation /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);})
});
