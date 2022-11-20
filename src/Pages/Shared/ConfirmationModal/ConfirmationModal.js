import React from "react";

const ConfirmationModal = ({ title, message, handleCloseModal }) => {
  return (
    <div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            {message}
          </p>
          <div className="modal-action">
            <label htmlFor="confirm-modal" className="btn btn-warning ">
              Confirm
            </label>
            <button onClick={handleCloseModal} className="btn btn-accent btn-outline">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
