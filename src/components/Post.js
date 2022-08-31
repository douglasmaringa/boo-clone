import React from 'react'

function Post() {
  return (
    <div className='mx-10 md:mx-40 mt-5'>
        <h1 className='text-lg font-bold ml-10'>Elon Musk <span style={{color:"#4EDCD8"}} className='font-bold'>MBTI</span></h1>
        <div className='flex'>
        <p style={{backgroundColor:"#4EDCD8"}} className='rounded-2xl px-4'>Business</p>
        <p style={{backgroundColor:"#4EDCD8"}} className='ml-2 rounded-2xl px-4'>technology</p>
        </div>

        <div className='flex'>

            <div className='flex-initial w-64 ...'>
            <div style={{borderRadius:"50%",overflow:"hidden",width:"200px",height:"200px",marginTop:"45px"}} >
              <img  src="https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg" alt="" />
              </div>
            </div>

            <div className='flex-auto'>
                <div className='flex flex-wrap'>
                <div className='mt-4 ml-4 p-10 bg-gray-50 h-30 w-40 border-gray-400 border-2 rounded-2xl'>
                    <h4 className='text-center'>MBTI</h4>
                    <h1 style={{color:"#4EDCD8"}} className='text-center font-bold text-lg '>INTP</h1>
                </div>
                <div className='mt-4 ml-4 p-10 bg-gray-50 h-30 w-40 border-gray-400 border-2 rounded-2xl'>
                    <h4 className='text-center'>Enneagram</h4>
                    <h1 style={{color:"#4EDCD8"}} className='text-center font-bold text-lg '>5W6</h1>
                </div>
                <div className='mt-4 ml-4 p-10 bg-gray-50 h-30 w-40 border-gray-400 border-2 rounded-2xl'>
                    <h4 className='text-center'>MBTI</h4>
                    <h1 style={{color:"#4EDCD8"}} className='text-center font-bold text-lg '>INTP</h1>
                </div>
                <div className='mt-4 ml-4 p-10 bg-gray-50 h-30 w-40 border-gray-400 border-2 rounded-2xl'>
                    <h4 className='text-center'>Socionics</h4>
                    <h1 style={{color:"#4EDCD8"}} className='text-center font-bold text-lg'>ILE</h1>
                </div>

                <div className='mt-4 ml-4 p-10 bg-gray-50 h-30 w-40 border-gray-400 border-2 rounded-2xl'>
                    <h4 className='text-center'>MBTI</h4>
                    <h1 style={{color:"#4EDCD8"}} className='text-center font-bold text-lg'>INTP</h1>
                </div>
                <div className='mt-4 ml-4 p-10 bg-gray-50 h-30 w-40 border-gray-400 border-2 rounded-2xl'>
                    <h4 className='text-center'>MBTI</h4>
                    <h1 style={{color:"#4EDCD8"}} className='text-center font-bold text-lg'>INTP</h1>
                </div>
                <div className='mt-4 ml-4 p-10 bg-gray-50 h-30 w-40 border-gray-400 border-2 rounded-2xl'>
                    <h4 className='text-center'>MBTI</h4>
                    <h1 style={{color:"#4EDCD8"}} className='text-center font-bold text-lg '>INTP</h1>
                </div>
                <div className='mt-4 ml-4 p-10 bg-gray-50 h-30 w-40 border-gray-400 border-2 rounded-2xl'>
                    <h4 className='text-center'>MBTI</h4>
                    <h1 style={{color:"#4EDCD8"}} className='text-center font-bold text-lg'>INTP</h1>
                </div>

                </div>
            </div>

        </div>

        <div className='mt-10'>
        <p>Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is a technology entrepreneur, investor, and engineer. He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.; co-founder and CEO of Neuralink; founder of The Boring Company; co-founder and co-chairman of OpenAI; and co-founder of PayPal. As of February 2021, Musk's net worth stands at $184 billion, making him the 2nd richest person in the world.</p>
        </div>
    </div>
  )
}

export default Post