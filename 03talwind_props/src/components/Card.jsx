import React from "react";

function Card({username="defaultUser", btnText="Visit Me"}) {
    console.log("username : ", username);
    
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg relative group">
      <img
        className="w-full h-96 object-cover"
        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
        alt="Profile of Delba"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
        <h2 className="text-white font-semibold text-lg">{username}</h2>
        <p className="text-gray-200 text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
