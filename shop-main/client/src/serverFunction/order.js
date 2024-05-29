import axios from 'axios'; /// это файл чтобы отправлять заказ на сервер

const url = 'http://localhost:5000/tradeTrove';

export async function createOrderReq(orderData) {
  try {
    const res = await axios.post(`${url}/orders/create`, orderData);
    return res.data;
  } catch (e) {
    alert(e.response.data.message);
  }
}