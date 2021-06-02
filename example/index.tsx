import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';
import {Modality, ModalityContainer} from "../src";

const App = () => {
  const showModal = () => {
    Modality.showModal("A lovely title", <strong>A lovely body</strong>, {
      onConfirm: () => {
        window.alert("Confirm clicked!");
      },
      confirmButton: "Click me!",
      closeButton: "Close me!"
    });
  };

  return (
    <div>
      <ModalityContainer/>
      <button className={"button"} onClick={showModal}>Show modal!</button>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
