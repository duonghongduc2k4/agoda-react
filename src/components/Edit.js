import axios from "axios";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Edit() {
    // const history = useNavigate();
    // const [name, setName] = useState([]);
    // const [price, setPrice] = useState([]);
    // const [stock, setStock] = useState([]);
    // const [description, setDescription] = useState([]);
    // const params = useParams();

    // async function getDetail() {
    //     const response = await axios.get(
    //         `http://localhost:3001/products/${params.id}`
    //     );
    //     setName(response.data.name)
    //     setPrice(response.data.price)
    //     setStock(response.data.stock)
    //     setDescription(response.data.description)
    // }

    // useEffect(() => {
    //     getDetail();
    // }, []);

    // async function editClothe(e) {
    //     e.preventDefault()
    //     const response = await axios.put(`http://localhost:3001/products/${params.id}`,
    //         {
    //             name: name,
    //             price: price,
    //             stock: stock,
    //             description: description
    //         }
    //     );
    //     if (response.data) {
    //         history('/home');
    //     }
    // }
    return (
        // <div className="container">
        //     <h1>Cap nhat san pham</h1>
        //     <form onSubmit={editClothe}>
        //         <div class="mb-3">
        //             <label for="name" class="form-label">Ten san pham</label>
        //             <input type="text" class="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        //         </div>
        //         <div class="mb-3">
        //             <label for="price" class="form-label">Gia</label>
        //             <input type="number" class="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        //         </div>
        //         <div class="mb-3">
        //             <label for="stock" class="form-label">Ton kho</label>
        //             <input type="text" class="form-control" id="stock" value={stock}onChange={(e) => setStock(e.target.value)} />
        //         </div>
        //         <div class="mb-3">
        //             <label for="description" class="form-label">Mo ta</label>
        //             <input type="text" class="form-control" id="desciption" value={description} onChange={(e) => setDescription(e.target.value)} />
        //         </div>
        //         <button type="submit" class="btn btn-primary">Submit</button>
        //     </form>
        // </div>

        <>
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
                                            <a class="nav-link" aria-current="page" href="/home" style={{ color: "black" }}>Về trang chủ</a>
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
                            Chỉnh sửa nhà đang cho thuê
                        </h1>
                    </div>
                    <form className="row g-3" >
                        <div className="col-md">
                            <label htmlFor="inputName" className="form-label">Tên nhà</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Nhà 1" />
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
                        <div class="input-group">
                            <span class="input-group-text">Phòng</span>
                            <input type="text" aria-label="room" class="form-control" placeholder="Tên phòng" />
                            <div className="col-md">
                                <div className="form-floating">
                                    <select className="form-select" id="floatingSelectGrid">
                                        <option selected></option>
                                        <option value={1}>Đơn</option>
                                        <option value={2}>Vip</option>
                                        <option value={3}>Tổng thống</option>
                                    </select>
                                    <label htmlFor="floatingSelectGrid">Chọn loại phòng</label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="formFileMultiple" class="form-label">Ảnh</label>
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

                        <div className="col-12">
                            <Link to={"/host"}>
                                    <button className="btn btn-outline-secondary" style={{ color: "black", marginRight: "1%" }} >Hủy</button>
                            </Link>
                            <button type="submit" className="btn btn-outline-danger" style={{ color: "black" }}>Xác nhận</button>
                        </div>

                    </form>

                </div>


            </div>
        </>
    )

}

export default Edit;