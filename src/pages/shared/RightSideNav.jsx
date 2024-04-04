import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import q1 from '/q1.png'
import q2 from '/q2.png'
import q3 from '/q3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="border shadow-md p-3">
        <h3 className="capitalize font-semibold text-2xl">login with</h3>
        <div className="mt-5 flex flex-col gap-2">
          <button className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg capitalize">
            <FaGoogle />
            login with google
          </button>
          <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg capitalize">
            <FaGithub />
            login with github
          </button>
        </div>
      </div>
      <div className="mt-3 border shadow-md mx-20 md:mx-auto p-3">
        <h3 className="capitalize font-semibold text-2xl ">Find Us On</h3>
        <div className="join join-vertical">
          <button className="btn join-item ">
            <FaFacebookF className="text-blue-600" />
            Facebook
          </button>
          <button className="btn join-item">
            <FaTwitter className="text-[#58A7DE]" />
            Twitter
          </button>
          <button className="btn join-item ">
            <FaInstagram className="text-[#D82D7E]" />
            Instagram{" "}
          </button>
        </div>
      </div>

    {/* --------------q-zone----------------------- */}


      <div className="mt-3 border shadow-md mx-20 md:mx-auto p-3">
        <h3 className="capitalize font-semibold text-2xl ">Q-Zone</h3>
        <div className="border w-[270] h-[780]">
          <img src={q1} alt="" />
          <img src={q2} alt="" />
          <img src={q3} alt="" />

        </div>
      </div>
      {/* ---------------lear more--------------- */}
      <div className="w-[270px] h-[510px] bg-[#05001D]">
        <div className="mt-20">
        <h3 className="text-[#FFFFFF] text-2xl font-semibold break-words w-[150px] mx-14 pt-14 ">
        Create an Amazing Newspaper
        </h3>
        <p className="text-[#FFFFFF]   w-[200px] h-[130px] mx-12 pt-5 ">
        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </p>

        <button className="btn bg-[#D72050] mt-14 mx-14">Learn More</button>
        </div>

      </div>
    </div>
  );
};

export default RightSideNav;
