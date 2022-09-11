import Head from 'next/head'

import { useState } from 'react'

import PropertyButton from '../components/propertyButton'

export default function Beginner() {
  const [show, setShow] = useState({
    'Movement': true,
    'Speed': true,
    'Obstacles': true,
    'Score': true,
  })

  const toggleShow = (property) => {
    setShow({
      ...show,
      [property]: !show[property]
    })
  }
  return (
    <div className='h-full'>
      <Head>
        <title>(Guided) Tutorial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-full grid gap-4 grid-cols-4 grid-rows-4'>
        <div className='col-start-1 col-span-2 row-start-1 row-span-3'>
          <div className='h-full flex flex-col justify-between'>
            <PropertyButton show={show} property="Movement" onClick={toggleShow}/>
            <PropertyButton show={show} property="Speed" onClick={toggleShow}/>
            <PropertyButton show={show} property="Obstacles" onClick={toggleShow}/>
            <PropertyButton show={show} property="Score" onClick={toggleShow}/>
          </div>
        </div>
        <div className='col-start-3 col-span-2 row-start-1 row-span-2'>
          <div className='h-full flex flex-col justify-start px-10'>
            <div className='h-4/5 aspect-square border-black border-4 rounded'></div>
          </div>
        </div>
        <div className='col-start-3 col-span-2 row-start-3 row-span-1'>
          <div className='h-full px-5'>
            <div className='h-4/5 border-black border-4 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  )
}