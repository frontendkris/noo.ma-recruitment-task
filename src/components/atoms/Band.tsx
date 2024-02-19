import React from 'react';

interface BandProps {
  text: string;
}

const Band: React.FC<BandProps> = ({ text }) => {
  return (
    <div className="band flex py-1 px-2.5 absolute left-4 top-4 rounded-[50px] z-50">
      <span className="text-center text-brand-gray text-sm font-medium leading-none">{text}</span>
    </div>
  );
};

export default Band;
