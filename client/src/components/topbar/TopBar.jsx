import './topbar.scss';
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                                TRANG CHỦ
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                                GIỚI THIỆU
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write" >
                            BÀI VIẾT
                        </Link>  
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            LIÊN HỆ
                        </Link>
                    </li>
                    {user && <li className="topListItem">ĐĂNG XUẤT</li>}
                </ul>
            </div>
            <div className="topRight">
                {   user  ? (
                    <Link className="link" to="/settings">
                        <img
                        className="topImg"
                        src="../images/profile.jpg" 
                        alt="" />
                    </Link>
                ):(
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                ĐĂNG NHẬP
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                ĐĂNG KÍ
                            </Link>
                        </li>
                  </ul>
                ) }

                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
