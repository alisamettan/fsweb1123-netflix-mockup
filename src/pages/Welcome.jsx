import { useState } from "react";
import { profiles } from "../profiles";
import Profile from "../components/Profile";
import { Redirect } from "react-router-dom";
import { FullPage } from "./Login";

export default function Welcome(props) {
  const { changeProfile, loggedUser } = props;
  const [profileList, setProfileList] = useState(profiles);

  if (!loggedUser) {
    return <Redirect to="/login" />;
  }

  return (
    <FullPage>
      <h1>Who's Watching?</h1>
      <div className="profile-container">
        {profileList.map((item, index) => {
          return (
            <Profile changeProfile={changeProfile} key={index} profile={item} />
          );
        })}
      </div>
    </FullPage>
  );
}
