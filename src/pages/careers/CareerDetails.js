/** @format */

import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()
  return (
    <div className='career-details'>
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Starting salary: {career.location}</p>
      <p>Location: {career.location}</p>
      <div className='details'>
        <p>
          Sit est reprehenderit cupidatat consequat ad ipsum exercitation ea
          excepteur reprehenderit do. Velit nostrud officia magna aute deserunt
          enim quis nisi anim voluptate. Elit non reprehenderit mollit sit
          labore voluptate cupidatat reprehenderit officia. Qui non enim commodo
          irure minim excepteur eiusmod. Labore cupidatat sint cupidatat velit
          do et ad sunt voluptate nostrud eu duis.
        </p>
      </div>
    </div>
  )
}

export async function careersDetailsLoader({ params }) {
  const { id } = params
  const response = fetch('http://localhost:4000/careers/' + id)
  return (await response).json()
}
