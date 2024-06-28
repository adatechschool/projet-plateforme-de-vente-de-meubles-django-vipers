import React from 'react'
import About_us from '../atoms/About_us'
import Contact_us from '../atoms/Contact_us'


const Footer_right = () => {
  return (
    <div>

      <div
        className="space-y-6">
        <h1 className="lowercase text-4xl">
          About Us
        </h1>
          <About_us />
      </div>

    </div>
  )
}

export default Footer_right