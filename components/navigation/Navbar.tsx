"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-12 border-b">
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
    </header>
  )
}

export default Navbar