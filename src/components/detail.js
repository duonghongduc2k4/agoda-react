// import Navbar from "./navbar";
// import "../css/detail.css"
// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { DateRangePicker } from "react-date-range";
// import format from "date-fns/format"
// import { addDays, differenceInDays } from "date-fns"
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css';
// import Footer from "./Footer";
// import Swal from "sweetalert2"; // theme css file
// import moment from 'moment';
// function Detail() {
//   const navigate = useNavigate();
//   const [house, setHouse] = useState({});
//   const idAccount = sessionStorage.getItem('account_id');
//   const price = house.price;
//   const [account, setAccount] = useState({});
//   const params = useParams();


  
//   async function getAccount() {
//     const res = await axios.get(`http://localhost:8080/api/account/${idAccount}`)
//     console.log(res)
//     setAccount(res.data);
//   }
  
//   useEffect(() => {
//     getAccount()
//   }, []);


//   const role = sessionStorage.getItem('role');
//   const username = sessionStorage.getItem('username');
//   const a = Number(house.price);
//   const formattedNumber = a.toLocaleString();
//   // console.log(house.price)

//   function formatCurrency(amount) {
//     return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
//   }

  



//   async function getHouse() {
//     const res = await axios.get(`http://localhost:8080/api/house/${params.id}`)
//     console.log(house.name)
//     setHouse(res.data);

//   }
//   useEffect(() => {
//     getHouse()
//   }, []);
//   const handleViewDirections = () => {
//     const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(house.address)}`;
//     window.open(googleMapsUrl, '_blank');
//   };



//   const [range, setRange] = useState([{
//     startDate: new Date(),
//     endDate: addDays(new Date(), 7),
//     key: 'selection'
//   }]);

//   const [open, setOpen] = useState(false)

//   const refOne = useRef(null);

//   useEffect(() => {
//     document.addEventListener("keydown", hideOnEscape, true)
//     document.addEventListener("click", hideOnClickOutside, true)

//   }, []);

//   const hideOnEscape = (e) => {
//     console.log(e.key)
//     if (e.key === "Escape") {
//       setOpen(false)
//     }
//   }

//   const hideOnClickOutside = (e) => {
//     if (refOne.current && !refOne.current.contains(e.target)) {
//       setOpen(false)
//     }
//   }


//   async function BookHouse(e) {
//     e.preventDefault();

//     const dateStart = new Date(range[0].startDate);
//     const dateEnd = new Date(range[0].endDate);
//     const oneDay = 24 * 60 * 60 * 1000; // Số milliseconds trong một ngày
//     const diffDays = Math.round(Math.abs((dateStart - dateEnd) / oneDay)) + 1;
//     const yearStart = dateStart.getFullYear();
//     const monthStart = dateStart.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
//     const dayStart = dateStart.getDate();

//     const yearEnd = dateEnd.getFullYear();
//     const monthEnd = dateEnd.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
//     const dayEnd = dateEnd.getDate();

//     console.log(price * diffDays)

//     const date = `${yearStart}-${monthStart}-${dayStart} -- ${yearEnd}-${monthEnd}-${dayEnd}`;
//     const response = await axios.post('http://localhost:8080/api/order', {
//       date: date,
//       idHouse: params.id,
//       total: diffDays,
//       revenue: price * diffDays,
//       idAccount: idAccount,
//     })

//     const Toast = Swal.mixin({
//       toast: true,
//       position: "top-end",
//       showConfirmButton: false,
//       timer: 1500,
//       timerProgressBar: true,
//       didOpen: (toast) => {
//         toast.onmouseenter = Swal.stopTimer;
//         toast.onmouseleave = Swal.resumeTimer;
//       }
//     });
//     Toast.fire({
//       icon: "success",
//       title: "Đặt thành công"
//     }).then(() => {
//       navigate("/home")
//       // Navigate to home page after successful submission
//     });
//   }

//   function formatPrice(price) {
//     return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
//   }
//   return (
//     <div>

//       <div className="header" style={{ position: "sticky", top: "0", zIndex: "1000" }}>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary"
//           style={{ boxShadow: " 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 20px 0 rgba(0, 0, 0, 0.19)" }}>
//           <div className="container-fluid">
//             <div className="navbar w-100">
//               <a className="navbar-brand" href="/home">Agoda</a>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                 data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
//                 aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon" />
//               </button>
//               <ul class="nav nav-underline">
//                 <li class="nav-item">
//                   <a class="nav-link active" aria-current="page" href="/home">Trang chủ</a>
//                 </li>

