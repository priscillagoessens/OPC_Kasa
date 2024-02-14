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
                {/* si toggle alors on ajoute la classe rotate sinon undefined */}
                <img src={Arrow} alt="arrow" className={toggle ? 'rotate' : undefined}  onClick={handleToggle}/>
            </div>
            {toggle &&
                <div className='dropdown-section_container_description'>
                    {/* Si il y a description alors on affiche le <p></p> sinon on affiche equipement  */}
                    {description ? (
                        <p>{description}</p>
                    ) : (
                        <ul>
                            {equipements.map((equipement, index) => (
                                <li key={index}>{equipement}</li>
                            ))}
                        </ul> 
                    )}
                </div>
            } 
        </div>
    )
}

export default Dropdown;

