import React from 'react';
import { Link } from 'react-router-dom';

const Card1 = ({data1, i}) => {
    return (
        <div className="newList">
            <Link to="">
                <div className="imgBox">
                    <img src={process.env.PUBLIC_URL+data1.img} alt="" />
                </div>
                <div className="storeBox">
                    <p>{data1.store}</p>
                </div>
                <div className="addressBox">
                    <p>{data1.address}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card1;