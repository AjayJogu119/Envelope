import React, { useState } from 'react'

const Main = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggleEnvelope = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
      <div className="wrapper">
            <div className={`lid one ${isOpen ? 'open' : ''}`}></div>
            <div className={`lid two ${isOpen ? 'open' : ''}`}></div>
            <div className="envelope"></div>
            <div className={`letter ${isOpen ? 'open' : ''}`}>
                <p>hello</p>
            </div>
            <button onClick={toggleEnvelope} className='toggle-button'>
                {isOpen ? 'Close Envelope' : 'Open Envelope'}
            </button>
      </div>
    </div>
  )
}

export default Main
