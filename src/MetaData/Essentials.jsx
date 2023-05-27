import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import ToolTip from '../Components/Common/ToolTip';

function Essentials() {
    const [tooltipData, settooltipData] = useState(null)
    const resourceList = [
        { icon: null, techName: 'Login Authentication', use: 'This library is use to handle forms in a very smart way' },
        { icon: null, techName: 'Protected Routes', use: 'This library is use to handle API calls'},
        { icon: null, techName: '404 Page', use: 'This library is use to handle API calls'},
        { icon: null, techName: 'Secure Localstorage', use: 'This library is use to handle API calls'},
        { icon: null, techName: 'Url Encryption', use: 'This library is use to handle API calls'},
    ]

    const redirectUrl = (url) => {
        window.open(url, "_blank");
    }
    return (
        <>
            <ToolTip url={tooltipData} />
            <div className='font-semibold text-lg mb-4'># Essentials</div>

            {/* DATA TABLE */}
            <table class="min-w-full leading-normal">
                <thead className='font-bold text-left text-sm bg-gray-50'>
                    <tr className='text-lg'>
                        <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Name</th>
                        <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Uses</th>
                    </tr>
                </thead>
                <tbody>
                    {resourceList?.map((data, index) => (
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='px-2 py-2 text-sm text-left'>
                                <img className='inline' src={data?.icon} alt="" />
                                <span className='pl-2 inline font-semibold text-md text-gray-700'>{data?.techName}
                                </span>
                            </td>
                            <td className='px-2 py-2 text-sm text-left'>{data?.use}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Essentials