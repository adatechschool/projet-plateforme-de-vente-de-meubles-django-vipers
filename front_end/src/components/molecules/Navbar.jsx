import React from 'react'
import Menu_burger from '../atoms/Menu_burger'
import Search_bar from '../atoms/Search_bar'
import Account_logos from '../atoms/Account_logos'
import Admins from '../atoms/Admins'

const Navbar = () => {
  return (

    <div className='sticky top-0 w-full z-50 backdrop-blur-sm bg-white-200 bg-opacity-50'>
      <div className='flex pr-8'>

        {/* Menu burger à gauche */}
        <div className='flex items-center'>
          <Menu_burger />
        </div>

        {/* Le reste à droite */}
        <div className='flex ml-auto items-center'>
          <Admins />
          <Search_bar />
          <Account_logos />
        </div>
      </div>
    </div>

  )
}

export default Navbar