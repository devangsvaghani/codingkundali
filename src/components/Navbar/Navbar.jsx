'use client';

import Link from "next/link"

const Navbar = () => {


  return (
    <nav className='w-full h-auto flex flex-row justify-between mt-4'>
      
      <Link href="/" className="text-3xl ml-4 cursor-pointer">Coding Kundali</Link>
      
    </nav>
  )
}

export default Navbar