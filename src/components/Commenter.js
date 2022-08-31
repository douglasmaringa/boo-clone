import React,{useState} from 'react'
import "./commenter.css"

function Comments({comments,setComments}) {
  const[voting,setVoting]=useState("")
  const[enneagram,setEnneagram]=useState("")
  const[zodiac,setZodiac]=useState("")
  const[title,setTitle]=useState("")
  const[text,setText]=useState("")
  const[on,setOn]=useState(false)
  const[on2,setOn2]=useState(false)

  const submit = ()=>{
    setOn(false)
    setOn2(true)

    const comment = {
      title:title,
      text:text,
      voting:voting,
      enneagram:enneagram,
      zodiac:zodiac,
      liked:false,
      likes:0,
      timestamp:Date.now()
    }

    setComments((comments)=>[...comments,comment])


    function delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    
    delay(1000).then(() => {setOn2(false)});
  }
  
  
  return (
    <>
    {
      on2?(<>
      <div className='border-blue-500 mb-10 mx-10 md:mx-40 border-4 rounded-2xl p-2'>
        <div className='flex'>
        <div style={{borderRadius:"50%",overflow:"hidden",width:"100px",height:"100px",marginTop:"15px"}} >
              <img  src="https://www.pinkvilla.com/imageresize/daniel_craig_3.jpeg?width=752&format=webp&t=pvorg" alt="" />
        </div>
        <h1 className='mt-10 font-bold'>James Bond</h1>
        </div>
       
        <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className='w-full ml-4' type="text" placeholder='Title'/>
       
        <div className='py-2 flex'>
        <div class="dropdown">
          {
            voting?(<>
              <p style={{backgroundColor:"#4EDCD8"}} className=' rounded-2xl px-4'>{voting}</p>
            </>):(<>
              <p  className='bg-gray-300 rounded-2xl px-4'>INTP</p>
            </>)
          }
        <div class="dropdown-content">
        <select onChange={(e)=>{
          setVoting(e.target.value)
          setOn(true)
          }}>
        <option value="_">Voting Options:</option>
        <option value="MBTI">MBTI</option>
        <option value="INFP">INFP</option>
        <option value="INFJ">INFJ</option>
        <option value="ENFP">ENFP</option>
        <option value="ENFJ">ENFJ</option>
        <option value="INTJ">INTJ</option>
        <option value="INTP">INTP</option>
        <option value="ENTP">ENTP</option>
        <option value="ENTJ">ENTJ</option>
        <option value="ISFP">ISFP</option>
        <option value="ISFJ">ISFJ</option>
        <option value="ESFP">ESFP</option>
        <option value="ESFJ">ESFJ</option>
        <option value="ISTP">ISTP</option>
        <option value="ISTJ">ISTJ</option>
        <option value="ESTP">ESTP</option>
        <option value="ESTJ">ESTJ</option>
        </select>
        </div>
        </div>

        <div class="dropdown">
        {
            enneagram?(<>
              <p style={{backgroundColor:"#4EDCD8"}} className='ml-2 rounded-2xl px-4'>{enneagram}</p>
            </>):(<>
              <p className='ml-2 bg-gray-300 rounded-2xl px-4'>Enneagram</p>
            </>)
          } <div class="dropdown-content">
        <select onChange={(e)=>{
          setEnneagram(e.target.value)
          setOn(true)
          }}>
        <option value="_">Enneagram:</option>
        <option value="1w2">1w2</option>
        <option value="2w3">2w3</option>
        <option value="3w2">3w2</option>
        <option value="3w4">3w4</option>
        <option value="4w3">4w3</option>
        <option value="4w5">4w5</option>
        <option value="5w4">5w4</option>
        <option value="5w6">5w6</option>
        <option value="6w5">6w5</option>
        <option value="6w7">6w7</option>
        <option value="7w6">7w6</option>
        <option value="7w8">7w8</option>
        <option value="8w7">8w7</option>
        <option value="8w9">8w9</option>
        <option value="9w8">9w8</option>
        <option value="9w1">9w1</option>
      </select>
        </div>
        </div>

        <div class="dropdown">
        {
            zodiac?(<>
              <p style={{backgroundColor:"#4EDCD8"}} className='ml-2 rounded-2xl px-4'>{zodiac}</p>
            </>):(<>
              <p className='ml-2 bg-gray-300 rounded-2xl px-4'>Zodiac</p>
            </>)
          } <div class="dropdown-content">
        <select onChange={(e)=>{
          setZodiac(e.target.value)
          setOn(true)
          }}>
        <option value="_">Zodiac:</option>
        <option value="Aries">Aries</option>
        <option value="Taurus">Taurus</option>
        <option value="Gemini">Gemini</option>
        <option value="Cancer">Cancer</option>
        <option value="Leo">Leo</option>
        <option value="Virgo">Virgo</option>
        <option value="Libra">Libra</option>
        <option value="Scorpio">Scorpio</option>
        <option value="Sagittarius">Sagittarius</option>
        <option value="Capricorn">Capricorn</option>
        <option value="Aquarius">Aquarius</option>
        <option value="Pisces">Pisces</option>
      </select>
        </div>
        </div>
       
        </div>

        
        <div className='mt-1 w-full'>
       <input value={text} onChange={(e)=>{
        setText(e.target.value)
        setOn(true)
        }} className='w-full p-10' type="text" placeholder='share your thoughts by commenting here'/>
         </div>
        <div className='flex '>
          {
            on?(<>
             <img className='ml-auto border-green-500 border-2 cursor-pointer' onClick={()=>{submit()}} src="icon.png" alt="" />
       
            </>):(<>
              <img className='ml-auto cursor-pointer' onClick={()=>{submit()}} src="icon.png" alt="" />
       
            </>)
          }
            </div>
    </div>
      </>):(<>
        <div className='mb-10 mx-10 md:mx-40 border-2 border-gray-400 rounded-2xl p-2'>
        <div className='flex'>
        <div style={{borderRadius:"50%",overflow:"hidden",width:"100px",height:"100px",marginTop:"15px"}} >
              <img  src="https://www.pinkvilla.com/imageresize/daniel_craig_3.jpeg?width=752&format=webp&t=pvorg" alt="" />
        </div>
        <h1 className='mt-10 font-bold'>James Bond</h1>
        </div>
       
        <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className='w-full ml-4' type="text" placeholder='Title'/>
       
        <div className='py-2 flex'>
        <div class="dropdown">
          {
            voting?(<>
              <p style={{backgroundColor:"#4EDCD8"}} className=' rounded-2xl px-4'>{voting}</p>
            </>):(<>
              <p  className='bg-gray-300 rounded-2xl px-4'>INTP</p>
            </>)
          }
        <div class="dropdown-content">
        <select onChange={(e)=>{
          setVoting(e.target.value)
          setOn(true)
          }}>
        <option value="_">Voting Options:</option>
        <option value="MBTI">MBTI</option>
        <option value="INFP">INFP</option>
        <option value="INFJ">INFJ</option>
        <option value="ENFP">ENFP</option>
        <option value="ENFJ">ENFJ</option>
        <option value="INTJ">INTJ</option>
        <option value="INTP">INTP</option>
        <option value="ENTP">ENTP</option>
        <option value="ENTJ">ENTJ</option>
        <option value="ISFP">ISFP</option>
        <option value="ISFJ">ISFJ</option>
        <option value="ESFP">ESFP</option>
        <option value="ESFJ">ESFJ</option>
        <option value="ISTP">ISTP</option>
        <option value="ISTJ">ISTJ</option>
        <option value="ESTP">ESTP</option>
        <option value="ESTJ">ESTJ</option>
        </select>
        </div>
        </div>

        <div class="dropdown">
        {
            enneagram?(<>
              <p style={{backgroundColor:"#4EDCD8"}} className='ml-2 rounded-2xl px-4'>{enneagram}</p>
            </>):(<>
              <p className='ml-2 bg-gray-300 rounded-2xl px-4'>Enneagram</p>
            </>)
          } <div class="dropdown-content">
        <select onChange={(e)=>{
          setEnneagram(e.target.value)
          setOn(true)
          }}>
        <option value="_">Enneagram:</option>
        <option value="1w2">1w2</option>
        <option value="2w3">2w3</option>
        <option value="3w2">3w2</option>
        <option value="3w4">3w4</option>
        <option value="4w3">4w3</option>
        <option value="4w5">4w5</option>
        <option value="5w4">5w4</option>
        <option value="5w6">5w6</option>
        <option value="6w5">6w5</option>
        <option value="6w7">6w7</option>
        <option value="7w6">7w6</option>
        <option value="7w8">7w8</option>
        <option value="8w7">8w7</option>
        <option value="8w9">8w9</option>
        <option value="9w8">9w8</option>
        <option value="9w1">9w1</option>
      </select>
        </div>
        </div>

        <div class="dropdown">
        {
            zodiac?(<>
              <p style={{backgroundColor:"#4EDCD8"}} className='ml-2 rounded-2xl px-4'>{zodiac}</p>
            </>):(<>
              <p className='ml-2 bg-gray-300 rounded-2xl px-4'>Zodiac</p>
            </>)
          } <div class="dropdown-content">
        <select onChange={(e)=>{
          setZodiac(e.target.value)
          setOn(true)
          }}>
        <option value="_">Zodiac:</option>
        <option value="Aries">Aries</option>
        <option value="Taurus">Taurus</option>
        <option value="Gemini">Gemini</option>
        <option value="Cancer">Cancer</option>
        <option value="Leo">Leo</option>
        <option value="Virgo">Virgo</option>
        <option value="Libra">Libra</option>
        <option value="Scorpio">Scorpio</option>
        <option value="Sagittarius">Sagittarius</option>
        <option value="Capricorn">Capricorn</option>
        <option value="Aquarius">Aquarius</option>
        <option value="Pisces">Pisces</option>
      </select>
        </div>
        </div>
       
        </div>

        
        <div className='mt-1 w-full'>
       <input value={text} onChange={(e)=>{
        setText(e.target.value)
        setOn(true)
        }} className='w-full p-10' type="text" placeholder='share your thoughts by commenting here'/>
         </div>
        <div className='flex '>
          {
            on?(<>
             <img className='ml-auto border-green-500 border-2 cursor-pointer' onClick={()=>{submit()}} src="icon.png" alt="" />
       
            </>):(<>
              <img className='ml-auto cursor-pointer' onClick={()=>{submit()}} src="icon.png" alt="" />
       
            </>)
          }
            </div>
    </div>
      </>)
    }
    
    </>
  )
}

export default Comments

