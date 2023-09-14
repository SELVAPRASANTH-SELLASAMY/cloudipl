import logo from './assets/companylogo.png';
import worldicon from './assets/worldicon.svg';
import './css/tskbar.css';
function tskBar(){
    return(
        <div className="container">
            <div className="logo">
                <img src={logo} alt="company-logo" />
            </div>
            <div className="container-1">
                <div className="home">
                    <p>Home</p>
                </div>
                <div className="world-icon">
                    <img src={worldicon} alt="worldicon" />
                </div>
            </div>
        </div>
    );
}
export default tskBar;