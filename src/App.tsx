import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import {Button} from "./types";

function App() {
  const [showModal, setShowModal] = useState(false);
  const cancel = () => setShowModal(false);
  const continueFunction = () => alert('You clicked continue!');
  const buttonArray: Button[] = [
    {id: '1', type: 'primary', label: 'Continue', onClick: continueFunction},
    {id: '2', type: 'danger', label: 'Close', onClick: cancel}
  ];

  return (
    <>
      <div className="container m-3">
        <button className="btn btn-primary me-2" onClick={() => setShowModal(true)}>Show modal</button>
        <Modal show={showModal} title="Some kind a modal title" onClose={cancel} buttons={buttonArray}>
          <div className="modal-body">
            This is a modal content
          </div>
        </Modal>
      </div>
    </>

  );
}

export default App;
