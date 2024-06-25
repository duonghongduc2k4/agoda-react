// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useFormik, validateYupSchema } from "formik";
// import "../css/create.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'
// import Swal from "sweetalert2";
// import Footer from "./Footer";
// function Edit() {
//     const navigate = useNavigate();
//     const [image, setImage] = useState([]);
//     const [typeRooms, setTypeRooms] = useState([]);
//     const params = useParams();
//     const [existingImage, setExistingImage] = useState([]);

//     // Fetch type rooms data
//     useEffect(() => {
//         async function getTypeRooms() {
//             try {
//                 const response = await axios.get("http://localhost:8080/api/type-room");
//                 setTypeRooms(response.data);
//             } catch (error) {
//                 console.error("Error fetching type rooms:", error);
//             }
//         }

//         getTypeRooms();
//     }, []);

//     // Fetch existing data for editing
//     useEffect(() => {

//         async function getExistingData() {
//             try {
//                 const response = await axios.get(
//                     `http://localhost:8080/api/house/${params.id}`
//                 );
//                 const existingData = response.data;
//                 setExistingImage(existingData.image);


//                 // Set the form values for editing
//                 formEdit.setValues({
//                     name: existingData.name,
//                     address: existingData.address,
//                     description: existingData.description,
//                     price: existingData.price,
//                     numberOfBedRoom: existingData.numberOfBedRoom,
//                     numberOfBathRoom: existingData.numberOfBathRoom,
//                     accountId: existingData.accountId,
//                     rooms: existingData.rooms.map((room) => ({
//                         name: room.name,
//                         typeId: room.typeId,
//                     })),


//                 });
//             } catch (error) {
//                 console.error("Error fetching existing data:", error);
//             }
//         }

//         getExistingData();
//     }, [params.id]);

//     // Form submission logic using Formik
//     const formEdit = useFormik({
//         initialValues: {
//             name: "",
//             address: "",
//             description: "",
//             price: "",
//             numberOfBedRoom: "",
//             numberOfBathRoom: "",
//             accountId: "3", // Set default accountId or handle dynamically
//             rooms: [{ name: "", typeId: "" }],
//         },
//         onSubmit: async (values) => {
//             try {
//                 const formData = new FormData();
//                 formData.append("name", values.name);
//                 formData.append("address", values.address);
//                 formData.append("description", values.description);
//                 formData.append("price", values.price);
//                 formData.append("numberOfBedRoom", values.numberOfBedRoom);
//                 formData.append("numberOfBathRoom", values.numberOfBathRoom);
//                 formData.append("accountId", 3);
//                 for (let i = 0; i < image.lengthngth; i++) {
//                     formData.append("image", image[i]);
//                 }

//                 values.rooms.forEach((room, index) => {
//                     formData.append(`rooms[${index}].name`, room.name);
//                     formData.append(`rooms[${index}].typeId`, room.typeId);
//                 });


//                 await axios.put(
//                     `http://localhost:8080/api/house/${params.id}`,
//                     formData,
//                     {
//                         headers: { "Content-Type": "multipart/form-data" },
//                     }
//                 );

//                 // Navigate to home page after successful submission
//                 navigate("/home");
//             } catch (error) {
//                 console.error("Error submitting form:", error);
//             }
//         },
//     });


//     const handleImageChanges = (event) => {
//         const files = Array.from(event.target.files);
//         setImage([...image, ...files]);
//     };

//     const handleRemoveImage = (index) => {
//         const updatedImages = [...image];
//         updatedImages.splice(index, 1);
//         setImage(updatedImages);
//     };


//     const [rooms, setRooms] = useState([{ name: '', typeId: '' }]);
//     const handleAddRoom = () => {
//         setRooms([...rooms, { name: '', typeId: '' }]);
//     };

//     return (
//         <div>

//             <div className="container w-50" style={{ alignContent: "center" }}>
//                 <div style={{ textAlign: "center" }}>
//                     <h1>
//                         Sửa thông tin nhà đang cho thuê
//                     </h1>
//                 </div>
//                 <form className="row g-3" onSubmit={formEdit.handleSubmit}>
//                     {existingImage.length > 0 && (
//                         <div>
//                             <div className="row">
//                                 {existingImage.map((image, index) => (
//                                     <div key={index} className="image">
//                                         <div className="position-relative">
//                                             <img
//                                                 src={image.url} // Sử dụng URL ảnh từ database
//                                                 alt={`Image ${index}`}
//                                                 className="img-fluid"
//                                             />
//                                         </div>
//                                         <div>
//                                             <FontAwesomeIcon
//                                                 icon={faRectangleXmark}
//                                                 onClick={() => handleImageChanges(index)}
//                                                 style={{ width: "100%" }}
//                                             />
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </form>
//             </div>
//         </div>
//     )
// }


// export default Edit;