import React from 'react'
import datas from '../../datas/dropdowns.json';
import './_Dropdown.scss'

function Dropdown({title, description}){
    return(
        <div className="dropdown-section">
            {datas.map((data)=>
            <div className='dropdown-section_container'>
            <div className='dropdown-section_container_title'>
                <h2>{data.title}</h2>
            </div>
            <div className='dropdown-section_container_description'>
                <p>{data.content}</p>
            </div>
        </div>
            )}
            
        </div>
    )

}

export default Dropdown;
//deux etats ouvert et fermé
// animation au clique de la fleche
