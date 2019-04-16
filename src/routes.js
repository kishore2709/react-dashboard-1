// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import JobsPage from "views/Jobs/Jobs.jsx";
import YourSide from "views/User/User.jsx";
import TestPortal from "views/TestPortal/TestPortal.jsx";
import Upload from "views/Upload/Upload.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Applications",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/add-question",
    name: "Add Question",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/post-the-job",
    name: "Post the Job",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/your-profile",
    name: "User Profile",
    icon: Unarchive,
    component: YourSide,
    layout: "/admin"
  },
  {
    path: "/testportal",
    name: "Test Portal",
    icon: BubbleChart,
    component: TestPortal,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Log Out",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/rtl"
  },
  {
    path: "/jobs",
    name: "Jobs",
    invisible: true,
    icon: Unarchive,
    component: JobsPage,
    layout: "/admin"
  },
  {
    path: "/upload",
    name: "Upload Resume",
    icon: BubbleChart,
    component: Upload,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    invisible: true,
    icon: Unarchive,
    component: "",
    layout: "/rtl"
  }
];

export default dashboardRoutes;
