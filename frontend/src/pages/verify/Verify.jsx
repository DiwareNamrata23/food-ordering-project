import React, { useContext, useEffect } from 'react'
import'./Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Verify = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
    
    const verifyPayment = async () => {
        console.log("Verifying payment for orderId:", orderId);
        try {
            const response = await axios.post(url + "/api/order/verify", { success, orderId });
            console.log("Response from /verify API:", response.data);
    
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (err) {
            console.error("Verification error:", err);
            navigate("/");
        }
    };
    
    useEffect(() => {
        verifyPayment();
     },[] )
  return (
    <div className='verify'>
        <div className="spinner"></div>

    </div>
  )
}

export default Verify
