import React from 'react'

function Sundays() {
    return (
        <div className='w-full h-screen'>

            {/* container */}
            <div className='mx-auto px-8 flex flex-col py-8 items-center h-full'>
                <div className='max-w-[668px]'>
                    <div>
                        <h1 className='text-[#D55A1E] text-4xl sm:text-5xl md:text-8xl font-bold text-center'>Sunday Sunday</h1>
                        <div className='flex justify-center'>
                            <h2 className='text-[#4DB1CC] text-center text-2xl sm:text-3xl md:text-4xl'>The first/last day of the</h2>
                            <h2 className='text-[#D55A1E] text-center text-2xl sm:text-3xl md:text-4xl'><strong>&nbsp;week</strong></h2>
                        </div>
                    </div>
                    <p className='text-[#181d20] my-8 text-justify'>
                        Think of Sundays at Canvas Church to be like the pre-game show of your week. Only
                        super low-key and no low-production value.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sundays