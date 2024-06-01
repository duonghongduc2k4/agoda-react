import "../css/detail.css"
import Footer from "./footer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
function Detail() {
    const [house, setHouse] = useState({});

    const a = Number(house.price);
    const formattedNumber = a.toLocaleString();
    console.log(house.price)
    const params = useParams();

    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    async function getHouse() {
        const res = await axios.get(`http://localhost:8080/api/house/${params.id}`)

        setHouse(res.data);
    }

    useEffect(() => {
        getHouse()
    }, []);
    const handleViewDirections = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(house.address)}`;
        window.open(googleMapsUrl, '_blank');
    };
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div class="blog-single">
                <div class="container-fluid " >

                    <div class="row justify-content-center">

                        <div class="col-lg-8 m-15px-tb">
                            <h1>Tên nhà</h1>
                            <article class="article">
                                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        {house.images?.map((item, index) => (
                                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                                <div>
                                                    <img src={process.env.PUBLIC_URL + '/img/' + (item.nameImage)}
                                                        class="d-block w-100" alt={`Carousel Image ${index + 1}`} />
                                                </div>

                                            </div>
                                        ))}
                                    </div>

                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="test" style={{ display: "inline-flex" }}>
                                    <div className="test1">
                                        <div className="article-title" style={{ display: 'inline-flex' }}>
                                            {/* <h2>{house.address}</h2> */}
                                            <h2>Tên nhà</h2>
                                            <small style={{ paddingTop: '8%' }}>({formattedNumber} VND/ ngày)</small>
                                        </div>
                                        <div style={{display:'flex' , paddingBottom:"15px"}}>
                                            <h6>Số phòng ngủ:3 {house.numberOfBedRoom}, </h6>
                                            <h6>Số phòng tắm:4 {house.numberOfBathRoom}</h6>
                                        </div>

                                        <div className="article-content">
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <h5 style={{ marginRight: '8px' }}>Địa chỉ: {house.name}</h5>
                                                <a style={{ marginBottom: '13px', marginLeft: '13px' }}
                                                    onClick={handleViewDirections}>Xem chỉ dẫn</a>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="test2">
                                        <form>
                                            <div class="container">
                                                <div class="row justify-content-end" style={{ paddingTop: '5%' }}>
                                                    <div class="card shadow-sm w-100" style={{ left: "140%", borderRadius:"10%" }}>
                                                        <div class="card-body">
                                                            <h4 class="mb-4">Đặt thuê nhà</h4>
                                                            <div class="input-group w-100" style={{paddingBottom:'5%'}}>
                                                                <input type="date" aria-label="First date" placeholder="Ngày đặt" class="form-control w-50"     />
                                                                <input type="date" aria-label="Last date" class="form-control w-50" />
                                                            </div>
                                                            <div class="form-group" style={{display:'flex'}}>
                                                                <label><b>Số ngày thuê:</b></label>
                                                                <p class="font-weight-bold" id="rentalDays">0 ngày</p>
                                                            </div>
                                                            <div style={{display:'flex'}}>
                                                                <label><b>Tổng tiền:</b></label>
                                                                <p class="font-weight-bold" id="rentalDays">1,200,00</p>
                                                            </div>
                                                            <div class="text-center">
                                                                <button type="button" class="btn btn-primary">Thuê nhà</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </article>
                            <div class="contact-form article-comment">
                                <h4>Nhận xét</h4>
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
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default Detail;