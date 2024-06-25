import React from 'react'
import chairs from '../../assets/chairs_sofas.jpg'
import lamps from '../../assets/lamps.jpg'
import tables from '../../assets/tables.jpg'
import objects from '../../assets/objects.jpg'


const Categories = () => {
    return (
        <>
            <div className=''>
            <div className="avatar">
                <p>chairs & sofas</p>
                <div className="w-30 rounded-full">
                    <img src={chairs} />
                </div>
            </div>
            <div className="avatar">
            <p>lamps</p>
                <div className="w-30 rounded-full">
                    <img src={lamps} />
                </div>
            </div>
            <div className="avatar">
            <p>tables</p>
                <div className="w-30 rounded-full">
                    <img src={tables} />
                </div>
            </div>
            <div className="avatar">
            <p>objects</p>
                <div className="w-30 rounded-full">
                    <img src={objects} />
                </div>
            </div>
            </div>
        </>
    )
}

export default Categories