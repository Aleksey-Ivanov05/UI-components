import React, {MouseEventHandler} from 'react';

interface Props extends React.PropsWithChildren{
  show: boolean;
  type: string;
  onDismiss?: MouseEventHandler;
}

const Alert: React.FC<Props> = ({show, type, onDismiss, children}) => {
  let dismiss = (<div></div>);

  if (onDismiss) {
    dismiss = <button type="button" className="btn-close" onClick={onDismiss}></button>
  }

  return (
    <div className={"alert alert-" + type} style={{display: show ? 'block' : 'none'}}>
      <div className="d-flex justify-content-between">
        {children}
        {dismiss}
      </div>
    </div>
  );
};

export default Alert;