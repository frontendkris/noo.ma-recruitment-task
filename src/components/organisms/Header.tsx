import React, { ReactNode } from 'react';
import Heading from '../atoms/Heading';
import PageLabel from '../atoms/PageLabel';
import Subtitle from '../atoms/Subtitle';

export interface HeaderProps {
  label: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ label, title, subtitle, children }) => {
  return (
    <section>
      <div className='
        header w-auto mx-0 lg:mx-10 rounded-b-[26px] pt-20 px-5 pb-10
        flex flex-col gap-20
      '>
        <div className='flex flex-col items-center text-center'>
          <PageLabel text={label} />
          <Heading text={title} />
          <Subtitle text={subtitle} />
        </div>
        { children }
      </div>
    </section>
  );
};

export default Header;
