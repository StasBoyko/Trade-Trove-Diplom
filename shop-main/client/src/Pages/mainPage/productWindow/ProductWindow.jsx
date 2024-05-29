// ProductWindow.jsx
import React from 'react';
import './ProductWindowCss.css';

const ProductWindow = () => {
    return (
        <div className="product-window">
            <div className="categories">
                <h2>Categories</h2>
                {/* Список категорій товарів */}
                <ul>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    {/* Додайте інші категорії за потребою */}
                </ul>
            </div>
            <div className="products">
                <h2>Featured Products</h2>
                {/* Список товарів */}
                <ul>
                    <li>
                        <img src="product-image.jpg" alt="Product" />
                        <p>Product Name</p>
                        <p>$100</p>
                    </li>
                    <li>
                        {/* Додайте інші товари за потребою */}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductWindow;
