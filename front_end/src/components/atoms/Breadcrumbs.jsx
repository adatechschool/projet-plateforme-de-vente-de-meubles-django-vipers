import React from 'react'
import HomeLogo from '../../assets/home_icon.svg'

const Breadcrumbs = () => {
    return (
        <>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li>
                        <a href='#'>
                        <img src={HomeLogo} alt="home" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Documents
                        </a>
                    </li>
                    <li>
                        <span className="inline-flex items-center gap-2">
                            Add Document
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Breadcrumbs