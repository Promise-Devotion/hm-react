import React from "react";

import Modal from "../modal";

function CheckModal(props) {
  const { data, isShowCheckModal, closeModal } = props;
  console.log(data);
  return (
    <Modal isShowModal={isShowCheckModal} modalTitle="查看事件">
      <p className="topic">时间：{data.id}</p>
      <p className="topic">内容：{data.content}</p>
      <p className="topic">状态：{data.completeFlag ? "完成" : "未完成"}</p>
      <div>
        <button className="btn btn-primary" onClick={closeModal}>
          确定
        </button>
      </div>
    </Modal>
  );
}

export default CheckModal;
