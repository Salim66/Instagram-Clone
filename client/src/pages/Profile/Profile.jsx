import React, { useState } from 'react';
import FooterAuth from '../../components/FooterAuth/FooterAuth';
import Header from '../../components/Header/Header';
import UserImage from './profile_image.png';
import { AiOutlinePhone } from "react-icons/ai";
import './Profile.scss';

const Profile = () => {

  // Tabs State
  let [toggleTab, setToggleTab] = useState(1);

  const handleTabs = (index) => {
    setToggleTab(index);
  }


  return (
    <>
      <Header />

      <div className="profile__container">
        <div className="profile__wrapper">
          <div className="profile__user--info">
            <div className="profile__user--image">
              <img src={UserImage} alt="" className="user__image" />
            </div>
            <div className="profile__text--info">
              <div className="profile__info--top">
                <h2 className='username'>salimhasanriad</h2>
                <a href="#" className='edit__profile'>Edit Profile</a>
                <a href="#" className='options'><svg aria-label="Options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></a>
              </div>
              <div className="profile__info--middle">
                <p className='total__post'>0 posts</p>
                <a href="#" className="total__followers">0 followers</a>
                <a href="#" className="total__following">6 following</a>
              </div>
              <div className="profile__info--bottom">
                <h5 className='name'>Johnny Dep</h5>
              </div>
            </div>
          </div>
          <div className="divider">
            <hr />
          </div>
          <div className="profile__navbar">
            <ul className="profile__navbar--ul">
              <li className="profile__navbar--li"><a href="#" className={ toggleTab === 1 ? "profile__navbar--link active" : "profile__navbar--link"} onClick={ () => handleTabs(1) }><svg aria-label="" class="_ab6-" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg> <span>POSTS</span></a></li>
              <li className="profile__navbar--li"><a href="#" className={ toggleTab === 2 ? "profile__navbar--link active" : "profile__navbar--link"} onClick={ () => handleTabs(2) }><svg aria-label="" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg> <span>SAVED</span></a></li>
              <li className="profile__navbar--li"><a href="#" className={ toggleTab === 3 ? "profile__navbar--link active" : "profile__navbar--link"} onClick={ () => handleTabs(3) }><svg aria-label="" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg> <span>TAGGED</span></a></li>
            </ul>
          </div>
          <div className={ toggleTab === 1 ? "navbar__contain is_active" : "navbar__contain" }>
            <h5 className="gatting_started">Getting Started</h5>
            <div className="add-phone__number-box">
              <div className="phone__icon">
                <AiOutlinePhone class="icon" />
              </div>
              <h5 className='add__phone--number'>Add phone number</h5>
              <p className='add__phone--text'>Add your phone number so you can reset your password, find friends and more.</p>
              <a href="#" className="add__phone--link">Add phone number</a>
            </div>
          </div>
          <div className={ toggleTab === 2 ? "navbar__contain is_active" : "navbar__contain" }>
            <div className="navbar__container-2nd">
              <p className='saved__left'>Only you can see what you've saved</p>
              <div className="saved__middle">
                <div className="logo"><svg aria-label="" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></div>
                <div className="logo__title">Save</div>
                <p className="logo__text">Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</p>
              </div>
              <div className="saved__right">
                <a href="#" className="new__collection">+ New Collection</a>
              </div>
            </div>
          </div>
          <div className={ toggleTab === 3 ? "navbar__contain is_active" : "navbar__contain" }>
            <div className="navbar__container-3nd">
              <div className="logo"><svg aria-label="" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg></div>
              <div className="tagged__title">Photos of you</div>
              <p className="tagged__text">When people tag you in photos, they'll appear here.</p>
            </div>
          </div>
        </div>

        <FooterAuth />
      </div>

    </>
  )
};

export default Profile;