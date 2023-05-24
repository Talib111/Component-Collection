import React from 'react'

function CodeView(props) {
    return (
        <div className='bg-gray-600 mt-10 p-10 text-white relative rounded-lg'>
            <span className='absolute top-2 right-2 cursor-pointer'>
                <svg className='hover:scale-105' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
            </span>
            <pre>{props?.code}</pre>
        </div>
    )
}

export default CodeView