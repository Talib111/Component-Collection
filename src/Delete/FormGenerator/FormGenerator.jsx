
import { useState } from 'react'
import { RiChatSmile2Line, RiSendPlane2Fill } from 'react-icons/ri'
import dayjs from 'dayjs'
import { AiTwotoneUnlock, AiOutlineUnorderedList } from 'react-icons/ai'
import { BsReverseListColumnsReverse } from 'react-icons/bs'
import { CiCalendarDate } from 'react-icons/ci'
import { MdPermMedia } from 'react-icons/md'
import { BsToggle2Off } from 'react-icons/bs'
import { TableView } from './TableView'

// CARD COMPONENT
function ChatCard(props) {
    return (
        <div className='col-span-5 pr-2 pl-2 mt-2'>
            <div onClick={() => props?.openSecondModal(props?.name)} className='flex border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-50'>
                <div className='flex-initial flex justify-center items-center'>
                    {props?.icon}
                </div>
                <div className='inline-block p-2 rounded-lg'>
                    <div className='font-semibold text-gray-700 text-sm'>{props?.name}</div>
                    <div className='text-xs text-gray-500'>{props?.desc}</div>
                </div>
            </div>
        </div>
    )
}




function FormGenerator() {

    const [inputFields, setinputFields] = useState(new Map());
    const [currentSelectedField, setcurrentSelectedField] = useState(null);
    // Function to update the Map
    const collectInput = () => {
        const newMap = new Map(inputFields);
        newMap.set(currentSelectedField, currentSelectedField);
        setinputFields(newMap);
        secondModal.close()
    };

    console.log('selected field',inputFields)

    const openSecondModal = (selectedField) => {
        console.log('open second',selectedField)
        setcurrentSelectedField(selectedField)
        d.close()
        secondModal.showModal()
    }

    const dataList = [
        { name: 'Text', desc: 'Small or long text like title or description', icon: <div className='bg-green-50 text-green-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-green-300 rounded-md'>Ab</div> },
        { name: 'Email', desc: 'Small or long text like title or description', icon: <div className='bg-red-50 text-red-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-red-300 rounded-md'>@</div> },
        { name: 'Description', desc: 'Small or long text like title or description', icon: <div className='bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md'><BsReverseListColumnsReverse className="inline text-blue-700 font-semibold" /></div> },
        { name: 'Password', desc: 'Small or long text like title or description', icon: <div className='bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md'><AiTwotoneUnlock className=" text-blue-700" /></div> },
        { name: 'Number', desc: 'Small or long text like title or description', icon: <div className='bg-red-50 text-red-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-red-300 rounded-md '>123</div> },
        { name: 'List', desc: 'Small or long text like title or description', icon: <div className='bg-indigo-50 text-indigo-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-indigo-300 rounded-md'><AiOutlineUnorderedList className=" text-blue-700 font-semibold" /></div> },
        { name: 'Date', desc: 'Small or long text like title or description', icon: <div className='bg-yellow-50 text-indigo-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-yellow-300 rounded-md'><CiCalendarDate className=" text-blue-700 font-semibold" /></div> },
        { name: 'Media', desc: 'Small or long text like title or description', icon: <div className='bg-indigo-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md'><MdPermMedia className="inline font-semibold" /></div> },
        { name: 'Boolean', desc: 'Small or long text like title or description', icon: <div className='bg-green-50 text-green-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-green-300 rounded-md'><BsToggle2Off className="inline font-semibold" /></div> },
        { name: 'Json', desc: 'Small or long text like title or description', icon: <div className='bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md'>{'{...}'}</div> },
    ]

    return (
        <>

            <TableView data = {inputFields} />

            <div className=' h-auto w-auto fixed bottom-10 right-10' >
                <dialog className='relative h-4/5 w-1/2 p-0' id="d">
                    <div className='sticky top-0 w-full flex bg-gray-100 p-4'>
                        <div className='flex-1 flex'> <div className='w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center'>FM</div> <span className='font-semibold ml-2'>Form Generator</span></div>
                        <div className='flex-1 flex justify-end'>  <button onClick={() => d.close()} className='text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center'>x</button></div>
                    </div>
                    <div className='mt-10'></div>
                    <div className='grid grid-cols-12'>
                        {
                            dataList?.map((data, index) => (
                                <>
                                    <ChatCard desc={data?.desc} name={data?.name} icon={data?.icon} index={index} openSecondModal={openSecondModal} collectInput={collectInput} />
                                    <div className='mt-10'></div>
                                </>
                            ))
                        }
                    </div>

                </dialog>

                {/* SECOND MODAL TO FINISH FORM */}
                <dialog className='relative h-4/5 w-1/2 p-0' id="secondModal">
                    <div className='sticky top-0 w-full flex bg-gray-100 p-4'>
                        <div className='flex-1 flex'> <div className='w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center'>FM</div> <span className='font-semibold ml-2'>Confirm Form</span></div>
                        <div className='flex-1 flex justify-end'>  <button onClick={() => secondModal.close()} className='text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center'>x</button></div>
                    </div>
                    <div className='mt-10'></div>
                    <button
                        onClick={() => collectInput()}
                        type="button"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Finish
                    </button>
                </dialog>

                {/* QUICK ACCESS BUTTON */}
                <button
                    onClick={() => d.showModal()}
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Generate Form
                </button>
            </div>


        </>
    )
}

export default FormGenerator