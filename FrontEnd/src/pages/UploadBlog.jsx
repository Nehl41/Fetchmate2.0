import React, { useRef, useState,useForm } from "react";

import axios from "axios";

const UploadBlog = () => {
  const [productImg, setProductImg] = useState("");
  const titleRef=useRef()
  const contentRef=useRef()


  // console.log(productImg);

  const transFormFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      }
    }
    else setProductImg("")
  };

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
      
      transFormFile(file)
    // setProductImg(file)
    console.log(file.size);
  };

  const handleFormSubmit=async (e)=>{
    e.preventDefault()
    
    const blogData=new FormData()
    blogData.append('title',titleRef.current)
    blogData.append('content',contentRef.current)
     blogData.append('image',productImg)
    const response=await axios({
      method: "post",
      url: "http://localhost:3000/blog",
      data: {
        title:titleRef.current.value,
        content:contentRef.current.value,
        image:productImg
      },
    })

    console.log(response);
    
  }



  return (
    <div>
      <form onSubmit={handleFormSubmit}  method="POST">
        <input ref={titleRef} type="text" name="title" placeholder="Enter Title" />
        <input ref={contentRef} type="text" name="content" placeholder="Enter Content" />
        <input
          type="file"
          name="file"
          onChange={handleProductImageUpload}
        />
       {productImg? <img src={productImg} alt="" />:"Image Previw Here!"}
       <input type="submit" value={"Submit Form!"} />
      </form>
    </div>
  );
};

export default UploadBlog;
