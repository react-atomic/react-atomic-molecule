import Search from "./Search";
import Path from "./Path";

const ZoomIn = (props) =>
  <Search {...props}>
    <Path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
  </Search>

export default ZoomIn;
