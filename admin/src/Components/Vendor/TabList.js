import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./TabList.css"


function TabList() {
    const pathname = window.location.pathname
    const [isActive, setActive] = useState(pathname)

    return (
        <>
            <div className='dashboard_tab_button'>
                <ul className='nav flex-column dashboard'>
                    <li >
                        <Link
                            onClick={() => setActive('/')}
                            className={`${isActive === "/" ? 'active_tablist' : ' '} `}
                            to="/"> Data Homepage </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setActive('/all-users')}
                            className={`${isActive === "/all-users" ? 'active_tablist' : isActive === "/add-users" ? 'acitve_tablist' : ' '} `}
                            to="/all-users">  Users Infomation </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TabList