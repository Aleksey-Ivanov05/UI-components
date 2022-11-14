import React, {MouseEventHandler} from 'react';

interface Props extends React.PropsWithChildren{
  show: boolean;
  type: string;
  onDismiss?: MouseEventHandler;
  clickDismissible?: boolean;
}

const Alert: React.FC<Props> = ({show, type, onDismiss, clickDismissible, children}) => {
  let alert = (<div className={"alert alert-" + type} style={{display: show ? 'block' : 'none'}}>
    <div className="d-flex justify-content-between">
      {children}
    </div>
  </div>);
  if (onDismiss) {
    alert = <div className={"alert alert-" + type} style={{display: show ? 'block' : 'none'}}>
      <div className="d-flex justify-content-between">
        {children}
        <button type="button" className="btn-close" onClick={onDismiss}></button>
      </div>
    </div>
  }

  if (clickDismissible) {
    alert = <div className={"alert alert-" + type} style={{display: show ? 'block' : 'none'}} onClick={onDismiss}>
      <div className="d-flex justify-content-between">
        {children}
      </div>
    </div>
  }

  return (
    <>
      {alert}
    </>
  );
};

export default Alert;