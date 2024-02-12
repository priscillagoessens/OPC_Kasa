import { useState } from 'react';
import Arrow from '../../assets/picto/Arrow.svg'

function Dropdown({title, description, equipements}){
    const [toggle, setToggle] = useState(false)

    const handleToggle =(e) =>{
        setToggle(!toggle)
    }
    return(
        <div className='dropdown-section_container'>
            <div className='dropdown-section_container_title' >
                <span>{title}</span>
                <img src={Arrow} alt="arrow" className={toggle ? 'rotate' : ''}  onClick={handleToggle}/>
            </div>
            {toggle &&
                <div className='dropdown-section_container_description'>
                    <p>{description}</p>
                    <ul>
                        <li>{equipements}</li>
                    </ul>
                </div>
            } 
        </div>
    )
}

export default Dropdown;

