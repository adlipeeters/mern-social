import React from 'react'
import "./rightbar.css"
import CelebrationIcon from '@mui/icons-material/Celebration';
import { Users } from '../../dummyData'
import Online from '../online/Online';

export default function Rightbar({ profile }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <CelebrationIcon className="birthdayImg" />
                    <span className='birthdayText'> <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
                <img className='rightbarAd' src="https://i.ytimg.com/vi/WiPWwg3R-Ck/maxresdefault.jpg" alt="" />
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightBar = () => {
        return (
        <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
            </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingsName">John Carter</span>
            </div>
        </div>
        </>
        )
    }


    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
               {profile ? <ProfileRightBar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
