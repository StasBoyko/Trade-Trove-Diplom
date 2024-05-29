import React, { useEffect, useState } from 'react';
import { createOrderReq } from '../../serverFunction/order'; // Импортируйте функцию для отправки данных заказа
import { getPostsByUserIdReq } from '../../serverFunction/productRequest';
import { getByUserIdBasketPostsReq } from '../../serverFunction/basketPostReq';

const CheckoutPage = () => {
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)
    const [basketPosts,setBasketPosts]=useState([])
    const [TotalAmount,setTotalAmount]=useState();
  const [userFormData, setUserFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    cityKode: '',
    address: ''
  });

  const handleInputChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    getByUserIdBasketPostsReq(localStorage.getItem('userID'),setBasketPosts,setIsLoading,setIsError)
    for (let i = 0; i < basketPosts.length; i++) {
        setTotalAmount =+ basketPosts.prise[i];
    }
    console.log('total allamaunt : ' + TotalAmount);
    console.log('basket posts : ' + basketPosts);
},[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderProductData = {
      paymentType: 'card', // Замените на реальное значение
      totalAmount: TotalAmount, 
      products: [basketPosts]
    };
    try {
      const response = await createOrderReq(userFormData, orderProductData);
      console.log('Order created:', response);
      // Redirect or show success message
    } catch (error) {
      console.error('Error creating order:', error);
      // Show error message
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={userFormData.firstName} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={userFormData.lastName} onChange={handleInputChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={userFormData.city} onChange={handleInputChange} required />
        </div>
        <div>
          <label>City Kode:</label>
          <input type="text" name="cityKode" value={userFormData.cityKode} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={userFormData.address} onChange={handleInputChange} required />
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
