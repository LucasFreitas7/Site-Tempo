import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Tempo } from "./Tempo";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { mount } from "enzyme";
it("ao digitar input o valor deve ser alterado", () => {
  const utils = render(<Tempo />);
  const input = utils.getAllByTestId("inp1");
  input.value = "Ipatinga";
  expect(input.value).toBe("Ipatinga");
  expect(utils.queryAllByTestId("btn1")).toBeTruthy();
});

it("ao digitar input o botao deve ser renderizado", () => {
  const utils = render(<Tempo />);
  const input = utils.getAllByTestId("inp1");
  input.value = "Ipatinga";
  expect(utils.queryAllByTestId("btn1")).toBeTruthy();
});
