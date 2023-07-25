
import React from 'react'

const Card = ({ amount, checkoutHandler }) => {
    return (
        <div>
            ₹{amount}
            <button onClick={() => checkoutHandler(amount)} class="btn btn-primary">Buy Now</button>
        </div>
    )
}

export default Card