import React from 'react';
import {
  ShieldCheck,
  AlertOctagon,
  Ban,
  FileWarning,
  UserX,
  ScrollText,
} from 'lucide-react';

const EthicalUsePolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-18 bg-white rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <ShieldCheck className="w-16 h-16 text-indigo-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">
          📜 Ethical Use Policy
        </h1>
        <p className="text-gray-600 mt-2 max-w-xl">
          We value integrity and are committed to ethical AI usage. Please read this policy carefully before using <span className="font-semibold">Sablai.AI</span>.
        </p>
      </div>

      {/* Alert Box */}
      <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-5 py-4 mb-8">
        <AlertOctagon className="text-red-600 w-6 h-6 mt-1" />
        <div>
          <p className="text-red-700 font-semibold">
            🚫 Sablai.AI is <span className="underline">not</span> a cheating tool.
          </p>
          <p className="text-sm text-red-600 mt-1">
            It's designed to help you learn, write better, and express ideas — not to encourage unethical behavior.
          </p>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="text-gray-700 text-base leading-relaxed text-center mb-8">
        <p>
          ✍️ <span className="font-medium">Sablai.AI</span> is your smart AI assistant, built to improve writing quality,
          enhance clarity, and boost creativity. It should <strong>never</strong> be used to violate academic or professional ethics.
        </p>
      </div>

      {/* Prohibited Uses */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">🚷 Prohibited Uses</h2>
        <p className="text-sm text-gray-500 mt-1">These actions are not allowed on our platform:</p>
      </div>

      <ul className="space-y-4 text-sm sm:text-base max-w-xl mx-auto text-gray-700">
        <li className="flex items-start gap-3">
          <Ban className="text-gray-500 w-5 h-5 mt-1" />
          <span>📝 Submitting AI-written work as original for assignments or exams</span>
        </li>
        <li className="flex items-start gap-3">
          <FileWarning className="text-gray-500 w-5 h-5 mt-1" />
          <span>🛑 Trying to bypass plagiarism detection systems</span>
        </li>
        <li className="flex items-start gap-3">
          <UserX className="text-gray-500 w-5 h-5 mt-1" />
          <span>🙅 Misrepresenting authorship of AI-generated content</span>
        </li>
        <li className="flex items-start gap-3">
          <ScrollText className="text-gray-500 w-5 h-5 mt-1" />
          <span>🚫 Engaging in academic dishonesty or contract cheating</span>
        </li>
      </ul>

      {/* Closing Note */}
      <p className="text-center text-gray-700 leading-relaxed mt-10 max-w-2xl mx-auto">
        💡 <strong>Sablai.AI</strong> exists to empower and assist you in creating great content — responsibly. 
        Please use it to learn, grow, and write better, while upholding honesty, fairness, and transparency. 🤝
      </p>
    </section>
  );
};

export default EthicalUsePolicy;
