import React from 'react'

function Comments({index,comments,setComments,data}) {

  //logic for liking post
  const like = (index) => {
    const newItems = [...comments];
    newItems[index].liked === false
    ? (newItems[index].liked = true)
    : (newItems[index].liked = false);
    setComments(newItems)
    };

    //logic for liking post
  const likes = (index) => {
    const newItems = [...comments];
    newItems[index].likes = newItems[index].likes + 1
    setComments(newItems)
    };

   
  return (
    <div className='mb-10 mx-10 md:mx-40 border-2 border-gray-400 rounded-2xl p-2'>
        <div style={{borderRadius:"50%",overflow:"hidden",width:"100px",height:"100px",marginTop:"15px"}} >
              <img  src="https://www.pinkvilla.com/imageresize/daniel_craig_3.jpeg?width=752&format=webp&t=pvorg" alt="" />
              
        </div>
       
        <h1 className='font-bold text-lg'>{data.title}</h1>

        <div className=' py-2 flex'>
        <p style={{backgroundColor:"#4EDCD8"}} className=' rounded-2xl px-4'>{data.voting}</p>
        <p style={{backgroundColor:"#4EDCD8"}} className='ml-2 rounded-2xl px-2'>{data.enneagram}</p>
        <p style={{backgroundColor:"#4EDCD8"}} className='ml-2 rounded-2xl px-2'>{data.zodiac}</p>
        </div>

        <div className='mt-1'>
        <p>{data.text}</p>
        </div>

        <div className='flex'>
        <div className='cursor-pointer' onClick={()=>{like(index)}}>
          {
            data.liked?(<>
              <p style={{color:"#4EDCD8"}}>Liked</p>
            </>):(<>
              <p style={{color:"#6B6A6A"}}>Like</p>
            </>)
           }
          
        </div>

        <div className='ml-auto cursor-pointer' onClick={()=>{likes(index)}}>
          {
            data.likes > 0?(<>
              <p style={{color:"#4EDCD8"}}>{data.likes} votes</p>
            </>):(<>
              <p style={{color:"#6B6A6A"}}>Vote</p>
            </>)
           }
          
        </div>
       
        </div>
    </div>
  )
}

export default Comments