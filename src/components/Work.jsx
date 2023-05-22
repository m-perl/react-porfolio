import Card from './Card'
import projectList from '../data/projectList'

const Work = (props) => {

  return (
    <section className='work'>
      <h3>My Work</h3>

      {projectList.map((item) => (
        <Card projectList={item}/>
      ))}

    </section>
  )
}

export default Work
