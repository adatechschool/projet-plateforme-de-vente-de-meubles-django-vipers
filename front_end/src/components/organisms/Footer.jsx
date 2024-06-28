import React from 'react';
import Footer_center from '../../components/molecules/Footer_center';
import Footer_left from '../../components/molecules/Footer_left';
import Footer_right from '../../components/molecules/Footer_right';
import Paiement_method from '../atoms/Paiement_method';

const Footer = () => {
  return (
    <div className='bg-[#beaa7c] text-white mt-3'>

      {/* FOOTER ELEMENTS */}
      <div className='pt-12 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center'>

        <Footer_left />
        <Footer_center />
        <Footer_right />
      </div>

      {/* COPYRIGHT SECTION */}
      <div className='flex flex-col md:flex-row items-center justify-center mt-2 pt-2 pb-4'>
        
        <div className='text-center'>
          <p className='text-sm'>
            Copyright &copy; 2024 Django Vipers. All rights reserved.
          </p>
          <p className='text-xs'>
            CGV & Mentions Légales | Politique de gestion de confidentialité.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Footer;
