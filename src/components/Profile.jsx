import { useHistory } from "react-router-dom";
import "./Profile.css";

export default function Profile(props) {
  const { profile, changeUser } = props;
  const history = useHistory();

  const handleClick = () => {
    changeUser(profile);
    history.push("/browse");
  };

  return (
    <div onClick={handleClick} className="profile-card">
      <img src={profile.avatar} />
      <h2>{profile.nickname}</h2>
    </div>
  );
}
