import { Link } from "react-router-dom";
import Footer from "./footer";
import SideBar from "./sidebar/sidebar";
function Histoty() {

    return (
        <div style={{ height: '100vh' }}>

            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ boxShadow: " 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div className="container-fluid">
                        <div className="navbar">
                            <a className="navbar-brand" href="/home">Agola</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <ul class="nav nav-underline">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" style={{ color: "black" }} href="/home">Về trang chủ</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
            <body>
                <SideBar />
                <div className="container" style={{ marginTop: '2%' }}>
                    <h2>Danh sách nhà đang thuê</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Thời gian</th>
                                <th scope="col">Tên nhà</th>
                                <th scope="col">Tổng tiền</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">14/8/2022</th>
                                <td><Link to="/detail" style={{ textDecoration: "none", color: "black" }}>Nhà 1</Link></td>
                                <td>1.200.000</td>
                                <td>Hà Nội</td>
                                <td>Chờ nhận phòng</td>
                                <td>
                                    <button type="button" class="btn btn-danger">Hủy phòng</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">21/5/2022</th>
                                <td><Link to="/detail" style={{ textDecoration: "none", color: "black" }}>Nhà 1</Link></td>
                                <td>5.300.000</td>
                                <td>Hà Nội</td>
                                <td>Đã trả phòng</td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2/8/2022</th>
                                <td><Link to="/detail" style={{ textDecoration: "none", color: "black" }}>Nhà 1</Link></td>
                                <td>1.800.000</td>
                                <td>Hà Nội</td>
                                <td>Đã hủy phòng</td>
                                <td>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </body>
            <div style={{ backgroundColor: "lightgray", bottom: "0", width: "100%", position: 'fixed' }}><Footer /></div>

        </div>
    )
}
export default Histoty; 