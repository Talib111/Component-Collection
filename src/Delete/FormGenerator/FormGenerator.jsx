
import { useState } from 'react'
import { RiChatSmile2Line, RiSendPlane2Fill } from 'react-icons/ri'
import dayjs from 'dayjs'
import { AiTwotoneUnlock, AiOutlineUnorderedList } from 'react-icons/ai'
import { BsReverseListColumnsReverse } from 'react-icons/bs'
import { CiCalendarDate } from 'react-icons/ci'
import { MdPermMedia } from 'react-icons/md'
import { BsToggle2Off } from 'react-icons/bs'
import { TableView } from './TableView'
import FormEngine from './FormEngine'

// CARD COMPONENT
function ChatCard(props) {
    return (
        <div className='col-span-5 pr-2 pl-2 mt-2'>
            <div onClick={() => props?.openSecondModal(props?.id, props?.type)} className='flex border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-50'>
                <div className='flex-initial flex justify-center items-center'>
                    {props?.icon}
                </div>
                <div className='inline-block p-2 rounded-lg'>
                    <div className='font-semibold text-gray-700 text-sm'>{props?.title}</div>
                    <div className='text-xs text-gray-500'>{props?.desc}</div>
                </div>
            </div>
        </div>
    )
}

function FormGenerator() {

    const [inputFields, setinputFields] = useState(new Map());
    const [currentSelectedId, setcurrentSelectedId] = useState(null);
    const [currentSelectedType, setcurrentSelectedType] = useState(null);
    const [currentSelectedName, setcurrentSelectedName] = useState(null);
    const [currentSelectedKey, setcurrentSelectedKey] = useState('');
    const [currentFormName, setcurrentFormName] = useState('Form1');
    const [codeView, setcodeView] = useState(null);

    // Function to add element to the Map
    const collectInput = () => {
        if ((currentSelectedName === '' || currentSelectedName === null) || (currentSelectedKey === '' || currentSelectedKey === null)) {
            // alert('Fileds cannot be empty')
            fourthModal.showModal()
            return
        }
        const newMap = new Map(inputFields);
        newMap.set(currentSelectedKey, { id: currentSelectedId, type: currentSelectedType, name: currentSelectedName, key: currentSelectedKey });
        setinputFields(newMap);
        secondModal.close()
    };

    // FUNCTION TO OPEN FIRST MODAL FOR FIELD SELECTION
    const openFirstModal = () => {
        d.showModal()
    }

    // FUNCTION TO OPEN SECOND MODAL FOR FILED NAME 
    const openSecondModal = (selectedField, selectedType) => {
        setcurrentSelectedKey('')

        setcurrentSelectedId(selectedField)
        setcurrentSelectedType(selectedType)

        d.close()
        secondModal.showModal()
    }

    // FUNCTION TO OPEN THIRD MODAL FOR CODE SHOW
    const openThirdModal = () => {
        thirdModal.showModal()
    }

    // FUNCTION TO GENERATE FORM 
    const generateForm = () => {
        let formLayout = FormEngine(inputFields, currentFormName)
        setcodeView(formLayout)
        console.log('generated form....', formLayout)

    }

    // FUNCTION TO COPY CODES IN CLIPBORAD
    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeView)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
    };

    // FUNCTION TO REMOVE FORM FIELD
    const removeField = (key) => {
        const map = new Map(inputFields);
        map.delete(key)
        setinputFields(map)
    }

    // FORM FIELD LISTS
    const dataList = [
        { type: 'text', title: 'Text', id: 'TEXT', desc: 'Small or long text like title or description', icon: <div className='bg-green-50 text-green-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-green-300 rounded-md'>Ab</div> },
        { type: 'email', title: 'Email', id: 'EMAIL', desc: 'Small or long text like title or description', icon: <div className='bg-red-50 text-red-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-red-300 rounded-md'>@</div> },
        { type: 'description', title: 'Description', id: 'DESCRIPTION', desc: 'Small or long text like title or description', icon: <div className='bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md'><BsReverseListColumnsReverse className="inline text-blue-700 font-semibold" /></div> },
        { type: 'password', title: 'Password', id: 'PASSWORD', desc: 'Small or long text like title or description', icon: <div className='bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md'><AiTwotoneUnlock className=" text-blue-700" /></div> },
        { type: 'number', title: 'Number', id: 'NUMBER', desc: 'Small or long text like title or description', icon: <div className='bg-red-50 text-red-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-red-300 rounded-md '>123</div> },
        { type: 'list', title: 'List', id: 'LIST', desc: 'Small or long text like title or description', icon: <div className='bg-indigo-50 text-indigo-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-indigo-300 rounded-md'><AiOutlineUnorderedList className=" text-blue-700 font-semibold" /></div> },
        { type: 'date', title: 'Date', id: 'DATE', desc: 'Small or long text like title or description', icon: <div className='bg-yellow-50 text-indigo-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-yellow-300 rounded-md'><CiCalendarDate className=" text-blue-700 font-semibold" /></div> },
        { type: 'media', title: 'Media', id: 'MEDIA', desc: 'Small or long text like title or description', icon: <div className='bg-indigo-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md'><MdPermMedia className="inline font-semibold" /></div> },
        { type: 'boolean', title: 'Boolean', id: 'BOOLEAN', desc: 'Small or long text like title or description', icon: <div className='bg-green-50 text-green-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-green-300 rounded-md'><BsToggle2Off className="inline font-semibold" /></div> },
        { type: 'json', title: 'Json', id: 'JSON', desc: 'Small or long text like title or description', icon: <div className='bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md'>{'{...}'}</div> },
    ]

    const allowCharacterNumberInput = (currentValue, oldValue, max = null) => {
        if (currentValue.length > max)  //stop if max value and return oldvalue
            return oldValue

        const re = /^[\a-zA-Z0-9!]*$/;    //character + number 
        if (currentValue === '' || re.test(currentValue)) //test 
            return currentValue
        else
            return oldValue
    }

    // FUNCTION WHICH HANDLES FORM NAME FILED CHANGE EVENT
    const onFormNameChange = (e) => {
        let value = e.target.value
        let formName = allowCharacterNumberInput(value, currentFormName, 100)
        setcurrentFormName(formName)
    }

    // FUNCTION WHICH HANDLES FORM FIELD KEY CHANGE EVENT
    const onKeyChange = (e) => {
        let value = e.target.value
        let formName = allowCharacterNumberInput(value, currentSelectedKey, 100)
        setcurrentSelectedKey(formName)
    }

    return (
        <>

            <TableView data={inputFields} generateForm={generateForm} openThirdModal={openThirdModal} codeView={codeView} openFirstModal={openFirstModal} removeField={removeField} />

            <div className=' h-auto w-auto fixed bottom-10 right-10' >
                <dialog className='relative h-4/5 w-1/2 p-0' id="d">
                    <div className='sticky top-0 w-full flex bg-gray-100 p-4'>
                        <div className='flex-1 flex'> <div className='w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center'>FM</div> <span className='font-semibold ml-2'>Form Generator</span></div>
                        <div className='flex-1 flex justify-end'>
                            <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Form Name<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                                <input value={currentFormName} onChange={onFormNameChange} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
                                />
                            </div>
                            <button onClick={() => d.close()} className='text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center'>x</button></div>
                    </div>
                    <div className='mt-10'></div>
                    <div className='grid grid-cols-12'>
                        {
                            dataList?.map((data, index) => (
                                <>
                                    <ChatCard desc={data?.desc} title={data?.title} type={data?.type} id={data?.id} icon={data?.icon} index={index} openSecondModal={openSecondModal} collectInput={collectInput} />
                                    <div className='mt-10'></div>
                                </>
                            ))
                        }
                    </div>

                </dialog>

                {/* SECOND MODAL TO FINISH FORM */}
                <dialog className='relative h-4/5 w-1/2 p-0' id="secondModal">
                    <div className='sticky top-0 w-full flex bg-gray-100 p-4'>
                        <div className='flex-1 flex'> <div className='w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center'>FM</div> <span className='font-semibold ml-2'>{currentSelectedType}</span></div>
                        <div className='flex-1 flex justify-end'>

                            <button onClick={() => secondModal.close()} className='text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center'>x</button></div>
                    </div>
                    <div className='mt-10'></div>
                    <div className="grid grid-cols-12">
                        <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Name<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                            <input value={currentSelectedName} onChange={(e) => setcurrentSelectedName(e.target.value)} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
                            />
                        </div>
                        <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Key<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                            <input value={currentSelectedKey} onChange={onKeyChange} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
                            />
                        </div>
                    </div>
                    <div className='p-4'>
                        <button
                            onClick={() => collectInput()}
                            type="button"
                            className="rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Finish
                        </button>

                    </div>
                </dialog>

                {/* CODE VIEW DIALOG */}
                <dialog className='relative h-4/5 w-1/2 p-0' id="thirdModal">
                    <div className='sticky top-0 w-full flex bg-gray-100 p-4'>
                        <div className='flex-1 flex'> <div className='w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center'>FM</div> <span className='font-semibold ml-2'>Form Code</span></div>
                        <div className='flex-1 flex justify-end'>
                            <button
                                onClick={copyToClipboard}
                                type="button absolute top-10"
                                className="rounded-full w-10 flex justify-center items-center h-10  border-2 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white hover:scale-105 mr-10"
                            >
                                {`</>`}
                            </button>  <button onClick={() => thirdModal.close()} className='text-xl p-2 w-8 h-8 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center'>x</button></div>
                    </div>
                    <div className='bg-gray-100 p-10'>
                        <pre> {codeView}</pre>
                    </div>



                </dialog>
                {/* CODE VIEW DIALOG */}
                <dialog className='relative py-3 w-1/4 p-0 bg-red-100 border border-red-600' id="fourthModal">
                    <div className='font-semibold text-lg w-full text-center'>Fields cannot be empty</div>
                    <button onClick={() => fourthModal.close()} className=' absolute top-0 right-0 text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center'>x</button>



                </dialog>

                {/* FOURTH DIALOG */}
                {/* <dialog className='relative h-1/4 w-1/4 p-0 flex justify-center items-center bg-red-100 border border-red-600' id="fourthModal">
                    <div className='font-semibold text-lg'>Fields cannot be empty</div>
                    <button onClick={() => fourthModal.close()} className=' absolute top-0 right-0 text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center'>x</button>
                </dialog> */}

                {/* QUICK ACCESS BUTTON */}
                {/* <button
                    onClick={() => d.showModal()}
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Generate Form
                </button> */}
            </div>


        </>
    )
}

export default FormGenerator
