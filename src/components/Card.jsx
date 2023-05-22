import React from 'react'
import projectList from '../data/projectList'

const Card = ({projectList}) => {
  return (
    <div key={projectList.id} className='card'>
      <h4>{projectList.name}</h4>
      <p>{projectList.info}</p>
      <p>Website: <a href={projectList.siteURL} target='_blank'>{projectList.siteName}</a></p>
      <button className='btn'><a href={projectList.repo} target='_blank'>Repo</a></button>
    </div>
  )
}

export default Card;
