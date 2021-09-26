import React from 'react';
import './Members.css';

const Members = (props) => {
    const { name, img, age, spouse, country, salary } = props.member;
    return (
        <div className="member-container">
            <div className="card">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="information_card">
                    <small>Name:{name}</small><br/>
                    <small>Age:{age}</small><br/>
                    <small>Spouse:{spouse}</small><br/>
                    <small>Country:{country}</small><br/>
                    <small>Salary:{salary}</small><br/>
                    <br/>


                    <button
                    onClick={() => props.handleAddToCart(props.member)}
                    className="btn-salary"
                ><i class="fas fa-cart-plus"></i>
                    Add Salary</button>

                    <div className="social-icon">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;