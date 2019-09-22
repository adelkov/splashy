
import Search from '../components/Navigation/Search'
import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { act, create } from "react-dom/test-utils";
import { ImageProvider } from "../providers/ImagesProvider";
import { Route, BrowserRouter as Router } from "react-router-dom";


let container;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  });


describe("Search component", () => {
    test("accepts user input w/o losing focus", async () => {
      await act(async () => {
        ReactDOM.render(<Router><ImageProvider>
                <Search />
            </ImageProvider></Router>, container);
      });

       const input = container.getElementsByTagName("input")[0];
       expect(input.value).toBe('')

       await act(async() => {
         input.value = 'alma teszt'
       });
       expect(input.value).toBe('alma teszt')
    });

    test("navigates to /search on submission", async () => {
       act( () => {
        ReactDOM.render(<Router><ImageProvider>
                <Search />
            </ImageProvider></Router>, container);
      });

      expect(window.location.pathname).toBe('/')

       const input = container.getElementsByTagName("input")[0];
       input.value = 'almafa teszt'
       
       const submitButton = container.getElementsByTagName('svg')[0]

       await act(async() => {
        submitButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

      expect(window.location.pathname).toBe('/search')
    });
  });


