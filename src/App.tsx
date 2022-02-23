import React from 'react';
import styled from 'styled-components'
import {Routes,Route,Navigate} from 'react-router-dom'
import Nav from 'components/Nav';
import Home from 'view/Home';
import About from 'view/About';
import User from 'view/User';
import Project from 'view/Project';
const Con=styled.div`
  display: flex;
  padding:20px;
  background-image: linear-gradient(to top right, #CFD9E5, #D4DEEA);
  height:100%;
  @media(max-height:700px){
    height:700px;
  }
`

function App() {
  return (
    <Con>
      <Nav />
      <Routes>
        <Route path="/"element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/user"  element={<User/>} />	
            <Route path="/project" element={<Project/>} />								
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </Con>
  );
}

function NoMatch(){
  return <h2>404</h2>;
}
export default App;
