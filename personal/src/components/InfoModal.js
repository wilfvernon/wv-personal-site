import React from 'react';
import "../inkTransition.css"
 
const InfoModal = (props) => {
    const closeModal = () => {
        props.setModal(false)
        props.setModalContent("")
    }
    return (
        <div className={`cd-modal ${props.visible ? 'visible' : ''} ${props.content}`}>
            <div className="modal-content">
               <h1>{props.content}</h1>
               <img id="wilf-portrait" src="/wilf-watercolor.png" alt="portrait"/>
            <button onClick={closeModal}>Close</button>
            </div> 
        </div>
    );
}
 
export default InfoModal;