import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useFormik } from "formik";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModal({ open, handleClose }) {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("submitting", values);
    handleClose();
    // make API call to create a reply with the values
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: 4,
    },
    onSubmit: handleSubmit,
  });
  const [uploadingImage, setUploadingImage] = useState(false);
  const [image, setImage] = useState(null);

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const url = event.target.files[0];
    formik.setFieldValue("image", url);
    setImage(url);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5 py-10">
            <Avatar
              alt="username"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="cursor-pointer"
              onClick={() => navigate(`/profile/${6}`)}
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex cursor-pointer items-center space-x-2">
                  <span className="font-semibold">Username</span>
                  <span className="text-gray-600">@user_handle . 2m</span>
                  <img
                    className="ml-2 w-5 h-5"
                    src="https://cdn-icons-png.freepik.com/512/7641/7641727.png"
                    alt="verified"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div
                  onClick={() => navigate("/tweet/3")}
                  className="cursor-pointer"
                >
                  <p className="mb-2 p-0">
                    sample tweet content for clone project using spring boot and
                    react
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className={`pb-10`}>
            <div className="flex space-x-5">
              <Avatar
                alt="username"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              />
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="What is happening?"
                      className={`border-none outline-none text-xl bg-transparent`}
                      {...formik.getFieldProps("content")}
                    />
                    {formik.errors.content && formik.touched.content && (
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
                    )}
                  </div>
                  {/* <div>
                <img src="" alt="" />
              </div> */}
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                        <ImageIcon className="text-[#1d9bf0]" />
                        <input
                          type="file"
                          name="imageFile"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className="text-[#1d9bf0]" />
                    </div>
                    <div>
                      <Button
                        sx={{
                          width: "100%",
                          borderRadius: "20px",
                          paddingY: "8px",
                          paddingX: "20px",
                          backgroundColor: "#1e88e5",
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
