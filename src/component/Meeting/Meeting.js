
import React, { useEffect } from 'react';
import { useState } from 'react';
import Members from '../Member/Members';
import "./Meeting.css";
import Cart from '../Cart/Cart';

const Meeting = () => {
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("./president.JSON")
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    const handleAddToCart = (president) => {
        const newcart = [...cart, president];
        setCart(newcart);
    }
    return (
        <div className="row">
            <div className="col-lg-9 meeting">
                {
                    members.map(member => <Members
                        key={member.id}
                        member={member}
                        handleAddToCart={handleAddToCart}
                    ></Members>)
                }
            </div>

            <div className="col-lg-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meeting;