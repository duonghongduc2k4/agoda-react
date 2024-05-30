import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Home() {
    const [houses, setHouses] = useState([]);
    const [search, setSearch] = useState('');
    const userName = sessionStorage.getItem('userName');
    const password = sessionStorage.getItem('password');
    const roles = sessionStorage.getItem('roles');
    const idAccount = sessionStorage.getItem('account_id');
    const checkRole = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPage, setItemsPage] = useState(5);
    const totalPages = Math.ceil(houses.length / itemsPage);
    const [price, setPrice]
        = useState(0);

    function formatCurrentcy(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }
    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPage;
        const endIndex = startIndex + itemsPage;
        return houses.slice(startIndex, endIndex);
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
        const response = await axios.get(`http://localhost:8080/api/house?name=${search}`);
        // console.log(response.data)
        setHouses(response.data);



        if (roles === 'all') {
            checkRole = null;
        }

    }
    useEffect(() => {
        getList()
    }, [search])
    return (
        
        <div>
            <header>
                <Navbar />
            </header>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e874107714719.5fad336f21e5b.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/945451107714719.5fad336f20b9c.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/873875107714719.5fad336f1fe85.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>

            <div className="search" style={{ marginBottom: "5em", marginTop: "2em" }}>
                <div className="container" >
                    <form class="form-inline d-flex" >

                        <input class="form-control my-sm-0" style={{ width: "400px", borderRadius: '20px', marginRight: "1%", borderColor: 'black' }} type="search" placeholder="Tìm nhà cho thuê" aria-label="Search" />
                        <select class="form-select" aria-label="Default select example" style={{ width: "160px", marginRight: '0.5%', borderColor: 'black' }}>
                            <option selected>Số phòng ngủ</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select" aria-label="Default select example" style={{ width: "160px", borderColor: 'black' }}>
                            <option selected>Số phòng tắm</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select" aria-label="Default select example" style={{ width: "160px", marginLeft: '0.5%', borderColor: 'black' }}>
                            <option selected>Giá</option>
                            <option value="1">1 - 3 triệu</option>
                            <option value="2">2 - 5 triệu</option>
                            <option value="3">5 - 7 triệu</option>
                            <option value="4">7 - 9 triệu</option>
                        </select>
                        <select class="form-select" aria-label="Default select example" style={{ width: "160px", marginLeft: '0.5%', borderColor: 'black' }}>
                            <option selected>Trạng thái</option>
                            <option value="1">Còn trống</option>
                            <option value="2">Đã cho thuê</option>
                            <option value="3">Đang nâng cấp</option>
                        </select>
                        <div style={{ marginLeft: '4%' }} >
                            <button class="btn btn-danger  my-2 my-sm-0" type="submit" style={{ left: "20%" }}>Tìm kiếm</button>
                        </div>
                    </form>
                </div>
            </div>
            <body>

                <div className="container"  >
                    <h2 style={{ textAlign: 'center' }}>Danh sách các nhà đang cho thuê</h2>
                    {currentPageData.map(houses => <div class="portfolioContainer " style={{ display: 'flex', flexWrap: "wrap" }}>
                        <div class="col-sm-6 col-lg-3 col-md-4 webdesign illustrator">
                            <Link to={`/detail/${house.id}`}>
                                <div class="gal-detail thumb h-90">
                                    <div class="image-popup" title="Screenshot-1">
                                        <img src={process.env.PUBLIC_URL + '/img/' + (house.images[0]?.nameImage || '')} class="thumb-img" alt="work-thumbnail" />
                                    </div>
                                    <h5 class="text">{house.name}</h5>

                                    <p class="text-muted"><small>{formatCurrentcy(house.price)}</small></p>
                                    <p class="text-muted"><small>{house.address}</small></p>
                                    <button type="button" class="btn btn-outline-primary" style={{ marginLeft: "50%" }} disabled>Trạng thái</button>
                                </div>
                            </Link>
                        </div>

                        
                    </div>
                    )}
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

            </body>
            <Footer />
        </div>


    )
}

