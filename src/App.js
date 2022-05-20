import { useState } from 'react';
import './App.css';
import InputAge from './components/InputAge';
import InputLastName from './components/InputLastName';
import InputName from './components/InputName';
import PersonalInfo from './components/PersonalInfo';

function App() {

  const [personInfo, setPersonInfo] = useState({});
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="w-1/4">
       <InputName setPersonInfo={setPersonInfo}/>
      </div>
      <div className="w-1/4 mt-6">
        <InputLastName personInfo={personInfo} setPersonInfo={setPersonInfo} />
      </div>
      <div className="w-1/4 mt-6">
        <InputAge personInfo={personInfo} setPersonInfo={setPersonInfo}/>
      </div>

      <div className='flex flex-col items-start w-1/4'>
        <PersonalInfo name={personInfo.name} lastName={personInfo.lastName} age={personInfo.age}/>
      </div>
    </div>
  );
}

export default App;
