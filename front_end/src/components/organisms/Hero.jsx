import React from 'react'
import heroBanneer from '../../assets/hero_banneer.jpg'

const Hero = () => {
    return (
        <div className='pt-14'>
            {/* hero section */}

            <div className='flex flex-col pt-12 mt-5 relative'>
                <div className='absolute top-0 left-0 w-full'>
                    <h1 className='text-8xl font-thin pb-5 text-left pl-16 z-10'>vipers furniture</h1>
                </div>
                <div className='z-1 pt-3'>
                    <img src={heroBanneer} alt="Not found" className="w-[1000px] h-auto mx-auto" />
                </div>
            </div>



        </div>
    )
}

export default Hero