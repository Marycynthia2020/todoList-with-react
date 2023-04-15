import {useState} from 'react'
import FormSection from "./FormSection";
import TodoList  from "./TodoList";
import { nanoid } from 'nanoid'

const TodoApp = () => {
  const taskList = [
    // {id: 1, name: 'Teach js'},
    // {id: 2, name: 'teach html'},
    // {id: 3, name: 'teach react'},
]

const [tasks, setTasks] = useState(taskList)

  const addNewTask = (task) => {
    const taskObject = {
      id: nanoid(),
      name:task
    }
    const updatedTasks = [  taskObject,...tasks]    
    console.log(updatedTasks)
    setTasks(updatedTasks)
  }
  return (
    <div className = 'container'>
        <FormSection handleClick = {addNewTask} />
        <TodoList taskList = {tasks} />
    </div>
  )
}

export default TodoApp