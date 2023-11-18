import React, { useRef } from "react";
import ReactModal from "react-modal";
import Nehu from "../../assets/nehu.png";
import axios from "../../utils/axiosConfig";

const UploadBlogModal = ({ isModalOpen, setIsModalOpen }) => {
  const titleRef = useRef();
  const contentRef = useRef();

  const submitBlog = () => {
    axios({
      url: "/blog",
      method: "POST",
      data: {
        title: titleRef.current.value,
        content: contentRef.current.value,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Axios Error Occured!");
      });
  };

  return (
    <ReactModal
      style={{
        content: {
          height: "75%",
          width: "50%",
          left: "25%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: "2%",
          paddingRight: "3%",
        },
      }}
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
    >
      <div className="flex flex-col gap-6 h-full">
        <div className="font-bold text-2xl text-center">Release A Post!</div>
        <div style={{ height: "10%" }} className="thumb flex gap-4 sm:px-10">
          <img className="rounded-full" src={Nehu} alt="" />
          <div>
            <div>
              <div className="text-xl font-bold">Nehal Patidar</div>
            </div>
            <div className="text-sm text-gray-500">Pet Sitter</div>
          </div>
        </div>
        <input
          style={{ padding: "1%" }}
          ref={titleRef}
          placeholder="Enter Post Title"
          type="text"
          className="w-full border-2 border-black"
        />
        <textarea
          placeholder="Enter Post Content"
          ref={contentRef}
          style={{ padding: "3%" }}
          className="w-full block resize-none mx-auto border-2 border-gray-500"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div>
          {" "}
          <button onClick={submitBlog} className="border-3 p-2">
            Submit
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default UploadBlogModal;
