import React from 'react'
import { FcGallery } from 'react-icons/fc'


export function TableView(props) {

    const tableRow = [
        { name: 'College', desc: 'Dummy college', workStatus: 'active', filterBy: 'College', icon: <FcGallery className="inline text-xl" /> },
        { name: 'School', desc: 'Dummy school', workStatus: 'disabled', filterBy: 'College', icon: <FcGallery className="inline text-xl" /> },
    ]

    console.log('data at table view..', props?.data)

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='font-bold text-lg mb-4 pr-10 flex-1'># Form Fields </div>
                <div className={'form-group col-span-12 md:col-span-3 mb-4 md:px-2 flex-1 text-right pr-20'}>
                    <button
                        onClick={props?.openFirstModal}
                        type="button"
                        className="rounded-md border-2 border-black px-20 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white"
                    >
                        Add Field
                    </button>
                </div>
            </div>

            {/* DATA TABLE */}
            <div className='h-[80vh] overflow-y-scroll'>
                <table class="min-w-full leading-normal" >
                    <thead className='font-bold text-left text-sm bg-gray-50'>
                        <tr className='text-md'>
                            <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>#</th>
                            <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Name</th>
                            <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(props?.data).map(([key, value], index) => (
                            <tr className='bg-white border-b border-gray-200'>
                                <td className='px-2 py-2 text-sm text-left'>{index + 1}</td>
                                <td className='px-2 py-2 text-sm text-left'>
                                    <div className='w-12 h-12 inline-flex rounded-full shadow-xl border p-2 justify-center items-center'>
                                        A
                                    </div>
                                    <span className='pl-2 inline font-semibold text-md text-gray-700'>{value.name}
                                    </span>
                                </td>
                                <td className='px-2 py-2 text-sm text-left'>{value.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='flex justify-between mt-4'>
                    {props?.codeView !== null && <button
                        onClick={() => props?.openThirdModal()}
                        type="button"
                        className="rounded-md bg-black px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        View Code
                    </button>}
                    {Array.from(props?.data)?.length !== 0 && <button
                        onClick={() => props?.generateForm()}
                        type="button"
                        className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Save
                    </button>}
                </div>
            </div>
        </>
    )
}


