import React from 'react'
import underline from '@/public/underline.png'
import Image from 'next/image';
const GradeSection = () => {
 const grades = [
    { title: '7th-8th Graders' },
    { title: '9th-11 Graders' },
    { title: '12th-13th Graders' },
    { title: 'Transfer' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            CHOOSE YOUR PATH TO{' '}
            <span className="relative inline-block">
              SUCCESS
            <Image  src={underline} alt='Underline' width={250} className='h-2 w-60' height={40}/>  
              {/* <span className="absolute bottom-0 left-0 w-full h-10 bg-yellow-300 -z-10"></span> */}
            </span>
          </h1>
          <p className="text-gray-700 text-lg mt-6">
            Select your grade level to see tailored counseling guidance.
          </p>
        </div>

        {/* Grade Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {grades.map((grade, index) => (
            <button
              key={index}
              className="group relative bg-gradient-to-br h-56 from-gray-50 to-gray-100 hover:from-blue-500 hover:to-blue-700 border border-blue-200 hover:border-blue-600 rounded-3xl p-12 transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 group-hover:text-white transition-colors duration-300">
                {grade.title}
              </h2>
              
              {/* Optional: Add an arrow or icon that appears on hover */}
              {/* <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-white"
                >
                  <path 
                    d="M5 12H19M19 12L12 5M19 12L12 19" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div> */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GradeSection
