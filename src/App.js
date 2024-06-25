import React, { act, useState } from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState('');
  const [active, setActive] = useState(false);

  const clickEvent = () => {
    const data = {
      name: name,
      email: email,
      message: message,
      language: language,
      active : active
    }
    console.log(data);
  }
  const programmingLanguages = ['java', 'Python', 'JavaScript', 'PHP'];


  return (
    <div className='container'>
      <form className='col-6 border border-primary d-flex flex-column align-items-center'>
        <div className="form-group mb-4 mt-4 col-4">
          <input type='text' onChange={(e) => setName(e.target.value)} className='form-control' placeholder="Enter Your Name ...." />
        </div>
        <div className="form-group mb-3 col-4">
          <input type='text' onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder="Enter Your Email ...." />
        </div>
        <div className="form-group mb-3 col-4">
          <input type='text' onChange={(e) => setMessage(e.target.value)} className='form-control' placeholder="Enter Your Message...." />
        </div>
        <div className='form-group mb-3 col-4'>
          <select className='user-option' value={language} onChange={(e) => setLanguage(e.target.value)}>
            {programmingLanguages.map((item, index) => <option key={index} value={item}>{item}</option>)}
          </select>
        </div>
        <div className=" col-4 d-flex justify-content-start mb-3">
          <input type='checkbox'  onChange={(e) => setActive(!active)} value={active} />
        </div>
        <div className="form-group mb-4 col-4">
          <button type="button" onClick={()=>clickEvent()} className='btn btn-primary d-flex justify-content-center '>Submit</button>
        </div>


      </form>
    </div>
  )
}

export default App
