import React from 'react'
import OurServices from './ourservices'
import Stats from './stats'
import Trusted from './trusted'
import Cta from './cta'

export default function HomePage() {
  return (
    <div className=''>
      <Stats/>
    <OurServices/>
    <Trusted/>
    <Cta/>
    </div>
  )
}
