import React, { useState } from 'react';
import './LoginScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import SignInScreen from './SignInScreen';

function LoginScreen() {

    const [signin, setSignin] = useState(false);

    return (
        <div className="loginScreen">
            {signin ? (
                <SignInScreen />
            ) :
            (
                <>  
                    <div className="logNav">
                        <img className="lognav__logo" src="https://www.jamesdodkins.com/uploads/6/4/7/0/6470224/published/prime-video_1.png?1552987507" alt="amazon-logo"/>
                        <ul className="nav__links">
                            <li><FontAwesomeIcon icon={faGlobe} /><span>EN</span></li>
                            <li onClick={() => setSignin(true)} >Sign In</li>
                        </ul>
                    </div>
                    
                    <div className="mainPage">
                        <div className="part__one">
                            <div className="text__one">
                                <h1 className="title">Welcome to Prime Video</h1>
                                <h5 className="caption">Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</h5>
                                <button onClick={() => setSignin(true)} className="logButton">Start your 30-day free trial</button>
                            </div>
                            
                        </div>
                        <div className="part__two">
                            <div className="text__two">
                                <h1 className="title">Great Entertainment</h1>
                                <h5 className="caption">With your Prime membership, you have access to exclusive Amazon Originals, blockbuster Bollywood movies, regional movies and more.</h5>
                                <button onClick={() => setSignin(true)} className="logButton">Get Started</button>
                            </div>
                        </div>
                        <div className="part__three">
                            <div className="text__three">
                                <h1 className="title">One membership, many benefits</h1>
                                <h5 className="caption">Your Prime membership now also includes ad-free music along with unlimited free, fast delivery on eligible items, exclusive access to deals & more.</h5>
                                <button onClick={() => setSignin(true)} className="logButton">Get Started</button>
                                <p>*Go to amazon.in/prime for more information</p>
                            </div>
                            
                        </div>
                        <div className="part__four">
                            <div className="text__four">
                                <h1 className="title">Even better with Fire TV Stick</h1>
                                <h5 className="caption">The biggest movies and TV shows are always better on a big screen.Simple plug in your Amazon Fire TV Stick snd stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</h5>
                                <button onClick={() => setSignin(true)} className="logButton">Get Started</button>
                            </div>
                        </div>
                        <div className="part__five">
                            <div className="t1">
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg" alt="t1_image"/>
                                <h1>Watch anywhere</h1>
                                <p>Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.</p>
                            </div>
                            <div className="t1">
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg" alt="t1_image2"/>
                                <h1>Download and go</h1>
                                <p>Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.</p>
                            </div>
                            <div className="t1">
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png" alt="t1_image3"/>
                                <h1>Data saver</h1>
                                <p>Control data usage while downloading and watching videos on select phones or tablets.</p>
                            </div>
                        </div>
                        <div className="part__six">
                            <div className="text__six">
                                <h1 className="title">Family Friendly</h1>
                                <h5 className="caption">With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</h5>
                                <button onClick={() => setSignin(true)} className="logButton">Get Started</button>
                            </div>
                    
                        </div>
                    </div>    
                </>
            )}
            
        </div>
    )
}

export default LoginScreen
