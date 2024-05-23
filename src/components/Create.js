import axios from "axios";
import { Button } from "bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import SideBar from "./sidebar/sidebar";
import Footer from "./footer";

function Create() {


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ boxShadow: " 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 20px 0 rgba(0, 0, 0, 0.19)"}}>
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

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <SideBar />
            </nav>

            <div className="container w-50 " style={{ alignContent: "center" , marginTop:"2%"}}>

                <div style={{textAlign:'center' , marginBottom:"5%"}}>
                    <h1>
                        Thêm nhà muốn cho thuê
                    </h1>
                </div>

                <form className="row g-3" >

                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Tên nhà</label>
                        <input type="text" className="form-control" id="inputName" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Số phòng ngủ</label>
                        <select id="inputState" className="form-select">
                            <option selected>Chọn số phòng</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Số phòng tắm</label>
                        <select id="inputState" className="form-select">
                            <option selected>Chọn số phòng</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="inputRoomName" className="form-label">Tên phòng</label>
                        <input type="text" className="form-control" id="inputRoomName" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputRoomKind" className="form-label">Loại phòng</label>
                        <select id="inputRoomKind" className="form-select">
                            <option selected>Chọn loại phòng</option>
                            <option>Đơn</option>
                            <option>Đôi</option>
                            <option>VIP</option>
                            <option>Tổng thống</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">Địa chỉ</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-md-6">
                        <label for="formFileMultiple" class="form-label">Ảnh</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPrice" className="form-label" placeholder="VND">Giá</label>
                        <input type="double" className="form-control" id="inputPrice" />
                    </div>
                    <div class="form-floating" className="col-md-6">
                        <label for="floatingTextarea">Mô tả</label>
                        <textarea class="form-control" placeholder="Mô tả của ngôi nhà" id="floatingTextarea"></textarea>
                    </div>
                    <div className="col-12">
                        <Link to={"/host"}>
                            <button className="btn btn-outline-secondary" style={{ color: "black", marginRight: "1%" }} >Hủy</button>
                        </Link>
                        <button type="submit" className="btn btn-outline-danger" style={{ color: "black" }}>Thêm nhà</button>
                    </div>
                </form>

            </div>
            <div><Footer /></div>

        </div>
    )

}


export default Create;