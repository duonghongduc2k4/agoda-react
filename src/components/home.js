import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="navbar w-100">
                            <a className="navbar-brand" href="/home">Agola</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <ul class="nav nav-underline">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/home">Trang chủ</a>
                                </li>

                            </ul>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav "  >

                                    <a className="nav-link" href="#" style={{ Left: "420%" }}>Login</a>
                                    <p style={{ marginTop: '0.40em' }}>|</p>
                                    <a className="nav-link" href="#">Sign in</a>
                                    <div class="dropdown">
                                        <div class="btn-group dropstart">
                                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                Chức năng
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="/host">Chủ nhà</a></li>
                                                <li><a class="dropdown-item" href="#">Chi tiết tài khoản</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="search" style={{ marginBottom: "10em", marginTop: "2em" }}>
                <div className="container">
                    <form class="form-inline d-flex" >
                        <input class="form-control my-sm-0" style={{ width: "1198px" }} type="search" placeholder="Tìm nhà cho thuê" aria-label="Search" />
                        <button class="btn btn-danger  my-2 my-sm-0" type="submit">Tìm kiếm</button>
                    </form>
                </div>
            </div>

            <div className="container" style={{ borderTop: "1px solid lightgray" }} >
                <h2>Danh sách các nhà đang cho thuê</h2>
                <div className="card mb-3" style={{ maxWidth: '100%' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://tienganhikun.com/upload/images/house_ikun.jpg" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <Link to={"/detail"} style={{ textDecoration: "none", color: "black" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Tên nhà</h5>
                                    <p className="card-text">Giá (vnd)</p>
                                    <p className="card-text"><small className="text-body-secondary">Mô tả</small></p>
                                </div>
                            </Link>
                        </div>
                        <div class="card-footer text-body-secondary" style={{ display: "flex" }}>
                            <a href="/hostInfo" style={{ textDecoration: "none", color: "black" }}>Tên chủ nhà</a>
                            <button class="btn btn-outline-info" style={{ marginLeft: "79%", color: "black" }}>liên hệ:0977774296</button>
                        </div>

                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '100%' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://tienganhikun.com/upload/images/house_ikun.jpg" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <Link to={"/detail"} style={{ textDecoration: "none", color: "black" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Tên nhà</h5>
                                    <p className="card-text">Giá (vnd)</p>
                                    <p className="card-text"><small className="text-body-secondary">Mô tả</small></p>
                                </div>
                            </Link>
                        </div>
                        <div class="card-footer text-body-secondary" style={{ display: "flex" }}>
                            <a href="/hostInfo" style={{ textDecoration: "none", color: "black" }}>Tên chủ nhà</a>
                            <button class="btn btn-outline-info" style={{ marginLeft: "79%", color: "black" }}>liên hệ:0977774296</button>
                        </div>

                    </div>
                </div>

            </div>

            <div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <footer>

            </footer>
        </div>


    )
}

