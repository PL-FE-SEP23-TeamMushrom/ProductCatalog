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
          <Image width={100} height={100} src={'/home.svg'} alt="home image" />
        </Link>
        <Link href={'/'} className={`py-3 mx-3 ${pathname === '/' ? styles.customLink : ''}`}>
          <div>Home</div>
        </Link>
        <Link href={'/phones'} className={`py-3 mx-3 ${pathname === '/phones' ? styles.customLink : ''}`}>
          <div>Phones</div>
        </Link>
        <Link href={'/tablets'} className={`py-3 mx-3 ${pathname === '/tablets' ? styles.customLink : ''}`}>
          <div>Tablets</div>
        </Link>
        <Link href={'/accesories'} className={`py-3 mx-3 ${pathname === '/accesories' ? styles.customLink : ''}`}>
          <div>Accesories</div>
        </Link>
      </div>
      <div className='flex'>
        <Image className='px-4 py-3 box-content border-x border-gray-300' width={20} height={20} src={'/icons/Heart.svg'} alt="cart image" />
        <Image className='px-4 py-3 box-content' width={20} height={20} src={'/icons/shop.svg'} alt="cart image" />
      </div>
    </header>
  )
}

export default Navbar