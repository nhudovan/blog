import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.scss";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  )
}