import { useState } from "react"
import projectList from '../data/projectList'

const Input = () => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }
    const handleInput = (e) => {
        setInput(e.target.value)
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={input} onInput={handleInput} type="text" placeholder="Enter New Project Name"/>
        <button>Add Project</button>
      </form>
    </>
  )
}

export default Input
