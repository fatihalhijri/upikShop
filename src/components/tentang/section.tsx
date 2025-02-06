import React from 'react'

const SectionAbout = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen ">
          {/* Left SectionAbout */}
          <div className="flex-1 p-8 text-center md:text-left">
            <h4 className="text-sm uppercase tracking-widest font-medium">Work With Us</h4>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Now Let’s grow Yours
            </h1>
            <p className="mt-4 text-sm text-white/80">
              The gradual accumulation of information about atomic and small-scale
              behavior during the first quarter of the 20th.
            </p>
            
          </div>
    
          {/* Right SectionAbout */}
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/400"
              alt="Example"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      );
}

export default SectionAbout