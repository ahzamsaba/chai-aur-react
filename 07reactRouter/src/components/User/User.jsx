import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userId } = useParams()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">User Profile</h1>
        <p className="mt-4 text-xl text-gray-600">User ID: <span className="font-semibold text-indigo-600">{userId}</span></p>
      </div>
    </div>
  )
}

export default User
