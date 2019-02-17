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

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment'}
  });
  // force the component to update as soon as the change has been simulated:
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
})

it('when form is submitted, the text area gets emptied', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment'}
  });
  // force the component to update as soon as the change has been simulated:
  wrapped.update();
  
  wrapped.find('form').simulate('submit');
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
})