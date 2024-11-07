import { MdAdd, MdCommit, MdGite, MdInsights } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-[80vh] flex items-center bg-[#1E293B] justify-center">
        <div className="w-[95%] h-[100%] items-center  justify-between flex">
          <div className="w-[30%] h-[80%] rounded-md  font-semibold text-[70px]  items-center bg-white justify-center flex  text-pink-200">
            Github
          </div>
          <div className=" flex  w-[50%] h-[70%] flex-wrap ">
            <div className="w-full h-[50%] flex gap-5">
              <div className="border-[white] text-white border rounded-md w-[50%] h-[100%] font-semibold p-3 ">
                Git hub is a control version system <MdGite size={40} />
              </div>
              <div className="border-[white] border rounded-md w-[50%] h-[100%] font-semibold p-3  text-white">
                git init
                <MdInsights size={40} />
              </div>
            </div>
            <div className="w-full h-[50%] flex gap-5 mt-4">
              <div className="border-[white] text-white border rounded-md w-[50%] h-[100%] font-semibold p-3 ">
                git add .
                <MdAdd size={40} />
              </div>
              <div className="border-[white] text-white border rounded-md w-[50%] h-[100%] font-semibold p-3 ">
                Git commit -m `first commit`
                <MdCommit size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
