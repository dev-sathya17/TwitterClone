import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationIcon from "@mui/icons-material/Notifications";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MessageIcon from "@mui/icons-material/Message";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PendingIcon from "@mui/icons-material/Pending";

export const navItems = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
    path: "/explore",
  },
  {
    title: "Notifications",
    icon: <NotificationIcon />,
    path: "/notifications",
  },
  {
    title: "Messages",
    icon: <MessageIcon />,
    path: "/messages",
  },
  {
    title: "Lists",
    icon: <ListAltIcon />,
    path: "/list",
  },
  {
    title: "Communities",
    icon: <GroupIcon />,
    path: "/communities",
  },
  {
    title: "Verfied",
    icon: <VerifiedIcon />,
    path: "/verified",
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    path: "/profile",
  },
  {
    title: "More",
    icon: <PendingIcon />,
    path: "/more",
  },
];
