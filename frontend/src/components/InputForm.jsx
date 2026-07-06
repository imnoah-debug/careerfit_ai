import React, { useState, useEffect } from 'react';

function InputForm({ onSubmit, isLoading }) { // Destructure isLoading prop
  const [major, setMajor] = useState('');
  const [skillsInput, setSkillsInput] = useState(''); // State for the raw input string
  const [jobType, setJobType] = useState('');

  // Effect to update the component state if isLoading changes, useful for resetting form
  useEffect(() => {
    if (!isLoading) {
      // Optionally reset form fields when loading finishes
      // setMajor('');
      // setSkillsInput('');
      // setJobType('');
    }
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert skills string to array, trimming whitespace from each skill
    const skillsArray = skillsInput.split(',').map(skill => skill.trim()).filter(skill => skill); // Ensure no empty strings

    // Ensure that only the required fields with the correct structure are passed
    onSubmit({ major, skills: skillsArray, jobType });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-xl space-y-7 border border-gray-200" // Slightly refined container styling
    >
      <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-9 tracking-tight leading-snug">
        커리어 맞춤 추천을 위한 정보 입력
      </h2>

      {/* Major Input */}
      <div>
        <label htmlFor="major" className="block text-lg font-semibold text-gray-700 mb-3">
          전공
        </label>
        <input
          type="text"
          id="major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          placeholder="전공을 입력해주세요 (예: 컴퓨터공학과)"
          className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-base placeholder-gray-500 transition-shadow duration-200 ease-in-out" // Adjusted input styling
          required
          disabled={isLoading} // Disable input when loading
        />
      </div>

      {/* Skills Input */}
      <div>
        <label htmlFor="skills" className="block text-lg font-semibold text-gray-700 mb-3">
          보유 기술 (쉼표로 구분)
        </label>
        <input
          type="text"
          id="skills"
          value={skillsInput} // Use skillsInput state here
          onChange={(e) => setSkillsInput(e.target.value)} // Update skillsInput state
          placeholder="기술들을 쉼표로 구분해주세요 (예: Python, React, Git)"
          className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-base placeholder-gray-500 transition-shadow duration-200 ease-in-out" // Adjusted input styling
          required
          disabled={isLoading} // Disable input when loading
        />
      </div>

      {/* Job Type Input */}
      <div>
        <label htmlFor="jobType" className="block text-lg font-semibold text-gray-700 mb-3">
          희망 직무 유형
        </label>
        <input
          type="text"
          id="jobType"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          placeholder="희망 직무를 입력해주세요 (예: 프론트엔드 개발자)"
          className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-base placeholder-gray-500 transition-shadow duration-200 ease-in-out" // Adjusted input styling
          required
          disabled={isLoading} // Disable input when loading
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading} // Button disabled state based on isLoading prop
        className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 ease-in-out transform 
          ${isLoading
            ? 'bg-gray-400 cursor-not-allowed shadow-inner' // Style for disabled state
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:-translate-y-1 shadow-lg' // Style for enabled state
          }
          text-lg flex items-center justify-center space-x-2`}
      >
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L5 14h8v7l8-11h-8z"></path></svg>
        )}
        <span>{isLoading ? '분석 중...' : '맞춤 커리어 추천 받기'}</span>
      </button>
    </form>
  );
}

export default InputForm;