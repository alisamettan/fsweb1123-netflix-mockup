import { useHistory } from "react-router-dom";
import "./Profile.css";

export default function Profile(props) {
  const { profile, changeProfile } = props;
  const history = useHistory();

  const handleClick = () => {
    changeProfile(profile);
    history.push("/browse");
  };

  return (
    <div onClick={handleClick} className="profile-card">
      <img src={profile.avatar} />
      <h2>{profile.nickname}</h2>
    </div>
  );
}
