import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){ //props --> key (text) value (title name) pair of the data in App.js
    const [modalIsOpen, setModalIsOpen] = useState(false); //first value false is stored , second is function to change the value

    function deleteHandler(){
        setModalIsOpen(true);
    }
    
    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return (<div className="card">
    <h2>{props.text}</h2>
    <h4>Due in {2+2} days</h4>
    <div className="actions">
      <button className="btn" onClick={deleteHandler}>Delete</button> 
    </div> 
    {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>:null} //? True: False statements
    {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}  //same but both must be true and if so, the second argument will be executed
  </div>);
}

export default Todo;
