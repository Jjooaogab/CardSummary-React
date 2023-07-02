import React from 'react'
import Image from 'next/image'
import HeroSvg from '../../public/illustration-hero.svg'
import MusicSvg from '../../public/icon-music.svg'

export default function CardComponent() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-[100vh] bg-zinc-800'>
        <div className="w-[360px] h-[34.5rem] sm:w-[400px] sm:h-[37rem] md:w-[400px] lg:w-[400px] bg-paleBlue-100 rounded-2xl shadow-lg">
          <div className=""> {/* Div Img */}
            <Image
              src={HeroSvg}
              alt=""
              decoding='async'
              className='rounded-t-2xl'
            />
          </div>
          <div className=""> {/* Div Texts */}
            <div className="flex flex-col items-center gap-4"> {/* Div Title, Subtitle */}
              <h1 className='font-extrabold text-2xl mt-6 text-paleBlue-900'>Order Summary</h1>
              <span className='font-extralight text-paleBlue-300 text-center w-60 text-sm'>You can now listen to millions of songs, audiosbooks, and pocasts on any device anywhere you like!</span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-between mt-8 bg-paleBlue-200 w-80 p-4 rounded-lg"> {/* Div Plane */}
                <div className="flex flex-row">
                <Image
                  src={MusicSvg}
                  alt=""
                  decoding='async'
                  className=''
                />
                <div className="flex flex-col ml-4">
                  <span className='font-bold'>Annual Plan</span>
                  <span className='font-medium text-paleBlue-300'>$59.99/year</span>
                </div>
                </div>
                <span className='mr-2 text-paleBlue-500 font-medium underline underline-offset-1 transition-all hover:underline-offset-4'>Change</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-4">  {/* Div Buttons */}
              <button className='bg-paleBlue-500 p-3 w-64 font-medium text-paleBlue-100 rounded-lg transition-all hover:opacity-80 sm:w-80'>
                <span>Proceed to Payment</span>
              </button>
              <button className='bg-paleBlue-200 p-3 w-64 font-bold text-paleBlue-300 rounded-lg transition-all hover:text-paleBlue-900 hover:shadow-2xl sm:w-80 '>
                <span>Cancel Order</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}