import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ModalContainer} from "../src/modal-container";

// TODO all of this here

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
