import React,{useState} from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function MyAccordion({question,answer}) {
    const[open,setOpen] = useState(false)
  return (
    <div>
        <div
                className="flex justify-between items-center"
                onClick={() => setOpen(!open)}
              >
                <h3 className="font-bold text-lg">{question}</h3>

                {open ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </div>

              {open && (
                <p className="text-gray-600 mt-4 transition">{answer}</p>
              )}
    </div>
  )
}

export default MyAccordion