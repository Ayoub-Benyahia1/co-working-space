import React from 'react'
import space1 from "../images/working-space.jpg"
import space2 from "../images/working-space3.jpg"

function HeroSection() {
  return (
    <section className='lg:h-[100dvh]'>
      <div className='w-[100%] h-[100%] md:flex gap-10 pt-4 lg:pt-10'>
        <div className='md:w-[60%] h-[100%] flex flex-col gap-4 md:gap-12 lg:gap-0 lg:justify-between'>
          <h1 className='text-6xl md:text-7xl lg:text-9xl text-center'>The Future <br />Of Office</h1>
          <div className='lg:w-[90%] h-[55%] lg:flex lg:justify-between'>
            <img src={space1} alt="working space" className='w-[80%] lg:w-[40%] h-[60%] md:h-auto m-auto md:m-0' loading="lazy" />
            <div className='flex flex-col pt-6 lg:pt-0 md:text-lg'>
              <p className='text-center lg:text-left lg:w-[70%]'>Upgrade your workspace, reduce your overhead.</p>
              <div className='flex gap-6 mt-2 mx-auto lg:mx-0 md:gap-10 md:mt-10'>
                <div>
                  <h1 className='text-5xl md:text-7xl'>38</h1>
                  <p>Rooms Available</p>
                </div>
                <div>
                  <h1 className='text-5xl md:text-7xl'>50+</h1>
                  <p>Reading Ressources</p>
                </div>
              </div>
              <div className='flex gap-20 mt-6 mx-auto lg:mx-0 md:gap-14 md:mt-10'>
                <div>
                  <h1 className='text-5xl md:text-7xl'>75</h1>
                  <p>Devices Setup</p>
                </div>
                <div className='text-left'>
                  <h1 className='text-5xl md:text-7xl'>24</h1>
                  <p>Hours Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-8 w-[90%] mx-auto md:w-[60%] md:mx-0 md:py-0 lg:w-[40%]'>
          <img src={space2} alt="working space2" className='md:h-[60%] lg:h-[80%]' loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection