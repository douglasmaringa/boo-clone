import React,{useState} from 'react'
import Comments from '../components/Comments'
import Commenter from "../components/Commenter"
import Post from '../components/Post'
import "../components/commenter.css"

function Home() {
  const[open,setOpen]=useState(false)
  const[comments,setComments]=useState([])
  const[filtered,setFiltered]=useState([])
  const[on,setOn]=useState(false)
  const[best,setBest]=useState(false)
  const[recent,setRecent]=useState(false)
  const[voting,setVoting]=useState("")
  const[enneagram,setEnneagram]=useState("")
  const[zodiac,setZodiac]=useState("")

  //filter posts by voting
  const filterVoting = (e)=>{
    setOn(true)
    if(e.target.value){
      const filter = comments.filter((f)=>{
        return f.voting === e.target.value
     })
     setComments(filter)
    }
  }

  //filter posts by Enneagram
  const filterEnneagram = (e)=>{
    setOn(true)
    if(e.target.value){
      const filter = comments.filter((f)=>{
        return f.enneagram === e.target.value
     })
     setComments(filter)
    }
  }

  //filter posts by zodiac sign
  const filterZodiac = (e)=>{
    setOn(true)
    if(e.target.value){
      const filter = comments.filter((f)=>{
        return f.zodiac === e.target.value
     })
     setFiltered(filter)
    }
  }

  //filter posts by timestamp
  const filterRecent = (e)=>{
    setRecent(true)
    setOn(true)
    const sorted = comments.sort((a, b) => b.timestamp - a.timestamp)
    setFiltered(sorted)
  }

  //filter posts by votes
  const filterBest = (e)=>{
    setBest(true)
    setOn(true)
    const sorted = comments.sort((a, b) => b.likes - a.likes)
    setFiltered(sorted)
  }

  const all = ()=>{
    setOn(false)
    setVoting("")
    setEnneagram("")
    setZodiac("")
    setRecent(false)
    setBest(false)
    setFiltered([])
    window.location.reload()
  }
  
  console.log(comments)
  return (
    <div className='mb-40'>
        <Post/>
        <div className='mt-10 mx-10 md:mx-40'>
          <div className='flex'>
          <h1 className='font-bold text-lg mb-2'>Comments</h1>
          <button onClick={()=>{setOpen(!open)}} style={{backgroundColor:"#4EDCD8"}} className='ml-auto font-bold rounded-2xl px-4 text-white'>Vote/Comment</button>
          </div>
        <div className='flex'>
        <p onClick={()=>{all()}} className='cursor-pointer px-4'>All</p>
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
          filterVoting(e)
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
          filterEnneagram(e)
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
          filterZodiac(e)
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
        <div className=' mt-2 py-2 flex'>
          {
            best?(<>
             <p onClick={()=>{filterBest()}} style={{backgroundColor:"#4EDCD8"}} className='text-white font-bold rounded-2xl px-4'>Best</p>
            </>):(<>
              <p onClick={()=>{filterBest()}}  className='cursor-pointer bg-gray-400 rounded-2xl px-4'>Best</p>
        
            </>)
          }
      {
            recent?(<>
             <p onClick={()=>{filterRecent()}} style={{backgroundColor:"#4EDCD8"}} className='cursor-pointer text-white ml-2 font-bold  rounded-2xl px-4'>Recent</p>
            </>):(<>
              <p onClick={()=>{filterRecent()}}  className='cursor-pointer bg-gray-400 rounded-2xl ml-2 px-4'>Recent</p>
        
            </>)
          }  </div>
        </div>
        {
          open?(<>
           <Commenter comments={comments} setComments={setComments}/>
          </>):(<></>)
        }
       {
        on?(<>
        {
        filtered.map((e,index)=>(
          <>
            <Comments index={index} comments={comments} setComments={setComments} data={e}/>
          </>
        ))
       }
        </>):(<>
          {
        comments.map((e,index)=>(
          <>
            <Comments index={index} comments={comments} setComments={setComments} data={e}/>
          </>
        ))
       }
        </>)
       }
       
       
    </div>
  )
}

export default Home