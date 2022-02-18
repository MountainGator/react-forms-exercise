// import { Formik, Field, Form } from 'formik';
// import {useState} from 'react';

const NewBoxForm = ({ handleSubmit, setFormData, formData }) => { 
    
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
        <label htmlFor="bkgdColor">Color</label>
        <input type="color" 
        id="bkgdColor" 
        name="bkgdColor" 
        value={formData.bkgdColor}
        onChange={handleChange}
        />

        <label htmlFor="width">Width</label>
        <input type="text" 
        id="width" 
        name="width" 
        placeholder="enter number" 
        value={formData.width} 
        onChange={handleChange}
        />

        <label htmlFor="height">Height</label>
        <input type="text" 
        id="height"
        name="height" 
        placeholder="enter number" 
        value={formData.height} 
        onChange={handleChange}
        />

        <button type="submit">Make Box</button>
    </form>
  )
}

export default NewBoxForm;