import './_Error.scss'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='error-container'>
            <h2>404</h2>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <Link className='error-container_link' to="/">Retourner sur la page d’accueil</Link>  
        </div>
    )
}
 
export default Error