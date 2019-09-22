import * as utils from "../utils/utilities";

describe("Column builder", () => {
  test("more than three items", () => {
    const resultColumns = utils.divideImagesToColumns([1, 2, 3, 4]);
    expect(resultColumns[0].length).toBe(2);
    expect(resultColumns[1].length).toBe(1);
    expect(resultColumns[2].length).toBe(1);
  });

  test("one item", () => {
    const resultColumns = utils.divideImagesToColumns([1]);
    expect(resultColumns[0].length).toBe(0);
    expect(resultColumns[1].length).toBe(1);
    expect(resultColumns[2].length).toBe(0);
  });

  test("zero item", () => {
    const resultColumns = utils.divideImagesToColumns([]);
    expect(resultColumns[0].length).toBe(0);
    expect(resultColumns[1].length).toBe(0);
    expect(resultColumns[2].length).toBe(0);
  });

  test("three item", () => {
    const resultColumns = utils.divideImagesToColumns([1, 3, 3]);
    expect(resultColumns[0].length).toBe(1);
    expect(resultColumns[1].length).toBe(1);
    expect(resultColumns[2].length).toBe(1);
  });
});

describe("URL builder", () => {
  test("without params", () => {
    const url = utils.createUrl({}, "okay/");
    expect(url).toBe(
      process.env.REACT_APP_SPLASH_BASE_URL +
        "okay/?client_id=" +
        process.env.REACT_APP_SPLASH_TOKEN
    );
  });
  test("with params", () => {
    const url = utils.createUrl({this: 'that'}, "okay/");
    expect(url).toBe(
      process.env.REACT_APP_SPLASH_BASE_URL +
        "okay/?this=that&client_id=" +
        process.env.REACT_APP_SPLASH_TOKEN
    );
  });
});
