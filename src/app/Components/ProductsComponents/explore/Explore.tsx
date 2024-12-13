import Image from 'next/image'
import React from 'react'

const Explore = () => {
  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '80vw', 
        height: '80vh', 
        margin: '0 auto' // This centers the container horizontally
      }}
    >
      <Image
        src="/Productsdata/explore.jpeg"
        alt="explore"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default Explore
