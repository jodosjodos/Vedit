import { TbLetterT, TbFilterFilled } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";

const Upload = () => {
  return (
    <div>
      <div className="flex flex-col  text-white px-56 ">
        <h1 className="text-4xl mb-6">Post</h1>
        <div className="grid  grid-cols-12 gap-4">
          <div className=" col-span-12 flex flex-row justify-between flex-wrap">
            <div className="flex flex-row items-center  justify-around gap-16">
              <img src="./assets/images/video.png" />
              <p>
                Bob Pro feat. Kevin Kade & Mistaek - DEMU (Official Music Video)
              </p>
            </div>
            <button className="bg-[#CD3EFF] px-16 rounded-lg h-2/6 font-extrabold ">
              Upload +{" "}
            </button>
          </div>
          <div className=" col-span-12 flex flex-row gap-8   ">
            <div className=" w-8/12  flex-col gap-2">
              <h3>Original</h3>

              <video
                className="  rounded-3xl "
                controls
                src="./assets/videos/me.mp4"
              ></video>
            </div>
            <div className=" rounded-3xl flex  flex-col gap-2  w-4/12">
              <h3 className="hover:text-[#CD3EFF] hover:cursor-pointer">
                Preview
              </h3>
              <video
                className="  rounded-3xl "
                controls
                src="./assets/videos/me.mp4"
              ></video>
            </div>
          </div>
          <div className="col-span-12 flex flex-col gap-6">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-1   text-2xl">
                  <TbLetterT size={32} />
                  <p>Text</p>
                </div>
                <div className="flex flex-row gap-1   text-2xl">
                  <TbFilterFilled />
                  <p>Filters</p>
                </div>
                <div className="flex flex-row gap-1   text-2xl">
                  <BsEmojiSmile /> <p>Emojis</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between">
              <div className="w-8/12">
                <input
                  type="text"
                  placeholder="Select the emoji you want"
                  className="border border-[#CD3EFF] bg-black w-full py-4 focus:border-[#CD3EFF] hover:border-[#CD3EFF] rounded-lg px-3 text-white"
                />
              </div>
              <button className="bg-[#CD3EFF] px-16 rounded-lg py-3 font-extrabold  flex flex-row gap-4 items-center justify-center">
                <p className="text-xl">Post </p>
                <AiOutlineSend size={32} />
              </button>
            </div>
          </div>
          <div className=" col-span-8 ">
            <h3>Description</h3>
            <input
              type="text"
              id="description"
              className="w-full border border-[#CD3EFF] bg-black py-10 mb-8   focus:border-[#CD3EFF] hover:border-[#CD3EFF] rounded-md px-3 text-white  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
