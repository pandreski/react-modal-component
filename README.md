# modal-component for React JS

A simple modal dialog component for React JS.

## Installation

```
// with npm
npm i @pski/react-modal-component

// with yarn
yarn add @pski/react-modal-component
```

## Usage

Use the modal component as a classical React component.

All the content you place in it will be rendered in the body of the modal.

## Parameters

- `isOpen`: a boolean state value that indicates the display status of the component
- `onClose`: a callback function called for closing the modal (where you change the state value)
- `closeIcon`: (optional) a custom icon for the "close" button (svg, png, jpg)
- `closeIconSize`: (optional) a custom icon size in pixel (default: 30)

## Example

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Modal from '@pski/react-modal-component';
import closeIcon from './assets/close.svg';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  }

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  }

  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <button onClick={handleOpenModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        closeIcon={closeIcon}
        closeIconSize={40} // can be either a string or a number
      >
        {
          // Place here the content you need to display in the modal body.
          // e.g.:
        }
        Modal content
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```