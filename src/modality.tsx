import Emitter from './emitter';
import {EventsEnum} from './events.enum';

export class Modality {
  private static defaultOptions = {
    confirmButton: 'Confirm',
    closeButton: 'Close',
    onConfirm: undefined,
    onCancel: undefined,
    closeOnConfirm: true,
    displayConfirmButton: true,
    displayCloseButton: true,
    displayCloseCross: true
  }

  /**
   * Show a modal. Can be called from anywhere. Modality settings reset onClose
   * @param {string | JSX.Element} title The title of the modal
   * @param {string | JSX.Element} body The body of the modal
   * @param options Options that can be passed to the modal
   * @param {string} options.confirmButton="Confirm" The text to be displayed in the confirm button
   * @param {string} options.closeButton="Close" The text to be displayed in the close button
   * @param {function} options.onConfirm=null Optional call back function to be used when the confirm button is pressed
   * @param {function} options.onCancel=null Optional call back function to be used when the cancel button is pressed
   * @param {boolean} options.closeOnConfirm=true Set whether the modal should close after the confirm button is clicked. If false, you will need to dismiss it yourself using `Modality.dismissModal()`
   * @param {boolean} options.displayConfirmButton=true Set whether the modal should display the confirm button
   * @param {boolean} options.displayCloseButton=true Set whether the modal should display the close button
   * @param {boolean} options.displayCloseCross=true Set whether the modal should display the close button in the top right
   * @return {void}
   */
  public static showModal(title: string | JSX.Element,
                          body: string | JSX.Element,
                          options: {
                            confirmButton?: string,
                            closeButton?: string,
                            onConfirm?: () => void,
                            onCancel?: () => void,
                            closeOnConfirm?: boolean,
                            displayConfirmButton?: boolean,
                            displayCloseButton?: boolean,
                            displayCloseCross?: boolean
                          } = this.defaultOptions): void {

    console.log(Object.assign(this.defaultOptions, options));

    Emitter.emit(EventsEnum.DISPLAY,
      {
        title: title,
        body: body,
        options: Object.assign(this.defaultOptions, options)
      });
  }

  /**
   * Dismiss the modal
   * @return void
   */
  public static dismissModal(): void {
    Emitter.emit(EventsEnum.HIDE, {});
  }
}
