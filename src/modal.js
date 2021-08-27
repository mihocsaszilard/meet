import './modal.scss';

const Modal = ({ handleClose, show, description, htmlLink }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-container">
         <div className="modal-description">
         <h3 >Details:</h3>{description}</div>
         <div className="button-container">
        <a href={htmlLink} alt="redirects to calendar"> 
          <button className="attend-btn modal-btn">Add to calendar</button>
        </a>
        <button className="details-btn close-btn modal-btn" type="button" onClick={handleClose}>
          Close
        </button>
        </div>
        </div>
      </section>
    </div>
    
  );
};

export default Modal;