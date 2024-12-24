import React from 'react'
// import SideNav from './SideNav'
import Content from './Content'
import Header from './Header'

const MainSection = () => {
  return (
    <div className='bg-gray-100 text-gray-500 flex flex-col w-full'>
      <Header />
      <Content />
    </div>
  )
}

export default MainSection