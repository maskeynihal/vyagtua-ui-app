import React from "react";

import { Header, Global } from "vyaguta-ui-lib";

const headerNavs = [
  {
    label: "People",
    link: "/",
  },
  {
    label: "Projects",
    link: "/",
  },
  {
    label: "Timesheet",
    link: "/",
  },
  {
    label: "Leave",
    link: "/",
  },
  {
    label: "JUMP",
    link: "/",
    isActive: true,
  },
  {
    label: "Honor",
    link: "/",
  },
];

const avatarMenus = [
  {
    label: "View Profile",
    link: "/",
  },
  {
    label: "Logout",
    link: "/",
  },
];

const user = {
  name: "Nihal Maskey",
  image:
    "https://s3.amazonaws.com/com.vyaguta.images.dev/employee/48/224444.png?86b0ebb8-429a-4360-a778-9ff481574584",
};

function App() {
  return (
    <div className="App">
      <Global>
        <Header headerNavs={headerNavs} avatarMenus={avatarMenus} user={user} />
      </Global>
    </div>
  );
}

export default App;
