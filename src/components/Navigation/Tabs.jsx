import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import styled, { css } from "styled-components";
import { color } from "styled-system";

function Tabs() {
  useEffect(() => {
    setTabs(
      tabs.map(tab =>
        tab.url === window.location.pathname
          ? { ...tab, selected: true }
          : { ...tab, selected: false }
      )
    );
  }, []);

  const initialTabs = [
    { url: "/", isSelected: false, title: "Gallery" },
    { url: "/favorites", isSelected: false, title: "Favorites" }
  ];

  const [tabs, setTabs] = useState(initialTabs);

  const selectTab = (url, history) => {
    history.push(url);
    const updatedTabs = tabs.map(tab => ({
      ...tab,
      selected: tab.url === url
    }));
    setTabs(updatedTabs);
  };

  return (
    <div>
      {tabs.map(tab => (
        <Route
          key={tab.url + tab.title}
          render={({ history }) => (
            <NavLink
              color={"negtext"}
              selected={tab.selected}
              onClick={() => selectTab(tab.url, history)}
            >
              {tab.title}
            </NavLink>
          )}
        />
      ))}
    </div>
  );
}

export default Tabs;

const NavLink = styled.div`
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  display: inline;
  font-size: 24px;
  padding-right: 20px;
  padding-left: 20px;
  &:hover {
    opacity: 0.4;
  }

  ${color}
  ${props =>
    props.selected &&
    css`
      color: palevioletred;
    `}
`;
