import React from 'react'
import './Sidebarop.css'
function SidebarOption({Icon,title,number,selected}) {
    return (
        <div className={`sidebarop  ${selected && "sidebar-active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
