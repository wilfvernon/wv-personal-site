import React from 'react';
import "../InkTransition.css"
 
const InfoModal = (props) => {
    const closeModal = () => {
        props.setModal(false)
        props.setModalContent("")
    }
    return (
        <div className={`cd-modal ${props.visible ? 'visible' : ''} ${props.content}`}>
            <div className="modal-content">
               <h1>{props.content}</h1>

               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Ad modi repellendus, optio eveniet eligendi molestiae? 
                  Fugiat, temporibus! 
               </p>
            <button onClick={closeModal}>Close</button>
            </div> 
        </div>
    );
}
 
export default InfoModal;