//               </ul>
//               <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
//                 <div className="navbar-nav ">
//                   <div className="dropdown" >
//                     {role === 'admin' || role === 'host' ? (
//                       <div className="btn-group dropstart">
//                         <div>
//                           <button type="button" className="btn btn-secondary dropdown-toggle"
//                             data-bs-toggle="dropdown" aria-expanded="false">
//                             {username}
//                           </button>
//                           <ul className="dropdown-menu">
//                             <li><a className="dropdown-item" href="/host">Chủ nhà</a></li>
//                             <li><a className="dropdown-item" href="/create">Đăng nhà</a>
//                             </li>
//                             <li><a href={`/history/${idAccount}`} className="dropdown-item">Lịch
//                               sử
//                               đặt</a></li>
//                             <li><a className="dropdown-item" href="#">Chi tiết tài khoản</a>
//                             </li>
//                           </ul>
//                         </div>

//                       </div>
//                     ) : (
//                       <div>
//                         <button type="button" className="btn btn-secondary dropdown-toggle"
//                           data-bs-toggle="dropdown" aria-expanded="false">
//                           {username}
//                         </button>
//                         <ul class="dropdown-menu">
//                           <li><a href={`/history/${idAccount}`} class="dropdown-item">Lịch sử
//                             đặt</a>
//                           </li>
//                           <li><a class="dropdown-item" href="#">Chi tiết tài khoản</a></li>
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>

//       <div class="blog-single">
//         <div class="container-fluid " >
//           <div class="row justify-content-center">
//             <div class="col-lg-8 m-15px-tb">
//               <article style={{ overflow: "visible" }} className="article">
//                 <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//                   <div className="carousel-inner">
//                     {house.images?.map((item, index) => (
//                       <div className={`carousel-item ${index === 0 ? 'active' : ''}`}
//                         style={{ height: '500px' }}>
//                         <img src={process.env.PUBLIC_URL + '/img/' + (item.nameImage)}
//                           className="d-block w-100 h-100 object-fit-cover"
//                           alt={`Carousel Image ${index + 1}`} />
//                       </div>
//                     ))}
//                   </div>
//                   <button className="carousel-control-prev" type="button"
//                     data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                   </button>
//                   <button className="carousel-control-next" type="button"
//                     data-bs-target="#carouselExampleControls" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                   </button>
//                 </div>
//               </article>
//               <div className="test" style={{ display: "flex" }} >
//                 <div className="test1" >
//                   <h1>{house.name}</h1>

//                   <h2>Giá: {formattedNumber}(VND)</h2>
//                   <div className="article-content">
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <h5 style={{ marginRight: '8px' }}>Địa chỉ: {house.address}</h5>

//                       <a style={{ marginBottom: '13px', marginLeft: '13px' }}
//                         onClick={handleViewDirections}>Xem chỉ dẫn</a>
//                     </div>
//                     <h5>Số phòng ngủ : {house.numberOfBedRoom}</h5>
//                     <h5>Số phòng tắm : {house.numberOfBathRoom}</h5>

//                     <h5>Số điện thoại   : {account.phoneNumber}</h5>



//                     <h5>Ngày đăng nhà : {moment(house.createdAt).format('DD/MM/YYYY  HH:mm:ss')}</h5>

//                   </div>
//                 </div>
//                 <div className="test2" style={{ paddingLeft: '14%', paddingTop: '2%', borderRadius: '10px' }}>

//                   <form onSubmit={BookHouse}>
//                     <div className="calendarWrap">
//                       <p>Ngày bắt đầu -- Ngày kết thúc: </p>
//                       <input
//                         value={`${format(range[0].startDate, "yyyy-MM-dd")} -- ${format(range[0].endDate, "yyyy-MM-dd")}`}
//                         className="inputBox"
//                         onClick={() => setOpen(open => !open)}
//                       />
//                       <div ref={refOne}>
//                         {open &&
//                           <DateRangePicker
//                             onChange={item => setRange([item.selection])}
//                             editableDateInputs={true}
//                             moveRangeOnFirstSelection={false}
//                             ranges={range}
//                             months={2}
//                             direction="horizontal"
//                             className="calendarElement trick-lord-fix-index"
//                           />
//                         }
//                       </div>
//                       {range[0].startDate && range[0].endDate && (
//                         <p>
//                           Số
//                           ngày: {differenceInDays(range[0].endDate, range[0].startDate) + 1}
//                         </p>
//                       )}
//                       <p>Tổng
//                         tiền: {formatPrice((differenceInDays(range[0].endDate, range[0].startDate) + 1) * price)}</p>
//                     </div>
//                     <input type="submit" value="Đặt nhà" />
//                   </form>
//                 </div>
//               </div>
//               <div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   )
// }

// export default Detail;