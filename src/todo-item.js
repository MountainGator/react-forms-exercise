import { v4 as uuidv4 } from 'uuid';
import './todo-item.css';
import { useState } from 'react';

const ToDoItem = ({ toDoText, deleteToDo, id, textColor }) => {
    let myUuid = uuidv4();

    const [hover, setHover] = useState(false);

    const toggleStrike = (e) => {
        e.preventDefault();
        const tarID = e.target.id;
        const thisLi = document.getElementById(tarID);

        thisLi.classList.toggle('strike');
    }

    const showX = () => (
        setHover(hover => hover === false ? true : false)
    );


    return (
        <div className='listDiv'>
        <li id={id} className={textColor} onClick={toggleStrike} onMouseOver={showX}>{toDoText}</li>
        {hover && <button id={myUuid} className='todobtn' onClick={deleteToDo}>X</button>}
        </div>
    )
}

export default ToDoItem;