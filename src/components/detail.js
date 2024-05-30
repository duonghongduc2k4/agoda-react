import "../css/detail.css"
import Footer from "./footer";
import Navbar from "./navbar";
function Detail() {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div class="blog-single">
                <div class="container" style={{ alignItems: 'center' }}>
                    <div class="align-items-center">
                        <div class=" m-15px-tb">
                            <article class="article"  style={{ borderBottom: "100px", bottom:'20%' }}>
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

                            <div class="contact-form article-comment" >
                                <div>
                                    <h4 >Mô tả</h4>
                                </div>
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

                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Detail;