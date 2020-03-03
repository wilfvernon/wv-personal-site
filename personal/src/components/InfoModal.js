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
            <button className="modal-close" onClick={closeModal}></button>
            </div> 
        </div>
    );
}
 
export default InfoModal;

