import React, {useEffect, useState} from 'react';
import '../styling/components/Welcome.scss';
import {Link} from 'react-router-dom'
import CloudSpan from '../assets/Clouds/CloudSpan/CloudSpan';
import PaperPlanes from '../assets/Planes/PaperPlanes/PaperPlanes';
import PlaneWithTrail from '../assets/Planes/PlaneWIthTrail/PlaneWithTrail';
import CaretDownIcon from '../assets/icons/systemIcons/CaretDownIcon';
import CaretUpIcon from '../assets/icons/systemIcons/CaretUpIcon';
import ZeppiCloud from '../assets/ZeppiLogo/ZeppiCloud/ZeppiCloud';
import Zeppi from '../assets/ZeppiLogo/Zeppi/Zeppi';

function useWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWidth(window.innerWidth);
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return width;
}

function Welcome() {
    const [isOpen, setIsOpen] = useState(false);
    const width = useWidth();

   return (
        <div className="Welcome">
            <div className="cloud-container">
                <div className="nav-bar">
                    <div className={`header-buttons ${!isOpen ? 'hidden-md-down' : ''}`}>
                        <div className="container__row justify-end">
                            <Link to="/login" className="login-button">LOGIN</Link>
                            <Link to="/signup" className="signup-button">SIGNUP</Link>
                        </div>
                    </div>
                </div>
                <div className="welcome-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CaretDownIcon className="welcome-toggle-icon"/> : <CaretUpIcon className="welcome-toggle-icon"/>}
                </div>
            </div>
            <div className="preview-container">
                <div className="container__row">
                   {(width > 767) ? <Zeppi className="welcome-logo"/> : <ZeppiCloud className="welcome-logo"/>}
                </div>
                <div className="GraphicRow">
                    <div className="container__row ">
                    {(width > 767) ? <PaperPlanes isLoading={false} className="paper-planes"/> : <PlaneWithTrail className="plane-trail"/>}
                    </div>
                    <CloudSpan className="CloudSpan"/>
                </div>
            </div>
        </div>
    )
}

export default Welcome;