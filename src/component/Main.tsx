import PlaneIcon from "@/assests/Plane";
import Image from "next/image";
import { forwardRef } from "react";
import plane from "@/assests/Plane.svg";
const Main = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full relative z-10 flex lg:h-[300px] h-[200px] bg-[linear-gradient(90deg,#0EA5E9_0%,#74CFFF_51%,#0EA5E9_95%)] justify-center"
    >
      <h1 className="absolute top-[120px] lg:top-[150px] text-white text-2xl lg:text-5xl">
        Make Visa Paperwork a Breeze
      </h1>
      <div className=" gap-3 h-[50px] flex rounded-lg items-center p-0.5  bg-[linear-gradient(90deg,#0EA5E9_0%,#74CFFF_51%,#0EA5E9_95%)] w-[75%] lg:w-[45%]  absolute bottom-[-25px]">
        {/* <Image src={plane} fill={"red"} width={30} height={30}/> */}

        <div className="w-full h-full  gap-3 rounded-md  p-2 py-2.5 bg-white">
          <div className="w-full h-full flex gap-2 items-center justify-center">
            <PlaneIcon width={30} height={30} />
            <input
              placeholder="Where to?"
              type="text"
              className="text-black pl-2 border-[#0EA5E9] w-full h-full outline-none border-l-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Main;

{
  /* <div><PlaneIcon width={30} height={30} />
        <input
          placeholder="Where to?"
          type="text"
          className="text-black pl-2 border-[#0EA5E9] w-full h-full outline-none border-l-2"
        /></div> */
}
