import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(< CommentBox />);
});

afterEach(() => {
  // do cleanup, since full rendering mounts the component in the DOM & thus tests
  // can accidentally affect each other if they are using the same DOM
  wrapped.unmount();
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})