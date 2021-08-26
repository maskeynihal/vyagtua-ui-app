import React from "react";

import {
  Header,
  Global,
  SecondaryNav,
  NavLink,
  Link,
  Tab,
  SecondaryNavItem,
} from "vyaguta-ui-lib";
import {
  Router as BrowserRouter,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import { FiFileText, FiYoutube } from "vyaguta-icons/fi";

import { createBrowserHistory } from "history";

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

const navItems = [
  {
    label: "KPI",
    to: "/",
    hasNotification: false,
  },
  {
    label: "Goals & Achievements",
    to: "/g",
    hasNotification: false,
  },
  {
    label: "Check-ins",
    to: "/a",
    hasNotification: false,
  },
  {
    label: "Feedback",
    to: "/s",
    hasNotification: false,
  },
  {
    label: "Evaluation",
    to: "/d",
    hasNotification: false,
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
        <BrowserRouter
          history={createBrowserHistory({ basename: "localhost:3000" })}
        >
          <Header
            headerNavs={headerNavs}
            avatarMenus={avatarMenus}
            user={user}
          />
          <Switch>
            <SecondaryNav navItems={navItems}>
              <Link
                href="http://google.com"
                size="small"
                icon={(props) => <FiYoutube {...props} />}
                iconPosition="left"
                iconProps={{ size: "28px" }}
                weight="medium"
              >
                JUMP Walkthrough
              </Link>
            </SecondaryNav>
          </Switch>
        </BrowserRouter>
      </Global>
    </div>
  );
}

export default App;
