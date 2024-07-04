import React from 'react';
import { Link } from 'react-router-dom';
import chairs from '../../assets/chairs_sofas.jpg';
import lamps from '../../assets/lamps.jpg';
import tables from '../../assets/tables.jpg';
import objects from '../../assets/objects.jpg';

const Categories = () => {
    return (
        <>
            <h1 className='pl-24 pb-2 text-8xl font-extralight text-left lowercase'>categories.</h1>
            <div className='relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-20 pr-20 pt-2 pb-10 text-white font-normal'>
                <div className="w-auto h-auto basis-1/4 rounded-full overflow-hidden aspect-square relative">
                    <img className='object-cover z-1 h-full w-full opacity-75' src={chairs} loading="lazy"/>
                    <Link to="/showproducts/1" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 text-4xl text-center'>chairs & sofas</Link>
                </div>

                <div className="w-auto h-auto basis-1/4 rounded-full overflow-hidden aspect-square relative">
                    <img className='object-cover z-1 h-full w-full opacity-75' src={lamps} loading="lazy"/>
                    <Link to="/showproducts/3" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 text-4xl text-center'>lamps</Link>
                </div>

                <div className="w-auto h-auto basis-1/4 rounded-full overflow-hidden aspect-square relative">
                    <img className='object-cover z-1 h-full w-full opacity-75' src={tables} loading="lazy"/>
                    <Link to="/showproducts/2" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 text-4xl text-center'>tables</Link>
                </div>

                <div className="w-auto h-auto basis-1/4 rounded-full overflow-hidden aspect-square relative">
                    <img className='object-cover z-1 h-full w-full opacity-75' src={objects} loading="lazy"/>
                    <Link to="/showproducts/4" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 text-4xl text-center'>objects</Link>
                </div>
            </div>
        </>
    );
}

export default Categories;