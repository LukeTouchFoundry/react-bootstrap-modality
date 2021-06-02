import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ModalContainer} from "../src/modal-container";

import './index.scss';
import {Modal} from '../src';

const App = () => {
  const showModal = () => {
    Modal.showModal("A lovely title", <strong>A lovely body</strong>, {
      onConfirm: () => {
        window.alert("Confirm clicked!");
      },
      confirmButton: "Click me!",
      closeButton: "Close me!"
    });
  };

  return (
    <div>
      <ModalContainer/>
      <button className={"button"} onClick={showModal}>Show modal!</button>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
