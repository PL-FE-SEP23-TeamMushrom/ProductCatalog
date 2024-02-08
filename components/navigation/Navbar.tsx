"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full flex border-b justify-between">
      <div className="wrapper flex items-center">
        <Link href={'/'}>
          <Image className='max-w-none' width={100} height={100} src={'/home.svg'} alt="home image" />
        </Link>
        <Link href={'/'} className={`${styles.normalLink} ${pathname === '/' ? styles.customLink : ''}`}>
          <div>Home</div>
        </Link>
        <Link href={'/phones'} className={`${styles.normalLink} ${pathname === '/phones' ? styles.customLink : ''}`}>
          <div>Phones</div>
        </Link>
        <Link href={'/tablets'} className={`${styles.normalLink} ${pathname === '/tablets' ? styles.customLink : ''}`}>
          <div>Tablets</div>
        </Link>
        <Link href={'/accesories'} className={`${styles.normalLink} ${pathname === '/accesories' ? styles.customLink : ''}`}>
          <div>Accesories</div>
        </Link>
      </div>
      <div className='flex'>
        <div className={`${styles.hamburgermenu}`}>
          <span className={`${styles.bar} ${styles.bar1}`}></span>
          <span className={`${styles.bar} ${styles.bar2}`}></span>
          <span className={`${styles.bar} ${styles.bar3}`}></span>
        </div>
        <Image className={`${styles.normalimage} border-x border-gray-300`} width={20} height={20} src={'/icons/Heart.svg'} alt="cart image" />
        <Image className={`${styles.normalimage}`} width={20} height={20} src={'/icons/shop.svg'} alt="cart image" />
      </div>
    </header>
  )
}

export default Navbar