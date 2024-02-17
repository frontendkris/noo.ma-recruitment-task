import React from "react"

export interface PageLabelProps {
  text: string;
}

const PageLabel: React.FC<PageLabelProps> = ({ text }) => {
  return <p className="text-brand-gray-light uppercase font-medium text-xs mb-0">{text}</p>
}

export default PageLabel;