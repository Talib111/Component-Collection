import React from 'react'
import react from '../assets/react.svg'

function Tecnologies() {
    const technologyList = [
        { icon: react, techName: 'React', version: 1.0 },
    ]
    return (
        <>
            <div className='font-semibold text-lg mb-4'># Technologies</div>

            {/* DATA TABLE */}
            <table class="min-w-full leading-normal">
                <thead className='font-bold text-left text-sm bg-gray-50'>
                    <tr className='text-lg'>
                        <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Tech</th>
                        <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {technologyList?.map((data, index) => (
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='px-2 py-2 text-sm text-left'>
                                <img className='inline' src={data?.icon} alt="" />
                                <span className='pl-2 inline font-semibold text-md text-gray-700'>{data?.techName}</span>
                            </td>
                            <td className='px-2 py-2 text-sm text-left'>{data?.version}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Tecnologies