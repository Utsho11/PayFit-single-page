import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { TbTextSize } from "react-icons/tb";
import { MdLinearScale } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-8">
        <img
          className="flex justify-center"
          src="https://i.ibb.co/T1p13vx/Screenshot-from-2023-11-01-03-03-19.png"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="flex items-center gap-2 text-center text-3xl">
          Question list{" "}
          <kbd className="kbd kbd-sm bg-slate-400 text-white">12</kbd>
        </h1>
      </div>
      <p className="py-4 text-slate-400 text-sm text-center">
        These are the questions corresponding to the template you have selected,
        you can modify, add or delete them.
      </p>
      <div className=" flex justify-center items-center">
        <p className="flex py-4 items-center gap-1 text-blue-600">
          <AiFillEye></AiFillEye> Preview questions
        </p>
      </div>

      <div className="card mt-4 mb-4 w-96 hover:border-blue-500 hover:border-2 bg-base-100 shadow-xl">
        <div className="px-4 py-4">
          <div className="mb-4 flex justify-between">
            <p className="flex items-center text-slate-400 gap-2">
              <span className="text-sm">Asked to: Reviewee</span>
              <BiSolidUserCircle size={20} />
            </p>
            <p className="flex items-center text-slate-400 gap-2">
              <span className="text-sm">Text Answer</span>
              <TbTextSize size={20} />
            </p>
          </div>
          <p>
            <span>
              <kbd className="kbd kbd-sm bg-blue-500 text-white">1</kbd>
            </span>{" "}
            Do you find yourself struggling more than usual with the current
            COVID-19 situation?
          </p>
        </div>
      </div>

      <div className="card mb-4 w-96 hover:border-blue-500 hover:border-2 bg-base-100 shadow-xl">
        <div className="px-4 py-4">
          <div className="mb-4 flex justify-between">
            <p className="flex items-center text-slate-400 gap-2">
              <span className="text-sm">Asked to: Reviewee</span>
              <BiSolidUserCircle size={20} />
            </p>
            <p className="flex items-center text-slate-400 gap-2">
              <span className="text-sm">Text Answer</span>
              <TbTextSize size={20} />
            </p>
          </div>
          <p>
            <span>
              <kbd className="kbd kbd-sm bg-blue-500 text-white">2</kbd>
            </span>{" "}
            Are you having difficulties in terms of workload? Can you explain
            how you deal with the different projects?
          </p>
        </div>
      </div>

      <div className="card mb-4 w-96 hover:border-blue-500 hover:border-2 bg-base-100 shadow-xl">
        <div className="px-4 py-4">
          <div className="mb-4 flex justify-between">
            <p className="flex items-center text-slate-400 gap-2">
              <span className="text-sm">Asked to: Reviewee</span>
              <BiSolidUserCircle size={20} />
            </p>
            <p className="flex items-center text-slate-400 gap-2">
              <span className="text-sm">Rating Scale</span>
              <MdLinearScale size={20} />
            </p>
          </div>
          <p>
            <span>
              <kbd className="kbd kbd-sm bg-blue-500 text-white">3</kbd>
            </span>{" "}
            Based on your previous answer, would you say that you are still
            empowered by the company vision?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
