import { FaReact, FaJava, FaJs, FaHtml5, FaCss3, FaAngular, FaGit, FaJira, FaNodeJs } from 'react-icons/fa';

export function About({ id }) {
  return (
    <>
      <div className="h-screen" id={id}>
        <div className="max-w-5xl mx-auto py-6 max-h-full grid grid-cols-3 gap-2 grid-rows-2">
          <h1 className="text-3xl col-span-3 text-center uppercase text-white">About</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus nemo dicta tempore assumenda. Sint ea, optio eligendi recusandae exercitationem, vel repellendus
            repudiandae laudantium magni rem, a excepturi facere dolor!
          </p>
          <div className="col-span-2 grid grid-cols-4 gap-4 ">
            <FaReact className="w-16 h-16" />
            <FaAngular className="w-16 h-16" />
            <FaHtml5 className="w-16 h-16" />
            <FaJs className="w-16 h-16" />
            <FaCss3 className="w-16 h-16" />
            <FaGit className="w-16 h-16" />
            <FaJava className="w-16 h-16" />
            <FaJira className="w-16 h-16" />
            <FaNodeJs className="w-16 h-16" />
          </div>
        </div>
      </div>
    </>
  );
}
