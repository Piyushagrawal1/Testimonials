import React, { useState } from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Testimonials = (props) => {
    let reviews = props.reviews;

    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            // agar index piche jane se means  -1 krne se koi negative no. ya 0 pr pahunch jao to use n-1 kr do or agar ye condition satisfy nahi ho rhi ho to normal case rhn do jisme ek index piche chali jaye.
            setIndex(reviews.length - 1);
        } else {
            setIndex(index - 1);
        }

    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }
    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-lg' >
            <Card reviews={reviews[index]} />

            <div className=' flex text-3xl gap-3 mt-5 text-violet-400 mx-auto '>
                <button
                    onClick={leftShiftHandler}
                    className=' cursor-pointer hover:text-violet-600'>
                    <FiChevronLeft />
                </button>
                <button
                    onClick={rightShiftHandler}
                    className='cursor-pointer hover:text-violet-600 '>
                    <FiChevronRight />
                </button>
            </div>

            <div>
                <button
                    onClick={surpriseHandler}
                    className=' bg-violet-400 hover:bg-violet-500 rounded-md transition-all duration-200 px-10 py-2 cursor-pointer text-white text-lg mt-4 font-bold '>
                    Surprise Me
                </button>
            </div>

        </div>
    )
}

export default Testimonials