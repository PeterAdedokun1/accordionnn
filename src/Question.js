import React from 'react'

// import { BiChevronDown } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

const Question = ({ id, heading, text }) => {
  const [toggle, setToggle] = React.useState(false)
  
  return (
    <div className='accord'>
      <div className='accord-section'>
        <div className='section' onClick={() => setToggle(!toggle)}>
        <h4>{heading}</h4>
          <button>
            {toggle ? <MdKeyboardArrowUp/> : <FiChevronDown/> }
         </button>
          </div>
        {toggle && <p className='text'>{text}</p>}
  {/* <p className='text'>{text}</p>  */}
        
        
      </div>
      <div>
      </div>
    </div>
  )
}

export default Question

// {
//           state.map((names) => {
//             const {id,heading,text } = names;
//             return <div className="accord" key={id}>
//               <div className="section">
//                 <h4>{heading}</h4>
//                 {
//                   toggle && <p className="text">{text}</p>
//                 } 
//               </div>
              
//             </div>
//           })
//         }