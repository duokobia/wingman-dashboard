import React from 'react'

const SideNav = () => {
  return (
    <aside className='min-h-screen max-w-[250px] bg-green-800 text-sky-200'>
      <ul className='flex flex-col gap-12 px-4 py-8'>
        <li>Logo</li>
        <li>Dashboard</li>
        <li>Chat</li>
        <li>Grid</li>
        <li>Settings</li>
      </ul>
    </aside>
  )
}

export default SideNav