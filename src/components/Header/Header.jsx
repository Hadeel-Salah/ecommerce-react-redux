import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import logo from "../../assets/images/res-logo.png";
import { linksData } from '../../mockdata/linksData';
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';
import './header.css';

export const Header = () => {

    const menuRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }



    return (
        <header className='header'>
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo mt-4">
                        <Link to="/home">  <img src={logo} alt="logo" /> </Link>
                        <h5>Fast Food</h5>
                    </div>

                    <div className='navigation' ref={menuRef}>
                        <div className='nav__menu d-flex align-items-center gap-5'>
                            {linksData.map((item, index) => (
                                <NavLink
                                    to={item.path}
                                    key={index}
                                    className={(navClass) =>
                                        navClass.isActive ? "active__menu" : ""
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            ))}

                        </div>
                    </div>
                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon">
                            <i class="ri-shopping-basket-line" onClick={toggleCart}></i>
                            <span className="cart__badge">{totalQuantity}</span>
                        </span>

                        <span className="user">
                            <Link to="/login">
                                <i className="ri-user-line"></i>
                            </Link>
                        </span>

                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>

            </Container>
        </header >
    );
};

