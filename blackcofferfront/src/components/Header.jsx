import React from 'react'

const Header = () => {
  return (
    <div className='h-[80px] w-[250px] fixed left-4 top-4 '>
        <div className='flex justify-around items-center'>
            <img src="https://static.vecteezy.com/system/resources/previews/009/005/031/original/black-coffee-logo-design-free-vector.jpg" alt="blockcoffer" className='w-[60px] h-[60px] rounded-full' />
            <h1 className='text-4xl text-black'>BlackCoffer</h1>
        </div>
    </div>
  )
}

export default Header