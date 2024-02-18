import Sidebar from '@/components/Sidebar'
import React from 'react'
import YourChannel from '@/components/YourChannel'
export default function page () {
  return (
    <div className='flex'>
        <Sidebar/>
        <YourChannel/>
    </div>
  )
}
