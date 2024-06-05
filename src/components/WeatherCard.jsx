import React from 'react'

export const WeatherCard = () => {

  return (
    <div style={{ width: "459px" }} className="relative h-screen w-full bg-[#1E213A] text-white">
      <div className=''>
        <button className=' bg-[#6E707A] w-[161px] h-10 mt-10 ml-10  hover:bg-gray-600'>
          Search for places
        </button>
      </div>

      <div className='w-full h-2/5 relative '>
        <figure className='w-full h-full opacity-20'>
          <img src="Cloud-background.png" alt="" className='object-cover w-full h-full' />
        </figure>

        <figure className='w-48 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50'>
          <img src="Shower.png" alt="" />
        </figure>
      </div>

      <div className='mb-14 text-center'>
        <div className=" text-[144px]  leading-none text-center inline-block">
          <span className="text-[#e7e7eb] text-9xl font-serif mt-6">15</span>
          <span className="text-5xl font-normal text-[#A09FB1] ">°C</span>
        </div>
      </div>

      <div className="text-[#A09FB1] text-center text-4xl mt-6 mb-12">
        <span className=''>Shower</span>
      </div>

      <div className='text-[#88869D] text-center mb-4'>
        <p className=''>Today  •  Wed, 5 Jun</p>
        <div className='flex justify-center mt-10'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
          <span className='ml-2'>Location</span>
        </div>
      </div>



    </div>
  )
}


