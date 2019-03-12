import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('can fetch a list of comments & display them', () => {
    // render the entire app
    const wrapped = mount(
        // add the Provider tag (which here goes under the name of Root) to App so that the entire app could be tested
        <Root>
          <App />
        </Root>
        );
    // find the fetchComments button & click it
    // expect to find a list of comments
})