import React from "react";
import {EventsEnum} from "./events.enum";
import Modal from "react-bootstrap/Modal";

import Emitter from "./emitter";
import EventEmitter from "eventemitter3";
import Button from "react-bootstrap/Button";

//todo import bootstrap styling
// import "bootstrap/scss/bootstrap";

export class ModalContainer extends React.Component<any, any> {
  private showEventListener?: EventEmitter;
  private hideEventListener?: EventEmitter;

  constructor(props: {}) {
    super(props);

    this.state = {
      show: false,
      title: '',
      body: '',
      confirmButton: '',
      closeButton: '',
      confirmCallback: null,
      closeOnConfirm: true,
      displayConfirmButton: true,
      displayCloseButton: true,
      displayCloseCross: true
    };
  }

  componentDidMount(): void {
    if (!this.showEventListener) {
      this.showEventListener = Emitter.on(EventsEnum.DISPLAY, (payload: {
        title: string, body: string,
        options: {
          confirmButton: string,
          closeButton: string,
          onConfirm: () => void,
          closeOnConfirm: boolean,
          displayConfirmButton: boolean,
          displayCloseButton: boolean,
          displayCloseCross: boolean
        }
      }) => {
        this.setState({
          show: true,
          title: payload.title,
          body: payload.body,
          confirmButton: payload.options.confirmButton,
          closeButton: payload.options.closeButton,
          confirmCallback: payload.options.onConfirm,
          closeOnConfirm: payload.options.closeOnConfirm,
          displayConfirmButton: payload.options.displayConfirmButton,
          displayCloseButton: payload.options.displayCloseButton,
          displayCloseCross: payload.options.displayCloseCross
        });
      });
    }

    if (!this.hideEventListener) {
      this.hideEventListener = Emitter.on(EventsEnum.HIDE, () => {
        ModalContainer.clearState(this);
      });
    }
  }

  componentWillUnmount(): void {
    if (!this.showEventListener) {
      Emitter.off(EventsEnum.DISPLAY, null)
      Emitter.off(EventsEnum.HIDE, null)
    }
  }

  private static handleClose(context: ModalContainer): void {
    ModalContainer.clearState(context);
  }

  private static clearState(context: ModalContainer): void {
    context.setState({
      show: false,
      title: '',
      body: '',
      confirmButton: '',
      closeButton: '',
      confirmCallback: null,
      closeOnConfirm: true,
      displayConfirmButton: true,
      displayCloseButton: true,
      displayCloseCross: true
    });
  }

  private static handleConfirm(context: ModalContainer): void {
    if (context.state.confirmCallback) {
      context.state.confirmCallback();
    }
    if (context.state.closeOnConfirm) {
      ModalContainer.clearState(context);
    }
  }

  private displayClose() {
    if (this.state.displayCloseButton) {
      return <Button variant="secondary"
                     onClick={() => ModalContainer.handleClose(this)}>{this.state.closeButton}</Button>;
    } else {
      return null;
    }
  }

  private displayConfirm() {
    if (this.state.displayConfirmButton) {
      return <Button variant="primary"
                     onClick={() => ModalContainer.handleConfirm(this)}>{this.state.confirmButton}</Button>;
    } else {
      return null;
    }
  }

  render(): JSX.Element {
    return <Modal className='global-modal'
                  show={this.state.show}
                  backdrop={"static"}>
      <Modal.Header closeButton={this.state.displayCloseCross} onHide={() => ModalContainer.handleClose(this)}>
        <Modal.Title>{this.state.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{this.state.body}</p>
      </Modal.Body>

      <Modal.Footer>
        {this.displayClose()}
        {this.displayConfirm()}
      </Modal.Footer>
    </Modal>
  }
}
