# React-Bootstrap-Modality

![Modality example](./docs/demo.gif)

React-Bootstrap-Modality allows you to display Bootstrap (4) modals with ease. You no longer need to have repetitive
definitions of modals throughout your project.

This project was inspired by [react-toastify](https://github.com/fkhadra/react-toastify).

## Installation

```
$ npm install --save react-bootstrap-modality
$ yarn add react-bootstrap-modality
```

## Features

- Wraps react-bootstraps modal and provides two functions to show and dismiss the modal programmatically
- A few options (with more to come), allowing you to show/hide various buttons, bind a function to the confirm button,
  etc.

## How to use

```jsx
import React from 'react';

import {ModalityContainer, Modality} from 'react-bootstrap-modality';

function App() {
  const showModal = () => Modality.showModal('Some lovely title', 'Some lovely body', {
    // your options go here
    onConfirm: () => {
      //do some lovely action post-confirm
    }
  });

  return (
    <div>
      <button onClick={showModal}>Show Modality!</button>
      <ModalityContainer/>
    </div>
  );
}
```

## Documentation

There are two functions.


##### Show the modal
```ts
Modality.showModal(title, body, options);
```
`title` - string or element

`body` - string or element

`options`
```ts
{
    confirmButton: 'Confirm', // string
    closeButton: 'Close', // string
    onConfirm: undefined, // callback function
    closeOnConfirm: true, // boolean
    displayConfirmButton: true, // boolean
    displayCloseButton: true, // boolean
    displayCloseCross: true // boolean
}
```

##### Dismiss the modal
```ts
Modality.dismissModal();
```

## About the author
Luke Johnstone is lead software engineer at TouchFoundry, a digital consultancy firm based in Cape Town, South Africa. Do [check out our website](https://touchfoundry.co.za) :smile:


## License

Licensed under MIT
