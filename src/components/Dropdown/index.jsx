import React from 'react'
import { useState } from 'react';
import Arrow from '../../assets/picto/Arrow.svg'

import './_Dropdown.scss'

function Dropdown({title, description}){
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
                </div>
            } 
        </div>
    )
}

export default Dropdown;

