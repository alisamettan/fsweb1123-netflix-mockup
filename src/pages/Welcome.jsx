import { useState } from "react";
import { profiles } from "../profiles";
import Profile from "../components/Profile";

export default function Welcome(props) {
  const { changeUser } = props;
  const [profileList, setProfileList] = useState(profiles);

  return (
    <div>
      <h1>Who's Watching?</h1>
      <div className="profile-container">
        {profileList.map((item, index) => {
          return <Profile changeUser={changeUser} key={index} profile={item} />;
        })}
      </div>
    </div>
  );
}
