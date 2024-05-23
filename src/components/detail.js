import "../css/detail.css"
import Footer from "./footer";
function Detail() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ boxShadow: " 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 20px 0 rgba(0, 0, 0, 0.19)" }} >
                    <div className="container-fluid">
                        <div className="navbar">
                            <a className="navbar-brand" href="/home">Agola</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <ul class="nav nav-underline">
                                        <li class="nav-item">
                                            <a class="nav-link" aria-current="page" href="/home">Về trang chủ</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>


                        </div>
                    </div>
                </nav>
            </header>

            <div class="blog-single">
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col-lg-8 m-15px-tb">
                            <article class="article">
                                <div class="article-img text-center">
                                    <img class="img-fluid" src="https://tienganhikun.com/upload/images/house_ikun.jpg" title="" alt="" />
                                </div>
                                <div class="article-title">
                                    <h2>Tên ngôi nhà</h2>
                                </div>
                                <h2>Giá(VND)</h2>
                                <div class="article-content">
                                    Hiển thị thông tin chi tiết ngôi nhà ở đây
                                </div>
                            </article>
                            <div class="contact-form article-comment">
                                <h4>Mô tả</h4>
                                <form id="contact-form" method="POST">
                                    <div class="row">

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea name="message" id="message" placeholder="Để lại nhật xét của bạn" rows="4" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12" style={{ marginTop: "1%" }}>
                                            <button type="button" class="btn btn-outline-success">Đăng</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 m-15px-tb blog-aside">

                            <div class="widget widget-author">
                                <div class="widget-title">
                                    <h3>Author</h3>
                                </div>
                                <div class="widget-body">
                                    <div class="media align-items-center">
                                        <div class="avatar">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" title="" alt="" />
                                        </div>
                                        <div class="media-body">
                                            <h5>Tên người cho thuê </h5>
                                        </div>
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary" type="button">Số liên hệ:</button>
                                        <button class="btn btn-outline-dark" type="button">Chat với chủ nhà</button>
                                        <button class="btn btn-outline-dark" type="button">Yêu cầu liên lạc lại</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<div>
    <Footer/>
</div>
        </div>
    )
}
export default Detail;