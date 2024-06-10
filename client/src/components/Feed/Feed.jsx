import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet Description is required"),
  //   image: Yup.string().required("Required"),
});

const Feed = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [image, setImage] = useState(null);

  const handleSubmit = (values) => {
    console.log(values);
  };
  const form = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const url = event.target.files[0];
    form.setFieldValue("image", url);
    setImage(url);
    setUploadingImage(false);
  };

  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>
      <section className={`pb-10`}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <div className="w-full">
            <form>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening?"
                  className={`border-none outline-none text-xl bg-transparent`}
                  {...form.getFieldProps("content")}
                />
                {form.errors.content && form.touched.content && (
                  <span className="text-red-500">{form.errors.content}</span>
                )}
              </div>
              {/* <div>
                <img src="" alt="" />
              </div> */}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <ImageIcon className="text-[#1d9bf0]" />
                  <input
                    type="file"
                    name="imageFile"
                    className="hidden"
                    onChange={handleSelectImage}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feed;
