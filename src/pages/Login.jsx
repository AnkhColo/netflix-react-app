import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/bdc6c8c9-c928-4353-b3d9-35f45ba46129/KE-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='Netflix HomePage'/>
      <div className='bg-black/60 fixed top-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-boldcle'>Sign In</h1>
            <form className='w-full flex flex-col py-4'>
              <input className='p-3 my-2 bg-gray-700' type='email' placeholder='Email' autoComplete='email'/>
              <input className='p-3 my-2 bg-gray-700' type='password' placeholder='Password' autoComplete='current-password'/>
              <button className='bg-red-600 py-3 my-6  rounded font-bold'>Sign In</button>
              <div className='flex justify-between items-center text-sm text-gray-600' >
                <p><input className='mr-2' type='checkbox' />Remember Me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-10'>
                <span className='text-gray-600' >New to Netflix?
                </span>{' '}
              <Link to='/signup' >Sign Up.</Link>
              </p>
            </form>
          </div>

        </div>

      </div>
      </div>

    </>
  )
}

export default Login
