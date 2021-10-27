import "./settings.scss";
import Sidebar from "../../components/sidebar/SideBar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Cập Nhập Tài Khoản Của Bạn</span>
          <span className="settingsTitleDelete">Xóa Tài Khoản</span>
        </div>
        <form className="settingsForm">
          <label>Ảnh Đại Diện</label>
          <div className="settingsPP">
            <img
              src="./images/userProfile.png"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Tên Người Dùng</label>
          <input type="text" placeholder="abc" name="name" />
          <label>Tài Khoản</label>
          <input type="email" placeholder="abc@gmail.com" name="email" />
          <label>Mật Khẩu</label>
          <input type="password" placeholder="mật khẩu" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Cập Nhập
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  )

}