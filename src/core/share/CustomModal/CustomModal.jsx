
import { CloseIcon } from "../../Icons/CloseIcon";
import "./styles.css";

export const CustomModal = ({children, title = 'Alerta', viewHeader, clickAction }) => {
  return (
    <div className="contenedor-modal">
      <div className="modal">
        {
            viewHeader && 
        <div className="modal__container">
          <h3 className="modal__title">{title}</h3>
        </div>
        }
        <button 
        className="modal__closeButton"
        onClick={clickAction}
        >
         <CloseIcon/>
        </button>
        <div className="modal__contenido">
        {children}
        </div>
      </div>
    </div>
  );
};
