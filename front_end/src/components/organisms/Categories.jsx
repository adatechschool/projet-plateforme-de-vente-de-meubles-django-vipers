import React from 'react'
import chairs from '../../assets/chairs_sofas.jpg'
import lamps from '../../assets/lamps.jpg'
import tables from '../../assets/tables.jpg'
import objects from '../../assets/objects.jpg'


const Categories = () => {
    return (
        <>
            <div className='flex space-x-4'>
                <div className="w-auto h-auto basis-1/4 rounded-full overflow-hidden aspect-square relative">
                    <img className='object-cover z-1 h-full w-full opacity-75' src={chairs} />
                    <a href='#' className='absolute top-1/2 w-full z-10 text-4xl text-center'>chairs & sofas</a>
                </div>

                <a href='#' className="w-auto h-auto basis-1/4 rounded-full overflow-hidden aspect-square relative">
                    <img className='object-cover h-full w-full opacity-75' src={lamps} />
                    <a href='#' className='absolute top-1/2 bott/2 w-full z-10 text-4xl text-center'>lamps</a>
                </a>

                <a href='#' className="w-auto h-auto basis-1/4 rounded-full overflow-hidden aspect-square relative">
                    <img className='object-cover h-full w-full opacity-75' src={tables} />
                    <a href='#' className='absolute top-1/2 bott/2 w-full z-10 text-4xl text-center'>tables</a>
                </a>

                <a href='#' className="w-auto h-auto basis-1/4 rounded-full overflow-hidden aspect-square relative">
                    <img className='object-cover h-full w-full opacity-75' src={objects} />
                    <a href='#' className='absolute top-1/2 bott/2 w-full z-10 text-4xl text-center'>objects</a>
                </a>
            </div>
        </>
    )
}

export default Categories