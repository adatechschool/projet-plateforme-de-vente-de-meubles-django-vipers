import React from 'react'
import Menu_burger from '../atoms/Menu_burger'
import Search_bar from '../atoms/Search_bar'
import Account_logos from '../atoms/Account_logos'

const Navbar = () => {
  return (
    <div className='flex'>
      <Menu_burger/>
      <Search_bar/>
      <Account_logos />
    </div>
  )
}

export default Navbar