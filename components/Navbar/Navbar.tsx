"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css'
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navbar = () => {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false); // State to manage active class

    const toggleActive = () => {
        setIsActive(!isActive); // Toggle the state value
    };

  return (
    <>
      <header className="w-full flex border-b justify-between">
        <div className="wrapper flex items-center">
          <Link href={'/'}>
            <Image className='max-w-none' width={100} height={100} src={'/home.svg'} alt="home image" />
          </Link>
          <Link href={'/'} className={`${styles.normalLink} ${pathname === '/' ? styles.customLink : ''}`}>
            <div>Home</div>
          </Link>
          <Link href={'/phones?page=1'} className={`${styles.normalLink} ${pathname === '/phones' ? styles.customLink : ''}`}>
            <div>Phones</div>
          </Link>
          <Link href={'/tablets?page=1'} className={`${styles.normalLink} ${pathname === '/tablets' ? styles.customLink : ''}`}>
            <div>Tablets</div>
          </Link>
          <Link href={'/accessories?page=1'} className={`${styles.normalLink} ${pathname === '/accessories' ? styles.customLink : ''}`}>
            <div>Accessories</div>
          </Link>
        </div>
        <div className='flex'>
          <div className={`${styles.hamburgermenu} ${isActive ? styles.active : ''}`} onClick={toggleActive}>
            <span className={`${styles.bar} ${styles.bar1}`}></span>
            <span className={`${styles.bar} ${styles.bar2}`}></span>
            <span className={`${styles.bar} ${styles.bar3}`}></span>
          </div>
          <Image className={`${styles.normalimage} border-x border-gray-300`} width={20} height={20} src={'/icons/Heart.svg'} alt="cart image" />
          <Link href={'/cart'}>
            <Image className='px-4 py-3 box-content' width={20} height={20} src={'/icons/shop.svg'} alt="cart image" />
          </Link>
        </div>
      </header>
      {isActive && <BurgerMenu />}
    </>
  )
}

export default Navbar