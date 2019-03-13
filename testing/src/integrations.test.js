import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'fetched #1' }, { name: 'fetched #2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments & display them', (done) => {
    // render the entire app
    const wrapped = mount(
        // add the Provider tag (which here goes under the name of Root) to App so that the entire app could be tested
        <Root>
          <App />
        </Root>
        );
    // find the fetchComments button & click it
    wrapped.find('.fetch-comments').simulate('click');

    // introduce a little pause so that moxios could run the stubRequest on time
    setTimeout(() => {
      wrapped.update();
      // expect to find a list of comments
      expect(wrapped.find('li').length).toEqual(2);
      done();
      wrapped.unmount();
    }, 100);
})