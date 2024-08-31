import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaTasks, FaStar, FaCalendarCheck, FaCheckCircle, FaCog } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isCollapsed ? '=' : '='}
            </button>
            <ul>
                <li>
                    <NavLink to="/home">
                        <FaHome className="icon" />
                        {!isCollapsed && <span className="label">Home</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tasks">
                        <FaTasks className="icon" />
                        {!isCollapsed && <span className="label">Tasks</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/important">
                        <FaStar className="icon" />
                        {!isCollapsed && <span className="label">Important</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/planned">
                        <FaCalendarCheck className="icon" />
                        {!isCollapsed && <span className="label">Planned</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/completed">
                        <FaCheckCircle className="icon" />
                        {!isCollapsed && <span className="label">Completed</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings">
                        <FaCog className="icon" />
                        {!isCollapsed && <span className="label">Settings</span>}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
