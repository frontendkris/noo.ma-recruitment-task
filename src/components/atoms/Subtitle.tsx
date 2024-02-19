import React from "react"

export interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return <p className="selection:w-full max-w-[550px] text-brand-gray text-base">{text}</p>
}

export default Subtitle;