import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import TweetCard from "../Feed/TweetCard";
import { Divider } from "@mui/material";
const Tweet = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(-1);
  };
  return (
    <>
      <section
        className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleNavigation}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Tweet</h1>
      </section>

      <section>
        <TweetCard />
        <Divider sx={{ margin: "2rem 0rem" }} />
      </section>

      <section>
        {[1, 1, 1].map((item, index) => (
          <TweetCard key={index} />
        ))}
      </section>
    </>
  );
};

export default Tweet;
