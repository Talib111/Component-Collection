import React from 'react'

function ToolTip(props) {
    return (
        <>

            <div className='bg-gray-800 shadow-xl text-white absolute top-10 right-10 px-2 rounded-lg'>{props?.url}</div>
        </>
    )
}

export default ToolTip