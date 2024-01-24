import ErrorLogo from '../../assets/picto/404.png'

function Error() {
    return (
        
        <div>
            <img src={ErrorLogo} alt="" />
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
        </div>
    )
}
 
export default Error