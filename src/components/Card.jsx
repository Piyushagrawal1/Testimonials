import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"



const Card = (props) => {
    let reviews = props.reviews;
    return (
        <div className='flex flex-col relative'>
            <div className=' absolute top-[-7rem] z-10 mx-auto'>
                <img className=' aspect-square rounded-full w-[140px] h-[140px] z-30 '
                    src={reviews.image} alt="" />
                <div className=' w-[140px] h-[140px] rounded-full bg-violet-500 absolute top-[-6px] left-[10px] z-[-10] '></div>
            </div>

            <div>
                <p className=' tracking-wider font-bold capitalize text-2xl text-center mt-7'> {reviews.name} </p>
                <p className=' tracking-wider text-violet-500 uppercase text-sm mt-2 text-center'> {reviews.job} </p>
            </div>

            <div className=' text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>

            <div className=' text-slate-500 mt-5 text-center'>
                {reviews.text}
            </div>

            <div className=' text-violet-400 mx-auto mt-5'>
                <FaQuoteRight />
            </div>



        </div>
    )
}

export default Card