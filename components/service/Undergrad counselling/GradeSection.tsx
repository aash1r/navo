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
    <div className="min-h-screen bg-[#ECF1F6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            CHOOSE YOUR PATH TO{' '}
            <span className="relative inline-block">
              SUCCESS
            <Image  src={underline} alt='Underline' width={200} className='h-2 w-44' height={40}/>  
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
              className="group relative h-52  bg-gradient-to-br   from-gray-50 to-gray-100 hover:from-blue-500 hover:to-blue-700 border border-blue-200 hover:border-blue-600 rounded-3xl p-12 transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 group-hover:text-white transition-colors duration-300">
                {grade.title}
              </h2>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GradeSection
