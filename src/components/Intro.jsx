import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Alex</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            Alex is a Software Engineer who is currently focusing on Web Design, Programming,
            Network Architecture and Network and System Admin.
            He has many sought after skills in the ICT sector such as teamwork, collaboration,
            problem-solving, and communication skills. He is currently studying a Bachelor of
            Software Engineering at the University of Canberra.
            {' '}
            <a
               href="https://www.youtube.com/channel/UCkTxrxFQw_hu3tJbRRar0kg"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
            </a>{' '}
         </p>
      </div>
   )
}

export default Intro;