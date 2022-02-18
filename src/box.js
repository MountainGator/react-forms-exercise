import {useState} from 'react';
import './box.css'
import { v4 as uuidv4 } from 'uuid';



const Box = ({ bkgdColor, width, height, id, deleteBox }) => {
    const boxStyle = {
        backgroundColor: bkgdColor,
        width: `${width}rem`,
        height: `${height}rem`
    }
    
    let myuuid = uuidv4();

    const [hover, setHover] = useState(false);

    const displayX = (e) => {
        console.debug(displayX);
        setHover(hover => hover === false ? true : false);
    }

    return (
        <>
            <div style={boxStyle} id={id} className="box" onMouseOver={displayX}></div>
            {hover && <button id={myuuid} onClick={deleteBox}>X</button>}
        </>
    )
}
 
export default Box;