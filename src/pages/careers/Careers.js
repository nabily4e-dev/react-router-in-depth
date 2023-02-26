/** @format */

import { useLoaderData, Link } from 'react-router-dom'

export default function Careers() {
  const careers = useLoaderData()
  return (
    <div className='careers'>
      {careers.map((career) => (
        <Link
          to='/help'
          key={career.id}
        >
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// Loader function
export const careersLoader = async () => {
  const response = fetch('http://localhost:4000/careers')
  return (await response).json()
}
