import "./App.css";
import Profile from "./components/profile/profile.jsx";
import FriendList from "./components/frienList/friendList.jsx";
import { userData } from "./components/profile/userData.json";
import friends from "./components/friendListItem/friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
