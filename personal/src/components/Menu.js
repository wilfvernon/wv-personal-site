import React from 'react';
import '../menu.css'

 
const Menu = (props) => {
    const handleClick = (e) => {
        e.persist()
        props.setModal(true)
        props.setModalContent(e.target.innerHTML)
    }

    return (
        <div id="Menu">
            <h3 onClick={handleClick} id="menu-item-about">About</h3>
            <h3 onClick={handleClick} id="menu-item-projects">Projects</h3>
            <h3 id="menu-item-blog"><a href="https://scheduledprogramming937331789.wordpress.com/">Blog</a></h3>
            <h3 id="menu-item-resume"><a href="https://docs.google.com/document/d/1ejnJOxgDcL9TH5s_8FQTykbnsGuOPN06pzAOICVtUNA/edit?usp=sharing">Resume</a></h3>
        </div>
    );
}
 
export default Menu;