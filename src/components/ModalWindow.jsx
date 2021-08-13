const ModalWindow = ({ imgSrc, setShowModal }) => {
  return (
    <div className="overlay" onClick={() => setShowModal(prevState => !prevState)}>
      <div className="modal">
        <img src={imgSrc} alt={imgSrc} />
      </div>
    </div>
  );
};

export default ModalWindow;
