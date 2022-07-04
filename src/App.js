import { useState } from 'react'


function App() {

  
  const [jobs, setJobs] = useState( [])
  const [job, setJob] = useState('')
  // const [showEdit, setShowEdit] = useState(false)
  const [Edit,setEdit] =useState({})

  const handeAddData = () => {
    setJobs(prev => {
      const newJobs = [...prev, {name:job, id: Math.floor(Math.random()*10000)}]
      localStorage.setItem("Jobs", JSON.stringify(newJobs))
      return newJobs
    })

    setJob('')
  }
 
  const handleUpdate =()=>{
      setJobs(prev => prev.map(item => item.id === Edit.id ? {id:item.id , name:job} : item))
      setEdit({id:null,name:''})
      setJob('')
  }
  if(Edit.id){
    return (
      <>
        <input value={job} onChange={e => setJob(e.target.value)} />
        <button onClick={handleUpdate}>Update</button>
      </>
       
    )
  }
  const handleRemove = (id)=>{
      //KHÁC ID THÌ GIỮ LẠI 
     console.log('hello')
      const removeArr = jobs.filter((item)=>item.id !== id)
      setJobs(removeArr);
  }
 
  return (
    <div style={{position:'relative',top:'50%'}} >
      <h4 style={{fontSize:'26px'}}>TO DO LIST</h4>
      <br/>
      <input 
          value={job} 
          onChange={e => setJob(e.target.value)}
       />
      <button 
          onClick={handeAddData}
      >
            Add
      </button>

      <ul>
        {jobs.map((job, index) => (
          <>
            <li key={job.id} style={{ background: 'rgb(131,58,180)', width: '25%', padding: '20px',margin:'20px', listStyle: 'none' }}>{job.name}
              <button style={{ marginLeft: '20px' }}
                      //arrow function -> callback lại  (NOTE)
                      onClick={()=>handleRemove(job.id)}
                      
              >
                Remove
              </button>
              <button key={job.id} 
                      style={{ marginLeft: '20px' }}
                      onClick={()=>setEdit({id:job.id,name:job.name}) }
              >
                Edit
              </button>
            </li>
          </>
        ))}
        
        
      </ul>

    </div>
  )




}

export default App;
