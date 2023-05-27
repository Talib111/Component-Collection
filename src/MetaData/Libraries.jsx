import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import ToolTip from '../Components/Common/ToolTip';

function Libraries() {
    const [tooltipData, settooltipData] = useState(null)
    const resourceList = [
        { icon: null, techName: 'Formik', use: 'This library is use to handle forms in a very smart way', version: 1.0, url: 'https://formik.org/' },
        { icon: null, techName: 'Axios', use: 'This library is use to handle API calls', version: 1.0, url: 'https://axios-http.com/docs/intro' },
    ]

    const redirectUrl = (url) => {
        window.open(url, "_blank");
    }
    return (
        <>
            <ToolTip url={tooltipData} />
            <div className='font-semibold text-lg mb-4'># Libraries</div>

            {/* DATA TABLE */}
            <table class="min-w-full leading-normal">
                <thead className='font-bold text-left text-sm bg-gray-50'>
                    <tr className='text-lg'>
                        <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Name</th>
                        <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Uses</th>
                        <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Doc Url</th>
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
                            <td className='px-2 py-2 text-sm text-left'><FiExternalLink onMouseEnter={() => settooltipData(data?.url)} onMouseLeave={() => settooltipData(null)} onClick={() => redirectUrl(data?.url)} className="inline cursor-pointer text-2xl hover:scale-105 font-semibold" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Libraries