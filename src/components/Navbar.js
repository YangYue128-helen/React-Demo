import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../style/cardStyle.css';

class Navbar extends Component {
  render() {
    return (
      <AppBar position="static" >
        <Toolbar className='black-navbar'>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="50" height="50" viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill="#0040FF" stroke="none">
            <path d="M584 1511 c-104 -47 -152 -189 -97 -281 48 -78 103 -112 182 -113
            120 -1 211 88 211 205 -1 148 -161 250 -296 189z"/>
            <path d="M1254 1516 c-88 -38 -127 -106 -138 -239 -15 -191 -142 -335 -336
            -383 l-55 -14 48 4 c41 3 47 1 47 -15 0 -12 7 -19 20 -19 25 0 27 27 3 33 -14
            4 -13 5 4 6 12 0 24 -5 26 -11 3 -7 6 -1 6 15 1 15 6 27 12 27 5 0 8 -4 4 -9
            -3 -5 -1 -12 5 -16 6 -4 4 -17 -6 -36 -8 -17 -13 -36 -10 -42 2 -7 5 -4 5 6 1
            9 6 17 12 17 5 0 7 5 4 10 -3 6 -2 10 4 10 5 0 13 10 17 22 14 44 78 120 130
            153 73 47 153 72 254 80 108 9 165 42 204 120 40 78 30 156 -27 222 -58 66
            -158 91 -233 59z"/>
            <path d="M1285 901 c-34 -15 -172 -164 -179 -193 -10 -42 8 -72 90 -153 114
            -111 138 -112 250 -2 75 72 101 119 90 160 -3 12 -43 59 -88 104 -85 84 -120
            103 -163 84z"/>
            <path d="M577 856 c-21 -13 -43 -29 -50 -36 -7 -7 4 -3 24 8 40 24 54 28 44
            12 -10 -16 21 -12 35 5 11 14 6 36 -8 34 -4 0 -24 -11 -45 -23z m48 4 c3 -5 1
            -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z"/>
            <path d="M555 810 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"/>
            </g>
          </svg>
          <Typography variant="h5" style={{marginLeft: "5px"}}>
            Openiiot Dashboard 
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  
}

export default Navbar;