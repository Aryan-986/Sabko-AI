import React, { useState } from 'react';
import { Sparkles, Upload, FileText } from 'lucide-react';

const ResumeReviewer = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [reviewResult, setReviewResult] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!resumeFile) return;
    setLoading(true);
    setReviewResult(null);

    // Simulate processing
    setTimeout(() => {
     
      setLoading(false);
    }, 2000);
  };

  return (
    <div className='min-h-screen p-6 bg-[#F9FAFB] text-slate-700'>
      <div className='flex flex-col lg:flex-row gap-6'>

        {/* Upload Form Section */}
        <form
          onSubmit={onSubmitHandler}
          className='w-full max-w-lg p-6 bg-white rounded-2xl border border-gray-200 shadow-sm'
        >
          <div className='flex items-center gap-3 mb-4'>
            <Sparkles className='w-6 h-6 text-[#4A7AFF]' />
            <h1 className='text-xl font-semibold text-gray-800'>Resume Reviewer</h1>
          </div>

          {/* File Upload */}
          <label className='block mt-4 mb-1 text-sm font-medium text-gray-600'>
            Upload Resume (PDF, DOCX)
          </label>
          <input
            type='file'
            accept='.pdf,.doc,.docx'
            onChange={(e) => setResumeFile(e.target.files[0])}
            className='w-full p-2.5 text-sm rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500'
            required
          />

          {/* Optional Job Description */}
          <label className='block mt-6 mb-1 text-sm font-medium text-gray-600'>
            Job Description (optional)
          </label>
          <textarea
            rows={4}
            placeholder="Paste the job description here to get better feedback..."
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type='submit'
            className='mt-6 flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition-all duration-200'
          >
            <Upload className='w-4 h-4' />
            Review Resume
          </button>
        </form>

        {/* Output / Results Section */}
        <div className='w-full max-w-xl p-6 bg-white rounded-2xl border border-gray-200 shadow-sm min-h-96 flex flex-col justify-center items-center'>
          

          {loading ? (
            <p className='text-gray-500 animate-pulse'>Analyzing resume...</p>
          ) : reviewResult ? (
            <div className='w-full'>
              <p className='text-sm text-gray-800 font-medium mb-2'>
                Score: <span className='text-blue-600 font-bold'>{reviewResult.score}%</span>
              </p>
              <ul className='list-disc pl-5 text-sm text-gray-700 space-y-2'>
                {reviewResult.feedback.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className='text-sm text-gray-400 flex flex-col items-center gap-2 text-center'>
              <FileText className='w-8 h-8 text-gray-400' />
              <p>
                Upload your resume and click <span className='text-blue-600 font-medium'>“Review Resume”</span> to receive feedback.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeReviewer;
