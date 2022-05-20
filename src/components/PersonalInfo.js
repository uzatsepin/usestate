import React from 'react'

const PersonalInfo = ({name, lastName, age}) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
        <div className='mt-6 font-bold mb-4'>Your personal information</div>
        <div className='text-left'>Your Name: <span className='font-bold'>{name}</span></div>
        <div className='text-left'>Your Last Name: <span className='font-bold'>{lastName}</span></div>
        <div className='text-left'>Your Full Age: <span className='font-bold'>{age}</span></div>
        <div className='text-left'>Year of birth: <span className='font-bold'>{year - (age ? age : 0)}</span></div>
    </>
  )
}

export default PersonalInfo