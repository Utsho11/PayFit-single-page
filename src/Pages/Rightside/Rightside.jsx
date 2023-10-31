import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

const Rightside = () => {
  return (
    <div className="mt-64">
      <div>
        <h1 className="flex items-center gap-1 font-semibold">
          See question list of : <AiFillQuestionCircle className="text-slate-400" size={16} />
        </h1>
        <p className="flex items-center gap-1">
          <input
            type="radio"
            name="radio-7"
            className="radio radio-xs radio-info"
            checked
          />{" "}
          Everyone
        </p>
        <p className="flex items-center gap-1">
          <input
            type="radio"
            name="radio-7"
            className="radio radio-xs radio-info"
          />{" "}
          Reviewee (3)
        </p>
        <p className="flex items-center gap-1">
          <input
            type="radio"
            name="radio-7"
            className="radio radio-xs radio-info"
          />{" "}
          Manager (0)
        </p>
      </div>
      <div className="mt-8">
        <div className="card w-72 bg-amber-100 shadow-xl">
          <div className="card-body">
            <div className="avatar relative bottom-12 left-56">
              <div className="w-12 rounded-full">
                <img src="https://imgs.search.brave.com/EacdplN7Pxd8I0zg69J25tsr-dDF1Mhe6WI0U91Hb-Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/NzA4NDQxOS9waG90/by9wb3J0cmFpdC1v/Zi1oYXBweS1tYXR1/cmUtd29tZW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVRW/ak5iSHlyU1ZKN1hj/VFpONi1sSG1JdEhJ/RjB2VnpjSXZPWXlY/QVBwOGs9" />
              </div>
            </div>
            <p className="relative bottom-8">
              <h2 className="font-semibold">Amandine, HR PayFit</h2>
              We recommended to have no more than{" "}
              <span className="font-semibold">10 questions </span>mixed between
              opened and closed question to allow the participants to better
              reflect on they achieved. <br /> <br />
              Currently the <span className="font-semibold">Reviewee</span>{" "}
              answer to <kbd className="kbd kbd-sm bg-slate-400 text-white">3</kbd> questions and the{" "}
              <span className="font-semibold">Manager</span> to{" "}
              <kbd className="kbd kbd-sm bg-slate-400 text-white">0</kbd> question
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
