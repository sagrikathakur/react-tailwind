import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Team = () => {
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
      <Title title ='Meet our team' desc = 'The creative minds behind our agency'/>


<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 '>
  {teamData.map((team , index)=>(
    <div key = {index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 duration-500 transition-all cursor-pointer'>
      <img src={team.image} alt="" className='w-12 h-12 rounded-full'/>
<div className='flex-1'>
      <h3 className='text-lg font-semibold text-black dark:text-white'>{team.name}</h3>
      <p className='text-sm opacity-50 dark:text-gray-100'>{team.title}</p>
</div>
    </div>
  ))}

  

</div>
    </div>
  )
}

export default Team