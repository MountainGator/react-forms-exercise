import NewToDoForm from "./newtodoform";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './todolist.css'
import ToDoItem from "./todo-item";


const ToDoList = () => {
    
    const INITIAL_VALUE = {
        toDoText: '',
        priority: '', 
        id: 'first'
    }

    const [toDos, setToDos] = useState([]);
    const [formData, setFormData] = useState(INITIAL_VALUE)

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({ ...formData, id: uuidv4() });
    }

    const deleteToDo = (e) => {
        e.preventDefault();
        const tarId  = e.target.id;
        const toDoId = document.getElementById(tarId).previousElementSibling.id;
        setToDos(toDos => toDos.filter(t => t.id !== toDoId));
    }

    const addToDo = ({toDoText, priority, id}) => {
        const textColor = setPriorityColor(priority);
        setToDos([...toDos, { toDoText, id, textColor}]);
    }

    const setPriorityColor = (priority) => {
        let textColor = 'to-do-item';
        
        if (priority === '1') {
            textColor = 'to-do-item red';
        } else if (priority === '2') {
            textColor = 'to-do-item yellow';
        } else if (priority === '3') {
            textColor = 'to-do-item green';
        }

        return textColor;
    }

    return (
        <div id="container">
            <h1 id='title'>To Do List</h1>
            <NewToDoForm handleSubmit={handleSubmit} setFormData={setFormData} formData={formData} />
            <ul id="all-todos">
                {toDos.map(({ toDoText, id, textColor }) => <ToDoItem 
                key={uuidv4()} 
                deleteToDo={deleteToDo} 
                id={id}
                toDoText={toDoText}
                textColor={textColor}
                />)}
            </ul>
        </div>
    )
}

export default ToDoList;