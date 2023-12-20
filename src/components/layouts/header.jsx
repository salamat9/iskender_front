import React from 'react';
import LogoSmall from '../icons/logoSmall';
import CatalogIcon from '../icons/catalogIcon';
import NotificationIcon from '../icons/notificationIcon';
import { ReactComponent as ProfileSVG } from '../icons/profile.svg';
import { ReactComponent as TriangleDown } from '../icons/triangle-down.svg';
import { ReactComponent as Location } from '../icons/location.svg';
import { ReactComponent as Market } from '../icons/market.svg';

const Header = () => {
  return (
    <div className='header-background'>
      <div className='header container'>
        <div className='header-left'>
          <div className='header-left_login'>
            <ProfileSVG />
            <span>Войти/Зарегистироваться</span>
            <TriangleDown />
          </div>
          <div className='header-left_address'>
            <Location />
            <span>Адреса</span>
          </div>
        </div>
        <div className='header-logo'>
          <a href=''>
            <LogoSmall />
          </a>
        </div>
        <div className='header-right'>
          <div className='header-right_catalog'>
            <CatalogIcon />
            Каталог
          </div>
          <div className='header-right_notification'>
            <NotificationIcon />
          </div>
          <div className='header-right_market'>
            <Market />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
