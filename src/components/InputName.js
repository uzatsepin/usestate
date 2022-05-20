import React from 'react'

const InputName = ({setPersonInfo}) => {

  const handleName = (event) => {
    setPersonInfo({
      name: event.target.value
    });
  }

  return (
    <>
       <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 ">
          Enter your name
        </label>
        <input
        onChange={handleName}
          type="text"
          id="firstName"
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          placeholder="First Name"
        />
    </>
  )
}

export default InputName