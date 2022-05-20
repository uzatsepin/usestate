import React from 'react'

const InputAge = ({setPersonInfo, personInfo}) => {

  const handleAge = (event) => {
    setPersonInfo({
      ...personInfo,
      age: event.target.value 
    });
  }

  return (
    <>
      <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">
          Enter your <span className='font-bold'>Full</span> Age
        </label>
        <input
        onChange={handleAge}
          type="number"
          id="age"
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          placeholder="Your Age"
          defaultValue={18}
        />
    </>
  )
}

export default InputAge