import Order from '../data/order.js';

export const createOrder = async (req, res) => {
  try {
    const { userId, firstName, lastName, paymentType, city, cityKode, address, totalAmount, products } = req.body;

    // Логика фейковой оплаты
    let isPaid = false;
    if (paymentType === 'card') {
      // Фейковая проверка карты и списание
      isPaid = true;
    }

    const newOrder = new Order({
      userId,
      firstName,
      lastName,
      paymentType,
      isPaid,
      city,
      cityKode,
      address,
      totalAmount,
      products
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};
