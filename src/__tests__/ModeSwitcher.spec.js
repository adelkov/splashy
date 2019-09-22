import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import ModeSwitcher from "../components/Navigation/ModeSwitcher";
import { CustomThemeProvider } from "../providers/CustomThemeProvider";

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

describe("Modeswitcher component", () => {
  test("changes SVG when clicked", () => {
    act(() => {
      ReactDOM.render(
        <CustomThemeProvider>
          <ModeSwitcher />
        </CustomThemeProvider>,
        container
      );
    });

    const switcherDiv = container.getElementsByTagName("div")[0];
    expect(switcherDiv.children[0].classList[1]).toBe("fa-sun");
    act(() => {
      switcherDiv.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(switcherDiv.children[0].classList[1]).toBe("fa-moon");
  });
});
