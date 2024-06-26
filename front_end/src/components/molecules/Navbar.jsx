import React from 'react'
import Menu_burger from '../atoms/Menu_burger'
import Search_bar from '../atoms/Search_bar'
import Account_logos from '../atoms/Account_logos'
import Admins from '../atoms/Admins'

const Navbar = () => {
  return (
    <div className='flex'>
      <Menu_burger/>
      <Search_bar/>
      <Admins />
      <Account_logos />
    </div>
  )
}

export default Navbar