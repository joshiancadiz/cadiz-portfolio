import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import yellowfolder from "../../../../public/YellowFolder.png"
import woosh from "../../../../public/woosh.jpg"
import sas from "../../../../public/sas.png"
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
        <div className="w-[100%] h-[70%] px-[2rem] pt-[2rem] overflow-hidden">
          <div className="flex items-center gap-[1rem]" data-aos="fade-right" data-aos-duration="1000">
            <SlArrowRight className="text-[.8rem]"/>
            <Image src={yellowfolder} alt="folder" width={20}/>
            <p className="font-interthin text-[.8rem]">D:\Desktop\Works</p>
          </div>
          <div className="border-t-[1px] border-[solid] mt-[1rem]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
          <div className="flex h-[100%] gap-[1rem] mt-[1rem]">
            <a href="https://woosh-resto-bar-git-main-joshua-cadizs-projects.vercel.app/" className="w-[fit-content]">
            <div className="flex text-center items-center flex-col h-[280px] w-[250px] border-[1px] bg-[#f4f1f1] rounded-lg">
              <div className="rounded-t-md overflow-hidden h-[50%]">
                <Image src={woosh} alt=""/>
              </div>
              <div className="flex flex-col px-[1rem] text-[#28282B]">
                <p  className="py-[.5rem]">Woosh Resto Bar Website</p>
                <p className="text-[12px] pb-[1rem]">A fully responsive resto bar website built with React, featuring table booking, menu browsing, and smooth design.</p>
              </div>
            </div>
            </a>

            <div className="flex text-center items-center flex-col h-[280px] w-[250px] border-[1px] bg-[#f4f1f1] rounded-lg">
              <div className="rounded-t-md overflow-hidden h-[50%]">
                <Image src={sas} alt=""/>
              </div>
              <div className="flex flex-col px-[1rem] text-[#28282B]">
                <p  className="py-[.5rem]">Smart Aquatic Steward</p>
                <p className="text-[12px] pb-[1rem]">A fully responsive resto bar website built with React, featuring table booking, menu browsing, and smooth design.</p>
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
