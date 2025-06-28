import React from 'react';

const Logo = () => {
  return (
    <div className="w-12 h-12 flex items-center justify-center mr-8">
      <div
        className="w-12 h-12 bg-primary flex items-center justify-center rounded-[8px]"
        style={{
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
        }}
      >
        <span className="space-grotesk-font text-2xl font-bold text-base-100 select-none">
          OF
        </span>
      </div>
    </div>
  );
};

export default Logo;
