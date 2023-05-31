'use client'

import React from 'react'
import CodeView from '../Components/Common/CodeView'
import tlogo from '../assets/tlogo.png'
import { FiExternalLink } from 'react-icons/fi'


export function TablePage() {

  const tableRow = [
    { name: 'College', desc: 'Dummy college', workStatus: 'active', filterBy: 'College', imgUrl: 'src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"' },
    { name: 'School', desc: 'Dummy school', workStatus: 'disabled', filterBy: 'College', imgUrl: 'src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"' },
  ]

  const redirectUrl = (filterText) => {
    navigate(`/documentation/${filterText}`);
  }
  const activityUrl = (filterText) => {
    navigate(`/modules-desc/${filterText}`);
  }

  return (
    <>
      <CodeView code={`import React from 'react'
import CodeView from '../Components/Common/CodeView'
import { FiExternalLink } from 'react-icons/fi'


export function TablePage() {

  const tableRow = [
    { name: 'College', desc: 'Dummy college', workStatus: 'active', filterBy: 'College', imgUrl: tlogo },
    { name: 'School', desc: 'Dummy school', workStatus: 'disabled', filterBy: 'College', imgUrl: tlogo },
  ]

  return ( <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='font-bold text-lg mb-4 pr-10 flex-1'># College </div>
        <div className={'form-group col-span-12 md:col-span-3 mb-4 md:px-2 flex-1 text-right pr-20'}>
          <select  className={'cypress_transferMode px-4  border rounded-md shadow-xl text-lg cursor-pointer'}>
            <option className='cursor-pointer' value={'All'} >All</option>
            <option className='cursor-pointer' value={'1'} >Phase-1</option>
            <option className='cursor-pointer' value={'2'} >Phase-2</option>
            <option className='cursor-pointer' value={'3'} >Phase-3</option>
          </select>

        </div>
      </div>

      {/* DATA TABLE */}
      <div className='h-[80vh] overflow-y-scroll'>
        <table class="min-w-full leading-normal" >
          <thead className='font-bold text-left text-sm bg-gray-50'>
            <tr className='text-md'>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>#</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Name</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Description</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Work Status</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Action</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Link</th>
            </tr>
          </thead>
          <tbody>
            {tableRow?.map((data, index) => (
              <tr className='bg-white border-b border-gray-200'>
                <td className='px-2 py-2 text-sm text-left'>{index + 1}</td>
                <td className='px-2 py-2 text-sm text-left'>
                  <div className='w-12 h-12 inline-block rounded-full shadow-xl border p-2'>
                    <img className='inline w-10 rounded' src={data?.imgUrl} alt="" />
                  </div>
                  <span className='pl-2 inline font-semibold text-md text-gray-700'>{data?.name}
                  </span>
                </td>
                <td className='px-2 py-2 text-sm text-left'>{data?.desc}</td>
                <td className={'px-2 py-2 text-sm text-left font-semibold'}>{data?.workStatus}</td>
                <td className='px-2 py-2 text-sm text-left'
                ><button 
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white"
                >
                    View
                  </button>
                </td>
                <td className='px-2 py-2 text-sm text-left'><FiExternalLink onMouseEnter={() => settooltipData(data?.filterBy)} onMouseLeave={() => settooltipData(null)} onClick={() => redirectUrl(data?.filterText)} className="inline cursor-pointer text-2xl hover:scale-105 font-semibold" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )
}
`} />
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='font-bold text-lg mb-4 pr-10 flex-1'># College </div>
        <div className={`form-group col-span-12 md:col-span-3 mb-4 md:px-2 flex-1 text-right pr-20`}>
          <select className={`cypress_transferMode px-4  border rounded-md shadow-xl text-lg cursor-pointer`}>
            <option className='cursor-pointer' value={'All'} >All</option>
            <option className='cursor-pointer' value={'1'} >Phase-1</option>
            <option className='cursor-pointer' value={'2'} >Phase-2</option>
            <option className='cursor-pointer' value={'3'} >Phase-3</option>
          </select>

        </div>
      </div>

      {/* DATA TABLE */}
      <div className='h-[80vh] overflow-y-scroll'>
        <table class="min-w-full leading-normal" >
          <thead className='font-bold text-left text-sm bg-gray-50'>
            <tr className='text-md'>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>#</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Name</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Description</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Work Status</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Action</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Link</th>
            </tr>
          </thead>
          <tbody>
            {tableRow?.map((data, index) => (
              <tr className='bg-white border-b border-gray-200'>
                <td className='px-2 py-2 text-sm text-left'>{index + 1}</td>
                <td className='px-2 py-2 text-sm text-left'>
                  <div className='w-12 h-12 inline-block rounded-full shadow-xl border p-2'>
                    <img className='inline w-10 rounded' src={tlogo} alt="" />
                  </div>
                  <span className='pl-2 inline font-semibold text-md text-gray-700'>{data?.name}
                  </span>
                </td>
                <td className='px-2 py-2 text-sm text-left'>{data?.desc}</td>
                <td className={`px-2 py-2 text-sm text-left font-semibold 
                            ${data?.workStatus === 'disabled' && 'text-red-600'}
                            ${data?.workStatus === 'active' && 'text-green-600'}
                            `}>{data?.workStatus}</td>
                <td className='px-2 py-2 text-sm text-left'
                ><button onClick={() => activityUrl(data?.filterBy)}
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white"
                >
                    View
                  </button>
                </td>
                <td className='px-2 py-2 text-sm text-left'><FiExternalLink onMouseEnter={() => settooltipData(data?.filterBy)} onMouseLeave={() => settooltipData(null)} onClick={() => redirectUrl(data?.filterText)} className="inline cursor-pointer text-2xl hover:scale-105 font-semibold" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
