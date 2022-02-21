import NewToDoForm from "./newtodoform";
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './todolist.css'
import ToDoItem from "./todo-item";


const ToDoList = () => {
    const INITIAL_TODOS = JSON.parse(localStorage.getItem('todos')) || [];


    const INITIAL_VALUE = {
        toDoText: '',
        priority: '', 
        id: 'first'
    }

    const [toDos, setToDos] = useState(INITIAL_TODOS);
    const [formData, setFormData] = useState(INITIAL_VALUE)

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({ ...formData, id: uuidv4() });
        setFormData(INITIAL_VALUE);
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

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(toDos));
    }, [toDos]);

    const setPriorityColor = (priority) => {
        let textColor = priority === '1' ? 'to-do-item red' 
            : (priority === '2' ? 'to-do-item yellow' 
            : (priority === '3' ? 'to-do-item green' : 'to-do-item white'));

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