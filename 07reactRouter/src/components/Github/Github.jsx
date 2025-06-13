import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/ahzamsaba')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
    const data =useLoaderData()

return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 px-4">
      <div className="bg-gray-800 text-white p-8 rounded-xl shadow-xl text-center max-w-md w-full">
        <img
          className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-500"
          src={data.avatar_url}
          alt="GitHub Avatar"
        />
        <h1 className="text-2xl font-semibold mt-4">{data.name}</h1>
        <p className="text-gray-300">@{data.login}</p>
        <p className="mt-2 text-lg">
          👥 Followers: <span className="font-bold text-indigo-400">{data.followers}</span>
        </p>
        <p className="text-sm text-gray-400 mt-2">Public Repos: {data.public_repos}</p>
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white text-sm"
        >
          Visit GitHub
        </a>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ahzamsaba')
    return response.json()
}