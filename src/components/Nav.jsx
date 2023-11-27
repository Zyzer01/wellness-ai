
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <header className="h-15 w-full dark:bg-black shadow-sm dark:border-gray-700">
    <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
      {/* Logo */}
       <h2 className='font-bold text-3xl  text-gray-900 dark:text-white'>
         <Link href="/" >
         Wellness AI
         </Link>
       </h2>

        {/* Theme Switcher  */}
        <ThemeToggle />
    </div>
  </header>
  )
}

export default Navbar