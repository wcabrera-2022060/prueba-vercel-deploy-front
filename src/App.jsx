import { useForm } from 'react-hook-form'
import { useUser } from '../hooks/useUser.jsx'
import './App.css'

function App() {

  const { register, handleSubmit, reset } = useForm()
  const { createUser } = useUser()

  const onSubmitUser = (data) => {
    createUser(data)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitUser)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="name" 
          {...register('name')} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input 
          type="number" 
          className="form-control" 
          id="age" 
          {...register('age')} 
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default App
