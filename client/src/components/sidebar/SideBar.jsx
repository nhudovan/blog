import "./sidebar.scss";

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">
                    GIỚI THIỆU
                </span>
                <img src="../images/gt16.png" alt="" />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco
                    dolore mollit amet ex esse.Sunt eu ut nostrud id quis. 
                </p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">
                    THỂ LOẠI
                </span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        Cuộc Sống
                    </li>
                    <li className="sideBarListItem">
                        Âm Nhạc
                    </li>
                    <li className="sideBarListItem">
                        Phong Cách
                    </li>
                    <li className="sideBarListItem">
                        Sở Thích
                    </li>
                    <li className="sideBarListItem">
                        Phim Ảnh
                    </li>
                    <li className="sideBarListItem">
                        Công Nghệ
                    </li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">
                    NHẬN THÔNG BÁO
                </span>
                <div className="sideBarSocial">
                <i className="sideBarIcon fab fa-facebook-square"></i>
                <i className="sideBarIcon fab fa-twitter-square"></i>
                <i className="sideBarIcon fab fa-pinterest-square"></i>
                <i className="sideBarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
