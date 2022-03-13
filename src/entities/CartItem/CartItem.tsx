import './CartItem.css';

export function CartItem({ img, title, price }: any) {
    return (
        <li className="cart-item">
            <div className="cart-item__content-wrapper">
                <img className="cart-item__pic" src={img} alt="Товар в корзине"/>
                <div className="cart-item__title-wrapper">
                    <h3 className='cart-item__title'>
                        {title}
                    </h3>
                    <p className="cart-item__product-description">
                            Тонкое тесто, 30 см
                    </p>
                </div>
            </div>
            <div className="cart-item__price-wrapper">
                <div className="cart-item__action-wrapper">
                    <button
                        className="cart-item__action-btn cart-item__action-btn_type_minus"
                        aria-label="Decrement"
                        type="button"
                    />
                    <p className="cart-item__amount">1</p>
                    <button
                        className="cart-item__action-btn cart-item__action-btn_type_plus"
                        aria-label="Decrement"
                        type="button"
                    />
                </div>
                <p className="cart-item__price">
                    {price} ₽
                </p>
                <button className="cart-item__action-btn cart-item__action-btn_type_remove" type="button" aria-label="Remove item"/>
            </div>
        </li>
    )
}