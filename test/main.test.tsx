import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ModalityContainer} from "../src/modality-container";

// TODO all of this here

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalityContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
