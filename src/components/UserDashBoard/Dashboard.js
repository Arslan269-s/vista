import React, { useState, useEffect } from "react";
import { Profile } from "../UserDashBoard/Profile";


import { Routes, Route } from "react-router-dom";


import AOS from 'aos';
import { MenuLeft } from "./MenuLeft";
import { Inventory } from "./Inventory";
import { Collections } from "./Collections";
import { Activity } from "./Activity";
import { PhysicalMerch } from "./PhysicalMerch";
import { Wishlist } from "./Wishlist";
import { AuctionsDashboard } from "./AuctionsDashboard";
import { Transaction } from "./Transaction";

export const Dashboard = () => {
    useEffect(() => {
        AOS.init({
        });
        }, []);
        const handleClick = event => {
          event.currentTarget.classList.toggle('bg-salmon');
        }
  return (
    <>
    <div className='user-dash-board pt-2 padding-bottom'>
        <div className='container'>
            <div className='row equal gx-5'>
                <div className='col-md-9 col-sm-12 col-lg-3 dashborad-main'>
                    <MenuLeft />
                    
                </div>
                <div className='col-md-9 col-sm-12 col-lg-9 dashborad-main2 '>
                  
             <Routes>
            <Route path="/" element={<><Profile /> </>} />  
            {/* <Route path="inventory" element={<><MenuLeft /> <Inventory /> </>} />   */}
             
            </Routes>
                      
                  {/* <Inventory /> */}
                 {/* <Collections /> */}
                 {/* <Activity /> */}
                 {/* <PhysicalMerch /> */}
                 {/* <Wishlist /> */}
                 {/* <AuctionsDashboard /> */}
                 {/* <Transaction /> */}
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}
