import CallList from '@/components/CallList'
import React from 'react'

const Recorings = () => {
  return (
    <section className="flex size-full flex-col gap-5 text-white">
    <h1 className='text-3xl font-bold'>
      Recordings
    </h1>
    <CallList type="recordings"/>
  </section>
  )
}

export default Recorings