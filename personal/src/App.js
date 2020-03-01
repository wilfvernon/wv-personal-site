import React, {useState} from 'react';
import './App.css';
import Watercolor from './components/Watercolor'
import Header from './components/Header'
import InfoModal from './components/InfoModal';


function App() {
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState("")
  console.log(modal)
  return (
    <div className="App">
      <Header setModal={setModal} setModalContent={setModalContent}/>
      <Watercolor/>
      <InfoModal 
        visible={modal} 
        content={modalContent}
        setModal={setModal} 
        setModalContent={setModalContent}
      />
    <div className={`cd-transition-layer ${modal? "opening visible":"closing"}`}> 
      <div className={`bg-layer ${modalContent}`}></div>
    </div>
    </div>
  );
}

export default App;
