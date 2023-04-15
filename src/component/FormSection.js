import {useState} from 'react'

const FormSection = (props) => {
  const [newTask, setNewTask] = useState('')

  const handleChange = (event) => {
    const taskName = event.target.value
    setNewTask(taskName)
  }

  const handleClick = () => {
    props.handleClick(newTask)
    setNewTask('')
  }
  return (
    <div className='newtask'>
        <input type = 'text' placeholder = 'Add a text' value ={newTask} onChange={handleChange}/>
        <button className = 'push' onClick = {handleClick}>Add</button>
    </div>
  )
}

export default FormSection