import React from 'react'
import { ReactComponent as Logo } from '../icons/Logo.svg'
import { ReactComponent as Insta } from '../icons/insta.svg'
import { ReactComponent as Facebook } from '../icons/facebook.svg'

const Footer = () => {
  return (
    <div className='background'>
      <div className='footer container'>
        <div className='footer-logo'>
          <a href=''>
            <Logo />
          </a>
          <div className='footer-logo_text'>
            Первый отечественный бренд Iskender на рынке <br />
            сантехники от компании ОсОО «Стройдом.кг»
          </div>
        </div>
        <div className='footer-columns'>
          <div className='footer-columns-column'>
            <div className='footer-columns-column_title'>Полезное</div>
            <div className='footer-columns-column_content'>
              <div>Как стать поставщиком</div>
              <div>Условие продаж</div>
              <div>Как заказыть</div>
              <div>Доставка</div>
              <div>Самовывоз</div>
            </div>
          </div>
          <div className='footer-columns-column'>
            <div className='footer-columns-column_title'>Компания</div>
            <div className='footer-columns-column_content'>
              <div>Каталог</div>
              <div>Адреса магазинов</div>
              <div>Помощь</div>
              <div>О нас</div>
            </div>
          </div>
          <div className='footer-columns-column'>
            <div className='footer-columns-column_title'>Контакты</div>
            <div className='footer-columns-column_content'>
              <div>
                Email: <br />
                iskender.kg@gmail.com
              </div>
              <div>
                Телефон: <br />
                +996 (550) 12 53 29s
              </div>
            </div>
          </div>
          <div className='footer-columns-column'>
            <div className='footer-columns-column_title'>Соц. сети</div>
            <div className='footer-columns-column_content footer-icons'>
              <a href=''>
                <Insta />
              </a>
              <a href=''>
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
