import React, { useState, useEffect } from 'react'

export default function Question({ question }) {

    const [isOpen, setIsOpen] = useState(false)
    const [buttonText, setButtonText] = useState("")

    useEffect(() =>{
    isOpen ? setButtonText("-") : setButtonText("+")
    }, [isOpen])

  return (
    <div>      
        <h4>{question.title}</h4>
          <button 
          onClick={()=>setIsOpen(!isOpen)}
          className='question-btn'>
            {buttonText}
            </button>
          {isOpen ? <p>{question.info}</p> : "" }
    </div>
  )
}
