import React from "react";

const ConfirmationModal = ({ title }) => {
  return (
    <div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="confirm-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
