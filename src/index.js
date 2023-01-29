import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Modal } from './lib';

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
      >
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
