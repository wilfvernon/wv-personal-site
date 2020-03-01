import React from 'react';
 
const Menu = (props) => {
    const handleClick = (e) => {
        e.persist()
        props.setModal(true)
        props.setModalContent(e.target.innerHTML)
    }

    return (
        <div id="Menu">
            <h3 onClick={handleClick} value="About">About</h3>
            <h3 onClick={handleClick} value="Projects">Projects</h3>
            <h3 onClick={handleClick} value="Blog">Blog</h3>
            <h3 onClick={handleClick} value="Resume">Resume</h3>
        </div>
    );
}
 
export default Menu;