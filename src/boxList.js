import {useState} from 'react';
import Box from './box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

const BoxList = () => {
    
    const INITIAL_STATE = {
        bkgdColor: '#ffffff', 
        width: '', 
        height: '',
        id: '1'
    }

    let myuuid = uuidv4();

    const [boxes, setBoxes] = useState([INITIAL_STATE]);    
    
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.debug(handleSubmit);
        addBox({ ...formData, id: myuuid });
    }

    const deleteBox = (e) => {
        e.preventDefault();
        const tarId  = e.target.id;
        const boxId = document.getElementById(tarId).previousElementSibling.id;
        setBoxes(boxes => boxes.filter(b => b.id !== boxId));
    }

    const addBox = ({bkgdColor, width, height, id}) => {
        setBoxes(boxes => [...boxes, { bkgdColor, width, height, id}]);
    }

    return (
        <>
            <NewBoxForm handleSubmit={handleSubmit} setFormData={setFormData} formData={formData} />

            <div className="container">
                {boxes.map(({ bkgdColor, width, height, id }) => 
                <Box key={id} 
                bkgdColor={bkgdColor} width={width} 
                height={height}
                id={id} 
                deleteBox={deleteBox}
                />)}
            </div>
        </>
    )
}

export default BoxList;