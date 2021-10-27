import "./register.scss"
import { Link } from "react-router-dom";

export default function Register() {
    return (
    <div className="register">
      <span className="registerTitle">Đăng Kí</span>
      <form className="registerForm">
        <label>Tên Người Dùng</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Tài Khoản</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Mật Khẩu</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Đăng Kí</button>
      </form>
      <button className="registerLoginButton">
          <Link className="link" to="/login">
              Đăng Nhập
          </Link>
      </button>
    </div>
    )
}