import React from 'react';

const ModesSection = () => {
  const styles = [
    '🧑‍🎓 Academic',
    '👩‍💼 Professional',
    '📝 Well-written',
    '😊 Optimistic',
    '📘 Like a CEO',
    '😅 Like a social media influencer',
    '🧠 Intellectual',
    '📗 Like a technical writer',
    '🖋️ Like a copywriter',
    '😎 Witty',
    '🤝 Diplomatic',
    '😌 Casual',
    '🙂 Polite',
  ];

  return (
    <section className="bg-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="max-w-xl">
          <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            ✨ NEW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Unlimited modes,<br />unlimited possibilities
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Get creative and invent your own style with Custom mode. <br />
            Want to sound like a CEO? A motivational speaker? A top influencer?<br />
            If you can describe it, our platform can do it.
          </p>
          <button className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
            💎 Upgrade to Premium
          </button>
        </div>

        {/* Right Section: Responsive Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-md lg:max-w-none">
          {styles.map((style, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-lg text-sm font-medium shadow-sm text-gray-800 text-center break-words leading-snug"
              style={{
                backgroundColor: getBackgroundColor(idx),
                wordWrap: 'break-word',
                whiteSpace: 'normal',
              }}
            >
              {style}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pastel Background Color Generator
function getBackgroundColor(index) {
  const colors = [
    '#FEF3C7', '#FDE2E4', '#E0F2FE', '#DCFCE7', '#EDE9FE',
    '#F3F4F6', '#FEE2E2', '#ECFDF5', '#E0E7FF', '#FEF9C3',
    '#FFE4E6', '#FAF5FF', '#DCFCE7',
  ];
  return colors[index % colors.length];
}

export default ModesSection;
