import React from 'react'

function Price() {
  return (
    <div
      className="py-32 md:w-full w-full bg-slate-400"
      style={{
        backgroundImage: 'url("/4.png")',
        backgroundSize: "cover", // Adjust to fit the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Prevent repeating if the image is smaller
        filter: "brightness(100%)",
        transition: "filter 0.3s",
      }}
    >
      <div className='bg-pink-400'>
        <div className="flex items-center justify-center md:px-20 px-8 py-24 md:text-3xl text-1xl text-center font-bold text-white">
          <h1 className="bg-[#77B5FE] p-3 w-full">Our plant</h1>
        </div>
        <div className='bg-green-400'>
          <img src="price.png" alt="price" className="" />
        </div>
      </div>
    </div>
  );
}

export default Price;