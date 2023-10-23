import React from 'react'
import SavedShows from '../Components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
       <img className='absolute w-full h-[400px] object-cover' 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/bdc6c8c9-c928-4353-b3d9-35f45ba46129/KE-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
        alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          <SavedShows />
        </div>
      </div>
    </>
  )
}

export default Account
