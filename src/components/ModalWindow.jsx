import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/actions";
import styles from "../css/ModalWindow.module.css";

const ModalWindow = () => {
  // Redux setup
  const modalImage = useSelector((state) => state.modalImage);
  const dispatch = useDispatch();

  return (
    <div className={styles.overlay} onClick={() => dispatch(toggleModal(false))}>
      <div>
        <img src={modalImage} alt={modalImage} />
      </div>
    </div>
  );
};

export default ModalWindow;
