import React from 'react';
import './ProfileScreen.css';

function ProfileScreen() {
    return (
        <div className="profileScreen">
            <div className="profile__Nav">
                <img className="lognav__logo" src="https://www.jamesdodkins.com/uploads/6/4/7/0/6470224/published/prime-video_1.png?1552987507" alt="amazon-logo"/>
            </div>
            <div className="profile__body">
                <h2>Who's Watching?</h2>
                <ul className="profile__avatar">
                    <li>
                    <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="profile__avatar1"/>
                    </li>
                    <li>
                    <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png" alt="profile__avatar2"/>
                    </li>
                    <li className="profile__add">
                        +
                    </li>
                    

                </ul>
                

            </div>
            
            

        </div>
    )
}

export default ProfileScreen
