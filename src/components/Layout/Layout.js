import { Component } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Classes from "./Layout.module.css";
class Layout extends Component {
  state = {
    sideOpen: false,
  };
  toggleSideHandler = () => {
    this.setState((prev) => ({ ...prev, sideOpen: !prev.sideOpen }));
  };
  render() {
    return (
      <>
        <Toolbar toggleSide={this.toggleSideHandler} />
        <SideDrawer
          toggleSide={this.toggleSideHandler}
          open={this.state.sideOpen}
        />
        <div>, sidebar , backdrop</div>
        <main className={Classes.Content}>{this.props.children}</main>
      </>
    );
  }
}
export default Layout;
