import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import NotLogin from '../NotLogin/NotLogin';
import { BsThreeDots, BsEmojiSmile } from "react-icons/bs";
import top1 from './top1.png';
import top2 from './top2.png';
import top3 from './top3.png';
import top4 from './top4.png';
import post1 from './post1.jpg';
import post2 from './post2.jpg';
import post3 from './post3.jpg';
import profileImage from './profile_image.png';
import './Home.scss';
import AuthContext from '../../context/AuthContext';
import cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  // create handle user logout 
  const handleUserLogout = (e) => {
      e.preventDefault();

      cookie.remove('token');
      cookie.remove('user');

      dispatch({ type: 'LOGOUT_USER' })

      navigate('/login');

  }

  return (
    <>
        <Header />

        <div className="home__section">
          <div className="home__wrapper">
            <div className="body__left">
              <div className="top__section">
                <ul className="top__img--ul">
                  <li className="top__img--li"><a href="#" className="top__img--link">
                    <img src={ top1 } alt="top-img" />
                    <h4>kourtney</h4>
                  </a></li>
                  <li className="top__img--li"><a href="#" className="top__img--link">
                    <img src={ top2 } alt="top-img" />
                    <h4>mileycyrus</h4>
                  </a></li>
                </ul>
              </div>
              <div className="bottom__section">
                <div className="post__head">
                  <div className="head__left">
                    <a href="#" className="head__left--link">
                      <img src={ top1 } alt="" />
                      <h4>kourtney</h4>
                    </a>                    
                  </div>
                  <div className="head__right">
                    <a href="" className="head__right--link">
                      <BsThreeDots className="head__right--icon" />
                    </a>
                  </div>
                </div>
                <div className="post__body">
                  <div className="post__body--top">
                    <img className='post__image' src={ post1 } alt="" />
                  </div>
                  <div className="post__body--bottom">
                    <div className="body__bottom--top">
                      <div className="body__bottom--left">
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></a>
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></a>
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
                      </div>
                      <div className="body__bottom--right">
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
                      </div>
                    </div>
                    <div className="body__bottom--bottom">
                      <a href="#" className="bbb__like--link">98,825 likes</a>
                      <div className="body__text-details">
                        <a href="#" className='username'>kourtney</a> Photos by @dina_litovsky | Canadian magician Shane Cobalt prepares to go on stage at the FISM World Championship of Magic...more
                      </div>
                      <a href="#" className="view__comments">View all 219 comments</a>
                      <a href="#" className="created_at">2 HOURS AGO</a>
                    </div>
                  </div>
                </div>
                <div className="post__footer">
                  <a href="#" className="emoj__link"><BsEmojiSmile /></a>
                  <form action="#" className="comment__form">
                    <input type="text" name='search' placeholder='Add a comment...' />
                    <button type="submit">Post</button>
                  </form>
                </div>
              </div>
              <div className="bottom__section">
                <div className="post__head">
                  <div className="head__left">
                    <a href="#" className="head__left--link">
                      <img src={ top2 } alt="" />
                      <h4>kourtney</h4>
                    </a>                    
                  </div>
                  <div className="head__right">
                    <a href="" className="head__right--link">
                      <BsThreeDots className="head__right--icon" />
                    </a>
                  </div>
                </div>
                <div className="post__body">
                  <div className="post__body--top">
                    <img className='post__image' src={ post3 } alt="" />
                  </div>
                  <div className="post__body--bottom">
                    <div className="body__bottom--top">
                      <div className="body__bottom--left">
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></a>
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></a>
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
                      </div>
                      <div className="body__bottom--right">
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
                      </div>
                    </div>
                    <div className="body__bottom--bottom">
                      <a href="#" className="bbb__like--link">98,825 likes</a>
                      <div className="body__text-details">
                        <a href="#" className='username'>kourtney</a> Photos by @dina_litovsky | Canadian magician Shane Cobalt prepares to go on stage at the FISM World Championship of Magic...more
                      </div>
                      <a href="#" className="view__comments">View all 219 comments</a>
                      <a href="#" className="created_at">2 HOURS AGO</a>
                    </div>
                  </div>
                </div>
                <div className="post__footer">
                  <a href="#" className="emoj__link"><BsEmojiSmile /></a>
                  <form action="#" className="comment__form">
                    <input type="text" name='search' placeholder='Add a comment...' />
                    <button type="submit">Post</button>
                  </form>
                </div>
              </div>
              <div className="bottom__section">
                <div className="post__head">
                  <div className="head__left">
                    <a href="#" className="head__left--link">
                      <img src={ top1 } alt="" />
                      <h4>kourtney</h4>
                    </a>                    
                  </div>
                  <div className="head__right">
                    <a href="" className="head__right--link">
                      <BsThreeDots className="head__right--icon" />
                    </a>
                  </div>
                </div>
                <div className="post__body">
                  <div className="post__body--top">
                    <img className='post__image' src={ post2 } alt="" />
                  </div>
                  <div className="post__body--bottom">
                    <div className="body__bottom--top">
                      <div className="body__bottom--left">
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></a>
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></a>
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
                      </div>
                      <div className="body__bottom--right">
                        <a href="#" className="bbl__link"><svg className='svg__s' aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
                      </div>
                    </div>
                    <div className="body__bottom--bottom">
                      <a href="#" className="bbb__like--link">98,825 likes</a>
                      <div className="body__text-details">
                        <a href="#" className='username'>kourtney</a> Photos by @dina_litovsky | Canadian magician Shane Cobalt prepares to go on stage at the FISM World Championship of Magic...more
                      </div>
                      <a href="#" className="view__comments">View all 219 comments</a>
                      <a href="#" className="created_at">2 HOURS AGO</a>
                    </div>
                  </div>
                </div>
                <div className="post__footer">
                  <a href="#" className="emoj__link"><BsEmojiSmile /></a>
                  <form action="#" className="comment__form">
                    <input type="text" name='search' placeholder='Add a comment...' />
                    <button type="submit">Post</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="body__right">
              <div className="body__right--top">
                <div className="profile__info">
                  <img className='profile__info--image' src={ profileImage } alt="" />
                  <div className="profile__text">
                    <h4 className="username">salimhasanriad</h4>
                    <h4 className="name">Johnny Depp</h4>
                  </div>
                </div>
                <div className="switch__account">
                  <a href="#" className="switch__acount--link">Switch</a>
                </div>
              </div>
              <div className="body__right--middle">
                <h4 className="brm__text--left">Suggestions For You</h4>
                <a href="#" className="follow__seeall--link">See All</a>
              </div>
              <div className="body__right--bottom">
                <div className="follow__info">
                    <img className='follow__info--image' src={ top2 } alt="" />
                    <div className="follow__text">
                      <h4 className="username">jlo</h4>
                      <h4 className="name">Followed by mileycyrus</h4>
                    </div>
                  </div>
                  <div className="follow__user">
                    <a href="#" className="follow__user--link">Follow</a>
                  </div>
              </div>
              <div className="body__right--bottom">
                <div className="follow__info">
                    <img className='follow__info--image' src={ top1 } alt="" />
                    <div className="follow__text">
                      <h4 className="username">kourtney</h4>
                      <h4 className="name">Followed by mileycyrus</h4>
                    </div>
                  </div>
                  <div className="follow__user">
                    <a href="#" className="follow__user--link">Follow</a>
                  </div>
              </div>
              <div className="body__right--bottom">
                <div className="follow__info">
                    <img className='follow__info--image' src={ top3 } alt="" />
                    <div className="follow__text">
                      <h4 className="username">kyliejenner</h4>
                      <h4 className="name">Followed by mileycyrus</h4>
                    </div>
                  </div>
                  <div className="follow__user">
                    <a href="#" className="follow__user--link">Follow</a>
                  </div>
              </div>
              <div className="body__right--bottom">
                <div className="follow__info">
                    <img className='follow__info--image' src={ top4 } alt="" />
                    <div className="follow__text">
                      <h4 className="username">milliebobbybrown</h4>
                      <h4 className="name">Followed by mileycyrus</h4>
                    </div>
                  </div>
                  <div className="follow__user">
                    <a href="#" className="follow__user--link">Follow</a>
                  </div>
              </div>
              <div className="log__out">
                <a href="#" onClick={ handleUserLogout }  className="logout">Logout</a>
              </div>
              <div className="body__footer">
                <div className="footer__top">
                  <ul className="footer__ul">
                    <li className="footer_li"><a href="#" className="footer__link">About</a></li>
                    <li className="footer_li"><a href="#" className="footer__link">Press</a></li>
                    <li className="footer_li"><a href="#" className="footer__link">API</a></li>
                    <li className="footer_li"><a href="#" className="footer__link">Jobs</a></li>
                    <li className="footer_li"><a href="#" className="footer__link">Privacy</a></li>
                    <li className="footer_li"><a href="#" className="footer__link">Terms</a></li>
                    <li className="footer_li"><a href="#" className="footer__link">Locations</a></li>
                  </ul>
                </div>
                <div className="footer__middle">
                  <select name="select" id="" className="footer__language--select">
                    <option value="Bangali">Language</option>
                    <option value="Bangali">Bangali</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Arabic">Arabic</option>
                    <option value="United State">United State</option>
                    <option value="United Kindom">United Kindom</option>
                  </select>
                </div>
                <div className="footer__bottom">
                  <p className='footer__copyright--text'>© 2022 INSTAGRAM FROM META</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      {/* <NotLogin/> */}
    </>
  )
};

export default Home;