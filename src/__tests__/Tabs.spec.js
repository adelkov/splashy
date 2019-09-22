import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { act, create } from "react-dom/test-utils";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Tabs from "../components/Navigation/Tabs";

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
  test("renders Gallery and Favorites tabs", () => {
    act(() => {
      ReactDOM.render(
        <Router>
          <Tabs />
        </Router>,
        container
      );
    });

    const tabs = container.getElementsByTagName("div")[0];

    expect(tabs.children[0].textContent).toBe("Gallery");
    expect(tabs.children[1].textContent).toBe("Favorites");
  });

  test("navigates to /favorites on clicking favorites", () => {
    act(() => {
      ReactDOM.render(
        <Router>
          <Tabs />
        </Router>,
        container
      );
    });
    const favoritesTab = container.getElementsByTagName("div")[0].children[1];

    act(() => {
      favoritesTab.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(window.location.pathname).toBe("/favorites");
  });

  test("navigates to / on clicking gallery", () => {
    act(() => {
      ReactDOM.render(
        <Router>
          <Tabs />
        </Router>,
        container
      );
    });
    const galleryTab = container.getElementsByTagName("div")[0].children[0];

    act(() => {
      galleryTab.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(window.location.pathname).toBe("/");
  });
});
