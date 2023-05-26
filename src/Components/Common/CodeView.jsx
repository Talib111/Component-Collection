import { useContext, useState } from 'react'
import { contextVar } from '../Context/Context'
import {MdOutlineContentCopy} from 'react-icons/md'

function CodeView(props) {
    const [showCodeStatus, setshowCodeStatus] = useState(false)
    const [copyCount, setcopyCount] = useState(0)
    const { showCodeButton } = useContext(contextVar)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(props?.code)
          .then(() => {
            console.log('Text copied to clipboard');
            setcopyCount(prev=>prev+1)
          })
          .catch((err) => {
            console.error('Failed to copy text: ', err);
          });
      };

    return (
        <>
            {showCodeButton && <button onClick={() => setshowCodeStatus(!showCodeStatus)}
                type="button"
                className="rounded-full w-12 h-12 bg-white border-2 border-black px-3 py-2 font-bold text-black shadow-lg hover:text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black fixed top-10 right-10 flex justify-center items-center text-lg" style={{'zIndex':10000}}
            >
                {'</>'}
            </button>}
            {showCodeStatus && <div className='bg-gray-600 mt-10 p-10 text-white relative rounded-lg'>
                <span onClick={copyToClipboard} className='absolute top-2 right-2 cursor-pointer'>
                   <MdOutlineContentCopy className="hover:scale-110 text-4xl" />
                  {copyCount !==0 && <span className='absolute top-0 -left-4 text-xl'>{copyCount}</span>}
                </span>
                <pre>{props?.code}</pre>
            </div>}
        </>
    )
}

export default CodeView
