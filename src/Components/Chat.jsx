import React from 'react'
import CodeView from './Common/CodeView'
import { RiChatSmile2Line, RiSendPlane2Fill } from 'react-icons/ri'
import dayjs from 'dayjs'

// CARD COMPONENT
function ChatCard(props) {
  return (
    <div className='flex'>
      <div className='flex-1 flex'>
        {props?.index % 2 === 0 && <>
          <img
            className="inline h-10 w-10 rounded-full"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan_Abromov"
          />
          {/* <div className='inline-block text-sm bg-green-500 text-white p-2 rounded-lg shadow-xl'> */}
          <div className='inline-block text-sm bg-[#D1D5DB] text-gray-700 p-2 rounded-lg shadow-xl'>

            <div>{props?.message}</div>
            <div className='block text-xs relative top-8 text-gray-600'>{dayjs(props?.createdAt).format('DD-MM-YYYY hh:mm:ss A')}</div>

          </div>

        </>}
      </div>
      <div className='flex-1 flex'>
        {props?.index % 2 !== 0 && <>
          {/* <div className='inline-block text-sm bg-[#D1D5DB] text-gray-700 p-2 rounded-lg shadow-xl'> */}
          <div className='inline-block text-sm bg-green-500 text-white p-2 rounded-lg shadow-xl'>

            <div>{props?.message}</div>
            <div className='block text-xs relative top-8 text-gray-600'>{dayjs(props?.createdAt).format('DD-MM-YYYY hh:mm:ss A')}</div>

          </div>
          <img
            className="inline h-10 w-10 rounded-full"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan_Abromov"
          />
        </>}
      </div>
    </div>
  )
}


function Chat() {

  const dataList = [
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
  ]

  return (
    <>
      {/* CODE VIEW */}
      <CodeView code={`import React from 'react'
import CodeView from './Common/CodeView'
import { RiChatSmile2Line, RiSendPlane2Fill } from 'react-icons/ri'
import dayjs from 'dayjs'

// CARD COMPONENT
function ChatCard(props) {
  return (
    <div className='flex'>
      <div className='flex-1 flex'>
        {props?.index % 2 === 0 && <>
          <img
            className="inline h-10 w-10 rounded-full"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan_Abromov"
          />
          {/* <div className='inline-block text-sm bg-green-500 text-white p-2 rounded-lg shadow-xl'> */}
          <div className='inline-block text-sm bg-[#D1D5DB] text-gray-700 p-2 rounded-lg shadow-xl'>

            <div>{props?.message}</div>
            <div className='block text-xs relative top-8 text-gray-600'>{dayjs(props?.createdAt).format('DD-MM-YYYY hh:mm:ss A')}</div>

          </div>

        </>}
      </div>
      <div className='flex-1 flex'>
        {props?.index % 2 !== 0 && <>
          {/* <div className='inline-block text-sm bg-[#D1D5DB] text-gray-700 p-2 rounded-lg shadow-xl'> */}
          <div className='inline-block text-sm bg-green-500 text-white p-2 rounded-lg shadow-xl'>

            <div>{props?.message}</div>
            <div className='block text-xs relative top-8 text-gray-600'>{dayjs(props?.createdAt).format('DD-MM-YYYY hh:mm:ss A')}</div>

          </div>
          <img
            className="inline h-10 w-10 rounded-full"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan_Abromov"
          />
        </>}
      </div>
    </div>
  )
}


function Chat() {

  const dataList = [
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
  ]

  return (
    <><div className=' h-auto w-auto fixed bottom-10 right-10' >
    <dialog className='relative h-4/5 w-1/2' id="d">
      <div className='sticky top-0'>
        <button onClick={() => d.close()} className='absolute top-2 right-3 text-xl p-2 w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center'>x</button>
        <div className='flex'>
          <div className='font-serif'>Message</div>
        </div>
      </div>
      <div className='mt-10'></div>
      {
        dataList?.map((data, index) => (
          <>
            <ChatCard message={data?.message} from={data?.from} index={index} />
            <div className='mt-10'></div>
          </>
        ))
      }
      <form className="mt-2 sticky bottom-0">
        <input

          className="flex h-10 w-full rounded-md border bg-[#eff0f1] border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="enter message"
        ></input>
        <button type='submit' className='absolute top-0 right-0 text-gray-500 h-10 flex justify-center items-center px-2 rounded-md cursor-pointer hover:scale-105'><RiSendPlane2Fill className="inline ml-1 text-2xl hover:scale-105" /></button>
        {/* <button type='submit' className='absolute top-0 right-0 bg-green-500 text-white h-10 flex justify-center items-center px-2 rounded-md cursor-pointer hover:scale-105'>Send <RiSendPlane2Fill className="inline ml-1" /></button> */}
      </form>
    </dialog>

    {/* QUICK ACCESS BUTTON */}
    <div onClick={() => d.showModal()}
      className={'bg-green-500 fixed bottom-10 right-10 h-16 w-16 rounded-full  flex flex-col justify-center items-center cursor-pointer shadow-2xl text-white font-semibold border-2 border-white'}
      href="" >
      <RiChatSmile2Line className='text-4xl' />
    </div>
  </div>


</>
)
}

export default Chat`} />

      <div className=' h-auto w-auto fixed bottom-10 right-10' >
        <dialog className='relative h-4/5 w-1/2' id="d">
          <div className='sticky top-0'>
            <button onClick={() => d.close()} className='absolute top-2 right-3 text-xl p-2 w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-red-500 font-semibold flex justify-center items-center'>x</button>
            <div className='flex'>
              <div className='font-serif'>Message</div>
            </div>
          </div>
          <div className='mt-10'></div>
          {
            dataList?.map((data, index) => (
              <>
                <ChatCard message={data?.message} from={data?.from} index={index} />
                <div className='mt-10'></div>
              </>
            ))
          }
          <form className="mt-2 sticky bottom-0">
            <input

              className="flex h-10 w-full rounded-md border bg-[#eff0f1] border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="enter message"
            ></input>
            <button type='submit' className='absolute top-0 right-0 text-gray-500 h-10 flex justify-center items-center px-2 rounded-md cursor-pointer hover:scale-105'><RiSendPlane2Fill className="inline ml-1 text-2xl hover:scale-105" /></button>
            {/* <button type='submit' className='absolute top-0 right-0 bg-green-500 text-white h-10 flex justify-center items-center px-2 rounded-md cursor-pointer hover:scale-105'>Send <RiSendPlane2Fill className="inline ml-1" /></button> */}
          </form>
        </dialog>

        {/* QUICK ACCESS BUTTON */}
        <div onClick={() => d.showModal()}
          className={`bg-green-500 fixed bottom-10 right-10 h-16 w-16 rounded-full  flex flex-col justify-center items-center cursor-pointer shadow-2xl text-white font-semibold border-2 border-white`}
          href="" >
          <RiChatSmile2Line className='text-4xl' />
        </div>
      </div>


    </>
  )
}

export default Chat