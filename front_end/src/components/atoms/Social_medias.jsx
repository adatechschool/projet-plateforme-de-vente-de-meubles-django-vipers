import React from 'react';
import facebookLogo from '../../assets/facebook (3).png';
import twitterLogo from '../../assets/twitter.png';
import instagramLogo from '../../assets/instagram.png';
import linkedinLogo from '../../assets/linkedin.png';
import tiktokLogo from '../../assets/tic-tac.png';



const Social_medias = () => {

  return (
    <>
      <div className="space-y-3 pt-7 flex flex-col items-center">
    
        
      <ul className='flex space-x-4 w-[200px]'>
          <li><a href="https://www.facebook.com" target='_blank'><img src={facebookLogo} alt="" /></a></li>
          <li><a href="https://www.twitter.com" target='_blank'><img src={twitterLogo} alt="" /></a></li>
          <li><a href="https://www.instagram.com" target='_blank'><img src={instagramLogo} alt="" /></a></li>
          <li><a href="https://www.linkedin.com" target='_blank'><img src={linkedinLogo} alt="" /></a></li>
          <li><a href="https://www.tiktok.com" target='_blank'><img src={tiktokLogo} alt="" /></a></li>

        </ul>
      </div>

    </>
  );
};

export default Social_medias



