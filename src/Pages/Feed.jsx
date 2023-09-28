import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
const Feed = () => {
  return (
    <div>
      <div className="text-white grid grid-cols-12 gap-16">
        <div className="col-span-3 flex flex-col gap-6 bg-black py-6 overflow-y-scroll border-l-4 border-[#CD3EFF]">
          <h3 className="text-2xl  self-center">Users you may know</h3>
          <div className="flex flex-row justify-around">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src="./assets/images/userProfile.png" alt=" user profile" />
              <div>
                <p>John Doe</p>
                <p className="opacity-20 text-sm">johndoe@gmail.com</p>
              </div>
            </div>
            <button className="text-[#CD3EFF]">Follow</button>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src="./assets/images/userProfile.png" alt=" user profile" />
              <div>
                <p>John Doe</p>
                <p className="opacity-20 text-sm">johndoe@gmail.com</p>
              </div>
            </div>
            <button className="text-[#CD3EFF]">Follow</button>
          </div>
          
          <div className="flex flex-row justify-around">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src="./assets/images/userProfile.png" alt=" user profile" />
              <div>
                <p>John Doe</p>
                <p className="opacity-20 text-sm">johndoe@gmail.com</p>
              </div>
            </div>
            <button className="text-[#CD3EFF]">Follow</button>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src="./assets/images/userProfile.png" alt=" user profile" />
              <div>
                <p>John Doe</p>
                <p className="opacity-20 text-sm">johndoe@gmail.com</p>
              </div>
            </div>
            <button className="text-[#CD3EFF]">Follow</button>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src="./assets/images/userProfile.png" alt=" user profile" />
              <div>
                <p>John Doe</p>
                <p className="opacity-20 text-sm">johndoe@gmail.com</p>
              </div>
            </div>
            <button className="text-[#CD3EFF]">Follow</button>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src="./assets/images/userProfile.png" alt=" user profile" />
              <div>
                <p>John Doe</p>
                <p className="opacity-20 text-sm">johndoe@gmail.com</p>
              </div>
            </div>
            <button className="text-[#CD3EFF]">Follow</button>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src="./assets/images/userProfile.png" alt=" user profile" />
              <div>
                <p>John Doe</p>
                <p className="opacity-20 text-sm">johndoe@gmail.com</p>
              </div>
            </div>
            <button className="text-[#CD3EFF]">Follow</button>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src="./assets/images/userProfile.png" alt=" user profile" />
              <div>
                <p>John Doe</p>
                <p className="opacity-20 text-sm">johndoe@gmail.com</p>
              </div>
            </div>
            <button className="text-[#CD3EFF]">Follow</button>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src="./assets/images/userProfile.png" alt=" user profile" />
              <div>
                <p>John Doe</p>
                <p className="opacity-20 text-sm">johndoe@gmail.com</p>
              </div>
            </div>
            <button className="text-[#CD3EFF]">Follow</button>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src="./assets/images/userProfile.png" alt=" user profile" />
              <div>
                <p>John Doe</p>
                <p className="opacity-20 text-sm">johndoe@gmail.com</p>
              </div>
            </div>
            <button className="text-[#CD3EFF]">Follow</button>
          </div>
          
         
        </div>
        <div className="col-span-6">
          <h1>Feed</h1>
          <video
            className="  rounded-3xl    "
            controls
            src="./assets/videos/me.mp4"
          ></video>
          <div>
            <img src="./assets/images/userProfile.png" alt=" user profile" />
            <div>
              <p>John Doe</p>
              <p>johndoe@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <button className="bg-[#CD3EFF] px-16 rounded-lg h-2/6 font-extrabold ">
            Upload +{" "}
          </button>
          <div>
            <div>
              <AiOutlineLike />
              <p>200</p>
            </div>
            <div>
              <FaRegComment />
              <p>200k</p>
            </div>
            <div>
              <PiShareFatLight />
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
