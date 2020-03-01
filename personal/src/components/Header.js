import React from 'react';
import Menu from './Menu'
 
const Header = (props) => {
    return (
        <div className="header-div">
            <div id="header-top">
                <h2 id="header-name">Wilf Vernon</h2>
                <h2 id="header-title">Software Engineer</h2>
            </div>
            <hr></hr>
            <Menu setModal={props.setModal} setModalContent={props.setModalContent}/>
        </div>
    );
}
 
export default Header;