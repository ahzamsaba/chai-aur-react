import React from 'react'

function Logo({ width = 'w-[100px]' }) {
  return (
    <div className={`text-2xl font-bold text-violet-900 tracking-wide ${width} hover:scale-105 transition-transform`}>
      Blog<span className="text-black">App</span>
    </div>
  )
}

export default Logo
