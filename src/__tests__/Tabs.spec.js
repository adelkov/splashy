
import Tabs from '../components/Navigation/Tabs'
import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { act, create } from "react-dom/test-utils";
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


describe("Tabs", () => {
    test("renders Gallery and Favorites tabs", async () => {
      await act(async () => {
        ReactDOM.render(<Router>
                <Tabs />
           </Router>, container);
      });

       const tabs = container.getElementsByTagName("div")[0];
        
       expect(tabs.children[0].textContent).toBe('Gallery')
       expect(tabs.children[1].textContent).toBe('Favorites')

    });

    test("navigates to /favorites on clicking favorites", async () => {
      await act(async () => {
        ReactDOM.render(<Router>
                <Tabs />
            </Router>, container);
      });
      const favoritesTab = container.getElementsByTagName("div")[0].children[1];

       await act(async() => {
        favoritesTab.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

      expect(window.location.pathname).toBe('/favorites')
    });

    test("navigates to / on clicking gallery", async () => {
        await act(async () => {
          ReactDOM.render(<Router>
                  <Tabs />
              </Router>, container);
        });
        const galleryTab = container.getElementsByTagName("div")[0].children[0];
  
         await act(async() => {
            galleryTab.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
  
        expect(window.location.pathname).toBe('/')
      });
  });


