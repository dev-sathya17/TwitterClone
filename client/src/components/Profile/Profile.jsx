import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Avatar, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TweetCard from "../Feed/TweetCard";
import ProfileModal from "./ProfileModal";
const Profile = () => {
  const [tabValue, setTabValue] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(-1);
  };

  // const handleEditProfile = () => {
  //   console.log("/edit-profile");
  // };
  const handleFollow = () => {
    console.log("/follow");
  };

  const handleTabChange = (event, value) => {
    setTabValue(value);

    if (value === 4) {
      console.log("liked tweets");
    } else if (value === 1) {
      console.log("user tweets");
    }
  };

  return (
    <div>
      <section
        className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleNavigation}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Username</h1>
      </section>
      <section>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/01/08/07/sea-2563389_1280.jpg"
          alt=""
          className="w-[100%] h-[15rem] object-cover"
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="username"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? (
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollow}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Username</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://cdn-icons-png.freepik.com/512/7641/7641727.png"
                alt="verified"
              />
            )}
          </div>
          <h1 className="text-gray-500">@username</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quae
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">India</p>
            </div>

            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined Jun, 2022</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>200</span>
              <span className="text-gray-500">Following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>100</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue + ""}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Medias" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1, 1, 1, 1].map((item, index) => (
                <TweetCard key={index} />
              ))}
            </TabPanel>
            <TabPanel value="2">Replies</TabPanel>
            <TabPanel value="3">Medias</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>
      <section>
        <ProfileModal open={openModal} handleClose={handleClose} />
      </section>
    </div>
  );
};

export default Profile;
