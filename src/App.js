import {useState} from 'react'
function App() {
  
  const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('Jobs')) ?? [])
  const [job, setJob] = useState('')
  const handeAddData = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      localStorage.setItem("Jobs", JSON.stringify(newJobs))
      return newJobs
    })

    setJob('')
  }
  return (
    <div>
      <input value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handeAddData}>Add</button>
      <ul>
        {jobs.map((job, index) => (<li key={index}>{job}</li>))}
      </ul>
    </div>
  )
}

export default App;
