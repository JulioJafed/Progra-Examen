import FaceLogo from '../components/faceLogo.png'
import LinkLog from '../components/Link.png'
import GitLogo from '../components/logoGitHub.png'
import '../components/footer.css'
const footer = () => {
    return (
        <div className='footer'>
            <a className='footer' href="https://www.facebook.com/jafed.cabreraortega.5"> 
            <img className='Logos' src={FaceLogo}></img></a>

            <a className='footer' href="https://www.linkedin.com/in/julio-jafeth-cabrera-ortega-b25925274/">
            <img className='Logos'  src={LinkLog}></img></a>

            <a  className='footer' href="https://github.com/JulioJafed">
            <img className='Logos'  src={GitLogo}></img></a>
                

        </div>
    )
}

export default footer