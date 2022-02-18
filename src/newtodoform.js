import './newtodoform.css';

const NewToDoForm = ({ handleSubmit, setFormData, formData }) => {
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }
   
    return ( 
    <form onSubmit={handleSubmit}>
        <label htmlFor="toDoText">To Do</label>
        <input type="text" 
        id="toDoText" 
        name="toDoText" 
        value={formData.toDoText}
        onChange={handleChange}
        />

        <label htmlFor="priority">Priority</label>
        <input type="number" 
        id="priority" 
        name="priority" 
        value={formData.priority}
        onChange={handleChange}
        placeholder='number 1-3'
        min='1'
        max='3'
        />

        <button type="submit">Add To-Do</button>
    </form>
    )


}

export default NewToDoForm;