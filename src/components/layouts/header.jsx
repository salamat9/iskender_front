import React from 'react';
import LogoSmall from '../icons/logoSmall';
import CatalogIcon from '../icons/catalogIcon';
import LocationIcon from '../icons/locationIcon';
import NotificationIcon from '../icons/notificationIcon';

const Header = () => {
  return (
    <div className='header'>
      <div>Войти/Зарегистироваться</div>
      <div className='header-logo'>
        <LogoSmall />
      </div>
      <div>
        <button>
          <CatalogIcon />
        </button>
        <button>
          <LocationIcon />
        </button>
        <span>
          <NotificationIcon />
        </span>
        <span>icon 4</span>
      </div>
    </div>
  );
};

export default Header;
