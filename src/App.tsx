import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import {Button} from "./types";
import Alert from "./components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showFirstAlert, setShowFirstAlert] = useState(false);
  const [showSecondAlert, setShowSecondAlert] = useState(false);
  const cancel = () => setShowModal(false);
  const continueFunction = () => alert('You clicked continue!');
  const buttonArray: Button[] = [
    {id: '1', type: 'primary', label: 'Continue', onClick: continueFunction},
    {id: '2', type: 'danger', label: 'Close', onClick: cancel}
  ];

  return (
    <div className="container m-3">
      <Alert show={showFirstAlert} type="warning" onDismiss={() => setShowFirstAlert(false)}>This is a warning type alert</Alert>
      <Alert show={showSecondAlert} type="success" clickDismissible onDismiss={() => setShowSecondAlert(false)}>This is a success type alert</Alert>
      <button className="btn btn-primary me-2" onClick={() => setShowModal(true)}>Show modal</button>
      <button className="btn btn-warning me-2" onClick={() => setShowFirstAlert(true)}>Show first alert</button>
      <button className="btn btn-success me-2" onClick={() => setShowSecondAlert(true)}>Show second alert</button>
      <Modal show={showModal} title="Some kind a modal title" onClose={cancel} buttons={buttonArray}>
          <div className="modal-body">
            This is a modal content
          </div>
        </Modal>
    </div>
  );
}

export default App;
