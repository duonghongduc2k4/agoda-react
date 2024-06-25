import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import "../css/home.css";


export default function Home() {
    const [houses, setHouses] = useState([]);
    const role = sessionStorage.getItem('role');
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');

    const idAccount = sessionStorage.getItem('account_id');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPage, setItemsPage] = useState(12);
    const totalPages = Math.ceil(houses.length / itemsPage);


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [numberOfBedRoom, setNumberOfBedRoom] = useState(0);
    const [numberOfBathRoom, setNumberOfBathRoom] = useState(0);
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(0);
    const [status, setStatus] = useState(0);




    const handleSelectChange = (e) => {
        const [from, to] = e.target.value.split(' - ');
        setPriceFrom(parseInt(from));
        setPriceTo(parseInt(to));
    };

    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPage;
        const endIndex = startIndex + itemsPage;
        const reversedHouses = [...houses].reverse();
        return reversedHouses.slice(startIndex, endIndex);
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
        const response =
            await axios.get(`https://thuenha.up.railway.app/api/house?name=${name}&address=${address}&numberOfBedRoom=${numberOfBedRoom}&numberOfBathRoom=${numberOfBathRoom}&priceFrom=${priceFrom}&priceTo=${priceTo}&status=${status}`);
        // console.log(response.data)
        setHouses(response.data);
    }
    useEffect(() => {
        getList()
    }, [name, address, numberOfBedRoom, numberOfBathRoom, priceFrom, priceTo, status])

    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }


    return (
        

        <div className="body">
            <div className="header" style={{ position: "sticky", top: "0", zIndex: "1000" }}>
                {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"
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
                                    <div className="dropdown" >
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
                                                        <li><p class="dropdown-item">Chi tiết tài khoản</p>
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
                                                    <li><a href={` /history/${idAccount}`} class="dropdown-item">Lịch sử
                                                        đặt</a>
                                                    </li>
                                                    <li><p class="dropdown-item">Chi tiết tài khoản</p></li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav> */}
            </div>
            <div className="navbars">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{ width: "100%" }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e874107714719.5fad336f21e5b.png"
                                className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/945451107714719.5fad336f20b9c.png"
                                className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/873875107714719.5fad336f1fe85.png"
                                className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="search" style={{ marginBottom: "3em", marginTop: "2em" }}>
                    <div className="containerSearch">
                        <form className="form-inline d-flex h-40">
                            <input className="form-control my-sm-0"
                                style={{ width: "13%", borderRadius: '20px', marginRight: "1%", borderColor: 'black' }}
                                type="search"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Tìm tên nhà cho thuê" aria-label="Search" />
                            <input className="form-control my-sm-0"
                                style={{ width: "15%", borderRadius: '20px', marginRight: "1%", borderColor: 'black' }}
                                type="search"
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Tìm địa chỉ nhà cho thuê" aria-label="Search" />
                            <select className="form-select" aria-label="Default select example"
                                onChange={(e) => setNumberOfBedRoom(e.target.value)}
                                style={{ width: "11%", marginRight: '0.5%', borderColor: 'black' }}>
                                <option selected>Số phòng ngủ</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <select className="form-select" aria-label="Default select example"
                                onChange={(e) => setNumberOfBathRoom(e.target.value)}
                                style={{ width: "11%", borderColor: 'black' }}>
                                <option selected>Số phòng tắm</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={handleSelectChange}
                                style={{ width: '11%', marginLeft: '0.5%', borderColor: 'black' }}
                            >
                                <option value="">Giá</option>
                                <option value="0 - 1000000">Dưới 1 triệu</option>
                                <option value="1000000 - 3000000">1 - 3 triệu</option>
                                <option value="3000000 - 5000000">3 - 5 triệu</option>
                                <option value="5000000 - 7000000">5 - 7 triệu</option>
                                <option value="7000000 - 100000000">Trên 7 triệu</option>
                            </select>
                            <select className="form-select" aria-label="Default select example"
                                onChange={(e) => setStatus(e.target.value)}
                                style={{ width: "11%", marginLeft: '0.5%', borderColor: 'black' }}>
                                <option selected>Trạng thái</option>
                                <option value="1">Còn trống</option>
                                <option value="2">Đã cho thuê</option>
                                <option value="3">Đang chờ duyệt</option>
                            </select>
                            <div style={{ marginLeft: '1%' }}>
                                <button className="btn btn-danger h-40  my-2 my-sm-0 " type="submit" style={{ left: "20%", width: '100px' }}>Tìm
                                    kiếm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="between">
                <h1 style={{ textAlign: 'center' }}>Danh sách các nhà đang cho thuê</h1>
                <div className="left">
                </div>
                <div className="container">
                    <div className="container_top" >
                        {currentPageData.map(houses =>
                            <div className="a w-250 mb-4" style={{ flexBasis: "calc(25% - 1rem)" }}>
                                <div>
                                    <Link to={`/detail/${houses.id}`} className="none-decoration">
                                        <div className="image-tour">
                                            <img
                                                src={process.env.PUBLIC_URL + '/img/' + (houses.images[0]?.nameImage || '')}
                                                className="w-100 h-250 b-radius-8" alt="work-thumbnail"
                                            />
                                        </div>
                                        <div className="title-tour m-2">
                                            <p className="mb-0 clr-black">{houses.name}</p>
                                            <p className="mb-0 clr-black"><small>{formatCurrency(houses.price)} Vnđ/ngày</small></p>
                                            <p className="mb-0 clr-black"><small>{houses.address}</small></p>
                                        </div>
                                    </Link>
                                </div>

                                <div
                                    className="status-badge"
                                    style={{        
                                        backgroundColor: (() => {
                                            console.log(houses.status.id)

                                            switch (houses.status.name.toLowerCase()) {
                                                case 'đang trống':
                                                    return ' #E53935'; // Màu xanh lá cây
                                                case 'đã thuê':
                                                    return '#4CAF50'; // Màu đỏ
                                                default:
                                                    return '#FFEB3B'; // Màu vàng
                                            }
                                        })(),
                                        color: '#FFFFFF', // Màu chữ trắng
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        display: 'inline-block',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.2s ease-in-out',

                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} >
                                        
                                    {houses.status.name}
                                    
                                </div>

                            </div>
                        )}
                    </div>
                    <div className="right"></div>
                </div>
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

            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
