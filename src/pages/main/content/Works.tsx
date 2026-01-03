import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import yellowfolder from "../../../../public/YellowFolder.png"
import { useEffect } from "react";
import Aos from "aos";

const Works = () => {
useEffect(() => {
      setTimeout(() => {
        Aos.init();
      }, 10);
    }, [])

  const Work = () => {
      return(
        <div className="w-[100%] h-[auto] px-[2rem] pt-[2rem] overflow-hidden">
          <div className="flex items-center gap-[1rem]" data-aos="fade-right" data-aos-duration="1000">
            <SlArrowRight className="text-[.8rem]"/>
            <Image src={yellowfolder} alt="folder" width={20}/>
            <p className="font-interthin text-[.8rem]">D:\Desktop\Works</p>
          </div>
          <div className="border-t-[1px] border-[solid] mt-[1rem]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex gap-[1rem] mt-[1rem]">

            <div className="project flex text-left items-center flex-col h-[350px] w-[230px] bg-[#1E1E1E] rounded-lg">
              <div className="works1 rounded-t-md"></div>
              <div className="flex flex-col px-[1rem] py-[.5rem] h-[170px] text-[#28282B]">
                <p className="pb-[.5rem] text-[#fff]">Woosh Resto Bar Website</p>
                <p className="text-[12px] text-[#fff] h-[100px]">A fully responsive resto bar website built with React, featuring table booking, menu browsing, and smooth design.</p>
                <a href="https://github.com/joshiancadiz/woosh-resto-bar" className="w-[fit-content]">
                <div className="text-[#fff] bg-[#5A56D1] rounded-md p-[.4rem] w-[fit-content]">
                   <p className="text-[12px]">Project Link</p>
                </div>
                </a>
              </div>
            </div>

            <div className="project flex text-left items-center flex-col h-[350px] w-[230px] bg-[#1E1E1E] rounded-lg">
              <div className="works2 rounded-t-md"></div>
              <div className="flex flex-col px-[1rem] py-[.5rem] h-[170px] text-[#28282B]">
                <p className="pb-[.5rem] text-[#fff]">Thesis Project: SAS</p>
                <p className="text-[12px] text-[#fff] h-[100px]">Smart Aquatic Steward: An Automated Management and Water Monitoring System for Fish Tanks</p>
                <a href="https://github.com/joshiancadiz/SASapp">
                <div className="text-[#fff] bg-[#5A56D1] rounded-md p-[.4rem] w-[fit-content]">
                   <p className="text-[12px]">Project Link</p>
                </div>
                </a>
              </div>
            </div>
            {/* <div className="flex items-center h-[100%] w-[100%]">
              <p>More comming soon...</p>
            </div> */}
          </div>
        </div>
        </div>
      )
    }
  return (
    <div className="bg-[#fff] w-[100%] h-[100vh] pb-[5%]">
      <Work/>
    </div>
  )
};

export default Works;
