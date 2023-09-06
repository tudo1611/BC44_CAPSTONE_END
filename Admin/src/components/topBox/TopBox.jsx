import { topTeachers } from "../../data";
import StarIcon from "@mui/icons-material/Star";
import "./topBox.scss";

const TopBox = () => {
  return (
    <div className="topBox">
      <div className="top-title">
        <h3>Best Instructors</h3>
        <p>View all</p>
      </div>
      <div className="list">
        {topTeachers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="point">
              <StarIcon className="icon" />
              {user.point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
