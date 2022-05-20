import React from 'react'

const InputLastName = ({setPersonInfo, personInfo}) => {

  const handleLastName = (event) => {
    setPersonInfo({
      ...personInfo,
      lastName: event.target.value,
    });
  }

  return (
    <>
      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
      Enter your Last Name
    </label>

      <input
      onChange={handleLastName}
      type="text"
      id="lastName"
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
      placeholder="Your Last Name"
    />
  </>
  )
}

export default InputLastName