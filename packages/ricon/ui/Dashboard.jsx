import base from "./base";
const Dashboard = (props) => {
  const d = "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z";
  return base("Dashboard", d)(props);
};
export default Dashboard;
