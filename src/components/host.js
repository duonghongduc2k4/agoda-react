import { Await, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import "../css/host.css";
function HostList() {
    const [houses, setHouses] = useState([]);
    const idAccount = sessionStorage.getItem('account_id');
    const navigate = useNavigate();

    const role = sessionStorage.getItem('role');
    const username = sessionStorage.getItem('username');

    const filteredData = houses.filter(house => house.account.id === parseInt(idAccount));
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPage, setItemsPage] = useState(10);
    const totalPages = Math.ceil(filteredData.length / itemsPage);

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPage;
        const endIndex = startIndex + itemsPage;
        const reversedData = [...filteredData].reverse();
        return reversedData.slice(startIndex, endIndex);
    };

    const currentPageData = getCurrentPageData();

    const renderPageItems = () => {
        const pageItems = [];
        for (let i = 1; i <= totalPages; i++) {
            const isActive = i === currentPage ? 'active' : '';

            pageItems.push(
                <li className={`page-item ${isActive}`} key={i}>
                    <a className="page-link" onClick={() => currentPage + 1}>{i}</a>
                </li>
            );
        }
        return pageItems;
    };

    async function getList() {
        const response = await axios.get(`https://thuenha.up.railway.app/api/house`);
        setHouses(response.data)
    };
    async function deleteHouse(id){
        if(window.confirm("Bạn có chắc muốn xóa nhà không !")){
            const response=await axios.delete(`https://thuenha.up.railway.app/api/house/${id}`);
         } getList();
    }

    useEffect(() => {
        getList()
    }, [])
    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

   

    return (
        <div>
            <div className="header" style={{ position: "sticky", top: "0", zIndex: "1000" }}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary"
                    style={{ boxShadow: " 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div className="container-fluid">
                        <div className="navbar w-100">
                            <a className="navbar-brand" href="/home">Agoda</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <ul class="nav nav-underline">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/home">Trang chủ</a>
                                </li>

                            </ul>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav ">
                                    <div className="dropdown">

                                        {role === 'admin' || role === 'host' ? (
                                            <div className="btn-group dropstart">
                                                <div>

                                                    <button type="button" className="btn btn-secondary dropdown-toggle"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        {username}
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="/host">Chủ nhà</a></li>
                                                        <li><a className="dropdown-item" href="/create">Đăng nhà</a>
                                                        </li>
                                                        <li><a href={`/history/${idAccount}`} className="dropdown-item">Lịch
                                                            sử
                                                            đặt</a></li>
                                                        <li><a className="dropdown-item" href="#">Chi tiết tài khoản</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        ) : (
                                            <div>
                                                <button type="button" className="btn btn-secondary dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    {username}
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a href={`/history/${idAccount}`} class="dropdown-item">Lịch sử
                                                        đặt</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Chi tiết tài khoản</a></li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <body>
                <div className="container" style={{ width: "80%" }}>
                    <div>
                        <Link to="/create">
                            <button type="button" className="btn btn-primary" style={{ marginRight: "2%" }}>Đăng nhà
                            </button>
                        </Link>
                        <button type="button" className="btn btn-primary" style={{ marginRight: "2%" }}>
                            <a className="dropdown-item" href={`/order/${idAccount}`}>Danh sách đăng kí thuê</a>
                        </button>
                    </div>

                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center">#</th>
                                    <th scope="col" className="text-left">Tên nhà</th>
                                    <th scope="col" className="text-left">Địa chỉ</th>
                                    <th scope="col" className="text-right">Giá</th>
                                    <th scope="col" className="text-center">Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPageData.map((house, index) => (
                                    <tr key={index}>
                                        <th scope="row" className="text-center">{index + 1}</th>
                                        <td className="text-left">
                                            <a href={`detail/${house.id}`} className="text-decoration-none text-dark">
                                                {house.name}
                                            </a>
                                        </td>
                                        <td className="text-left">{house.address}</td>
                                        <td className="text-right">{formatCurrency(house.price)}</td>
                                        <td className="text-center">
                                            <a
                                                href={`edit/${house.id}`}
                                                type="button"
                                                className="btn btn-secondary btn-sm me-2"
                                            >
                                                Sửa nhà
                                            </a>
                                        </td>
                                        <td>
                                            <Link className="btn btn-warning ml-2" onClick={()=> deleteHouse(house.id)}>Xóa</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </body>
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <a className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</a>
                        </li>
                        {renderPageItems()}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <a className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}


export default HostList; 
