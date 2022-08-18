import React from 'react';
import { Link } from "react-router-dom";

export const MenuLeft = () => {

    const handleClick = event => {
        event.currentTarget.classList.toggle('bg-salmon');
      }
  return (
    <div>
        <div className='dashborad-links'>
                        <ul>
                            <li><a href='#' className="dash-board-link"><span className='links-icon'><i className="fa-solid fa-user"></i></span><span className='links-name'>Profile</span></a></li>
                            <li><a href='#' className="dash-board-link"><span className='links-icon'><i className="fa-solid fa-box-archive"></i></span><span className='links-name'>inventory</span></a></li>
                            <li><a href='#' className="dash-board-link"><span className='links-icon'><i className="fa-solid fa-briefcase"></i></span><span className='links-name'>my collection</span></a></li>
                            <li><a href='#' className="dash-board-link"><span className='links-icon'><i className="fa-solid fa-lines-leaning"></i></span><span className='links-name'>activity</span></a></li>
                            <li><a href='#' className="dash-board-link"><span className='links-icon'><i className="fa-solid fa-microscope"></i></span><span className='links-name'>auctions</span></a></li>
                            <li><a href='#' className="dash-board-link"><span className='links-icon'><i className="fa-solid fa-house-chimney-user"></i></span><span className='links-name'>physical merch</span></a></li>
                            <li><a href='#' className="dash-board-link"><span className='links-icon'><i className="fa-solid fa-heart p-0" onClick={handleClick}></i></span><span className='links-name'>wishlist</span></a></li>
                            <li><a href='#' className="dash-board-link"><span className='links-icon'><i className="fa-solid fa-dollar-sign"></i></span><span className='links-name'>transactions</span></a></li>
                            <li><a href='#' className="dash-board-link"><span className='links-icon'><i className="fa-solid fa-gear"></i></span><span className='links-name'>settings</span></a></li>
                        </ul>
                      <div className="dash-board-balance">
                        <p>Your Balance</p>
                        <h4>9.04 ETH</h4>
                        <button className="top-blance-button">Top up Balance</button>
                    </div>
                    </div>
    </div>
  )
}
