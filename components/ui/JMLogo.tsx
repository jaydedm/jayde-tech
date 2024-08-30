import React from 'react';

const JMInitialsIcon = ({ className, bgColor = "#f40d30", textColor = "#FFFFFF" }) => {
  return (
    <svg className={className} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" fill={bgColor} />
      <text
        x="25"
        y="25"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="bold"
        fill={textColor}
        textAnchor="middle"
        dominantBaseline="central"
      >
        JM
      </text>
    </svg>
  );
};

export default JMInitialsIcon;
