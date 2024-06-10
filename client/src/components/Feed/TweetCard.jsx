import RepeatIcon from "@mui/icons-material/Repeat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavouriteIcon from "@mui/icons-material/Favorite";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    console.log("delete tweet");
    handleClose();
  };

  const handleReply = () => {
    console.log("handle replyy");
  };

  const handleReTweet = () => {
    console.log("handle retweet");
  };

  const handleLike = () => {
    console.log("handle like");
  };

  return (
    <div>
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p>You Retweet</p>
      </div> */}
      <div className="flex space-x-5">
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
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                <MenuItem onClick={handleDelete}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div className="cursor-pointer">
              <p className="mb-2 p-0">
                sample tweet content for clone project using spring boot and
                react
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="flex space-x-3 items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleReply}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handleReTweet}
                />
                <p>54</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavouriteIcon
                    className="cursor-pointer"
                    onClick={handleLike}
                  />
                ) : (
                  <FavouriteBorderIcon
                    className="cursor-pointer"
                    onClick={handleLike}
                  />
                )}
                <p>54</p>
              </div>
              <div className="flex space-x-3 items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleReply}
                />
                <p>43</p>
              </div>
              <div className="flex space-x-3 items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleReply}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
