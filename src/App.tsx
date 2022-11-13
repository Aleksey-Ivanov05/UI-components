import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const cancel = () => setShowModal(false);


  return (
    <>
      <div className="container m-3">
        <button className="btn btn-primary me-2" onClick={() => setShowModal(true)}>Show modal</button>
        <Modal show={showModal} title="Some kind a modal title" onClose={cancel}>
          <div className="modal-body">
            This is a modal content
          </div>
        </Modal>
      </div>
    </>

  );
}

export default App;
