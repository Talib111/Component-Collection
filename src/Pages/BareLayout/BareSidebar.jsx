import React from 'react'

function BareSidebar() {
    return (
        <aside className="w-64 bg-gray-200 h-screen">
            <nav className='p-10'>
                <ul>
                    <li><span>Home</span></li>
                    <li><span>About</span></li>
                    <li><span>Details</span></li>
                    <li><span>Settings</span></li>
                </ul>
            </nav>
        </aside>
    )
}

export default BareSidebar