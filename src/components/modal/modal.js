import React from "react";
import "./modal.scss";

function Modal(props) {
  const { isShowModal, modalTitle, children } = props;
  console.log(children);
  return (
    <>
      {isShowModal ? (
        <div className="modal isShowModal">
          <div>
            <div className="modal-title">{modalTitle}</div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
  // return <>{isShowModal ? <div className="modal isShowModal"> </div> : ""}</>;
}

export default Modal;
