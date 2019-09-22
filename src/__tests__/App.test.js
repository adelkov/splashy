import React from 'react';
import ReactDOM from 'react-dom';
import { act } from "react-dom/test-utils";

import App from '../App';

it('renders without crashing', () => {
  act(()=>{
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);})
});
