import styles from '../css/ModalWindow.module.css';

const ModalWindow = ({ imgSrc, setShowModal }) => {
  return (
    <div className={styles.overlay} onClick={() => setShowModal(prevState => !prevState)}>
      <div>
        <img src={imgSrc} alt={imgSrc} />
      </div>
    </div>
  );
};

export default ModalWindow;
