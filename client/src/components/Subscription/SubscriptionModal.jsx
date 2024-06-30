import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
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
  borderRadius: 4,
  outline: "none",
};

export default function BasicModal({ open, handleClose }) {
  const [plan, setPlan] = useState("Anually");
  const features = [
    "Prioritized rankings in coversations and search.",
    "See approxiamately twice as many Tweets between ads in you For Youand Following Timelines.",
    "Add bold and italictext in your Tweets.",
    "Post longer videos and 1080p video uploads.",
    "All the existing Blue features, including Edit Tweet, Bookmark Folders and earrly access to new features.",
  ];
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <IconButton onClick={handleClose} aria-label="delete">
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <div className="flex justify-center py-6">
            <div className="w-[80%] space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between bg-slate-300 shadow-lg">
                <h1 className="text-xl pr-5">
                  Blue subscribers with verified phone number will get a blue
                  checkmark once approved.
                </h1>
                <img
                  src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                  alt=""
                  className="w-24 h-24"
                />
              </div>
              <div className="flex justify-between border rounded-full px-5 py-3 border-gray-500">
                <div>
                  <span
                    className={`${
                      plan === "Anually" ? "text-black" : "text-gray-400"
                    } cursor-pointer`}
                    onClick={() => setPlan("Anually")}
                  >
                    Anually
                  </span>
                  <span className="text-green-500 text-sm ml-5">SAVE 12%</span>
                </div>
                <p
                  className={`${
                    plan === "Monthly" ? "text-black" : "text-gray-400"
                  } cursor-pointer`}
                  onClick={() => setPlan("Monthly")}
                >
                  Monthly
                </p>
              </div>
              <div className="space-y-3">
                {features.map((feature) => (
                  <div className="flex items-center space-x-5">
                    <FiberManualRecordIcon
                      sx={{ width: "7px", height: "7px" }}
                    />
                    <p className="text-xs">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3">
                <span className="line-through italic">₹7,800.00</span>
                <span className="px-5">₹6,800.00/year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
