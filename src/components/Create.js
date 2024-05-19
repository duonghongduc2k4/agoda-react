import axios from "axios";
import { Button } from "bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function Create() {


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="navbar">
                        <a className="navbar-brand" href="/home"    >Agola</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <ul class="nav nav-underline">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="/home" style={{ color: "black" }}>Trang chủ</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">On going</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">On going</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container w-50" style={{ alignContent: "center" }}>
                <div style={{ borderBottom: "1px solid lightgray" }}>
                    <h1>
                        Thêm nhà muốn cho thuê
                    </h1>
                </div>
                <form className="row g-3" >
                    <div className="col-md">
                        <label htmlFor="inputName" className="form-label">Tên nhà</label>
                        <input type="text" className="form-control" id="inputName" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Địa chỉ</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">Số phòng</span>
                        <input type="number" aria-label="Bedroom" class="form-control" placeholder="Phòng ngủ" />
                        <input type="number" aria-label="Bathroom" class="form-control" placeholder="Phòng tắm" />
                    </div>
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">Thêm ảnh</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Giá</span>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                        <span className="input-group-text">vnd</span>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label for="floatingTextarea2">Mô tả</label>
                    </div>
                    <div>
                        <button style={{ float: "right" }} type="button" class="btn btn-danger col-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Thêm phòng
                        </button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm phòng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="row g-2">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingInputGrid" placeholder="Tên phòng" />
                                            <label htmlFor="floatingInputGrid">Tên phòng</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <select className="form-select" id="floatingSelectGrid">
                                                <option selected>Loại phòng</option>
                                                <option value={1}>Đơn</option>
                                                <option value={2}>Vip</option>
                                                <option value={3}>Tổng thống</option>
                                            </select>
                                            <label htmlFor="floatingSelectGrid">Chọn loại phòng</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" class="btn btn-danger">Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <Link to={"/host"}>
                            <button className="btn btn-outline-secondary" style={{ color: "black", marginRight: "1%" }} >Hủy</button>
                        </Link>
                        <button type="submit" className="btn btn-outline-danger" style={{ color: "black" }}>Thêm nhà</button>
                    </div>
                </form>

            </div>


        </div>
    )

}


export default Create;