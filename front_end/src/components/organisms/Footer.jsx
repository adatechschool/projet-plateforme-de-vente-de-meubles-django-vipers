import React from 'react'
import Footer_center from '../../components/molecules/Footer_center'
import Footer_left from '../../components/molecules/Footer_left'
import Footer_right from '../../components/molecules/Footer_right'


const Footer = () => {
  return (
    <div className='bg-[rgb(201,181,137)] text-white mt-3'>

      {/* FOOTER ELEMENTS */}
      <div className='pt-12 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center'>

        <Footer_left />
        <Footer_center />
        <Footer_right />
      </div>

      {/* COPYRIGHT SECTION */}
      <div className='mt-2 pt-2 pb-4 '>
      <p className='text-center text-sm'> Copyright &copy; 2024 Django Vipers. All rights reserved.</p>
      <p className='text-center text-xs'>
        CGV & Mentions Légales | Politique de gestion de confidentialité.
      </p>
      </div>


    </div>
  )
}

export default Footer