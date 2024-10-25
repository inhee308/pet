import React, { useState, useEffect} from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
import "./productpage.scss";
import { SiDatadog } from "react-icons/si";


const ProductPage = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const [product,setProduct]=useState(null);

    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${id}`)
        .then((result)=>{
            setProduct(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id]);
    console.log(product)
    if(product===null){
        return <h1>상품정보를 받고 있습니다.</h1>
    }
    return (
        <div className='productpageWrap'>
            <button className='back-btn' onClick={()=>navigate(-1)}>이전화면</button>
            <div className="image-box">
                <img src={process.env.PUBLIC_URL + product.imageUrl} alt={product.name} />
            </div>
            <div className="profile-box">
            <SiDatadog className='icon' />
            <span className='product-seller'>{product.seller}</span>
            </div>
            <div className="contents-box">
                <div className="name">{product.name}</div>
                <div className="price">{product.price}</div>
                <div className="creatAt">2024.10.24</div>
                <div className="description">{product.description}</div>
            </div>
        </div>
    );
};

export default ProductPage;