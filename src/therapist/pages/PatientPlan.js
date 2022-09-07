import React from "react";
import {
  } from '@chakra-ui/react';
import SideNav from '../components/SideNav';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { Link, Outlet } from 'react-router-dom';

function PatientPlan () {
    return (
      <>
        <SideNav />
        <BottomNav />
        <Link to="/therapisthome">
          <Header />
        </Link>
      </>
    );
  }
  
  export default PatientPlan;