import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import {Button} from "../../types";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons: Button[];
}

const Modal: React.FC<Props> = ({show, title , onClose, buttons, children}) => {
  return (
    <>
      <Backdrop show={show}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            {children}
            <div className="modal-footer">
              {buttons.map(button => (
                <button key={button.id} className={'btn btn-' + button.type} onClick={button.onClick}>{button.label}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;