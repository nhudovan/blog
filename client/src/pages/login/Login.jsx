import "./login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Đăng Nhập</span>
      <form className="loginForm">
        <label>Tài Khoản</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Mật Khẩu</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Đăng Nhập</button>
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
                Đăng Kí
          </Link>
        </button>
        
    </div>
  );
}