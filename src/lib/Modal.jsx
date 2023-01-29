import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import closeDefault from './assets/close.svg';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.7);
  box-sizing: border-box;
  z-index: 999;
`

const ModalBlock = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  border-radius: 0;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  padding: 0;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  bottom: calc(100% + 1em);
  right: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

/**
 * Simple modal component displaying its children as content.
 * 
 * @param {Node} children                     Modal content (React element).
 * @param {Boolean} isOpen                    Component state.
 * @param {Function} onClose                  Close callback function.
 * @param {String} closeIcon                  Image path for close button.
 * @param {(String | Number)} closeIconSize   Close icon size (square) in pixel.
 * @returns {ReactComponentElement}
 */
function Modal({ children, isOpen, onClose, closeIcon, closeIconSize }) {

  const handleOutsideClick = (e) => {
    // Close modal if the user click outside of the modal's content.
    if (isOpen && e.target.classList.contains('modalWrapper')) {
      e.preventDefault();
      onClose(e);
    }
  }

  const handleKeyDown = (e) => {
    // Close modal on "Escape" key press.
    if (isOpen && e.key === 'Escape') {
      e.preventDefault();
      onClose(e);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => { window.removeEventListener('keydown', handleKeyDown) };
  }, []);

  return (
    <>
      {isOpen ? (
        <Wrapper
          className='modalWrapper'
          role="dialog"
          aria-hidden={isOpen}
          onClick={handleOutsideClick}
        >
          <ModalBlock tabIndex={1}>
            <CloseButton onClick={onClose} size={closeIconSize}>
              <img src={closeIcon} alt="Close" />
            </CloseButton>
            {children}
          </ModalBlock>
        </Wrapper>
      ) : null}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  closeIcon: PropTypes.string,
  closeIconSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Modal.defaultProps = {
  closeIcon: closeDefault,
  closeIconSize: 30,
}

export default Modal;