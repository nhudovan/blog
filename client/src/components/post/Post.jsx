import "./post.scss";


export default function Post({img}) {
    return (
        <div className="post">
            <img
                className="postImg"
                src={img}
                alt=""
            />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">
                        Cuộc Sống
                    </span>
                    <span className="postCategory">
                        Âm Nhạc
                    </span>
                </div>
                <span className="postTitle">

                     Lorem ipsum dolor sit amet
                   
                </span>
                <hr />
                <span className="postDate">1 giờ trước</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>

    )
}
