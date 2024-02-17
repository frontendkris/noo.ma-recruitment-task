import React from "react"

export interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h1 className="text-brand-gray-dark font-medium text-4xl mb-3">{text}</h1>
}

export default Heading;