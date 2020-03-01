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
            <h3 value="Blog"><a href="https://scheduledprogramming937331789.wordpress.com/">Blog</a></h3>
            <h3 value="Resume"><a href="https://docs.google.com/document/d/1ejnJOxgDcL9TH5s_8FQTykbnsGuOPN06pzAOICVtUNA/edit?usp=sharing">Resume</a></h3>
        </div>
    );
}
 
export default Menu;