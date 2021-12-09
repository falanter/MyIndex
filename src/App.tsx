import React from 'react';
import styled from 'styled-components'
import {Routes,Route,Navigate, Link} from 'react-router-dom'
import Nav from 'components/Nav';
const Con=styled.div`
  display: flex;
  margin-top: 50px;
`;
const ConList=styled.div`
  display: flex;
  flex-direction: column;
`;
const LinkButton=styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-top: 20px;
  
  button{
    padding: 10px;
    cursor: pointer;
    border: none;
    border-bottom-left-radius: 5px;
    border-top-left-radius:5px;
    background-color: #40a9ff;
    color: #fff;
    /* height: 20px; */
  }
  .homeRight{
    width:0;
    height:0;
    border:30px solid;
    border-color: transparent transparent transparent #63b6fa;
    transform:translateX(-10px);
    transition: all 250ms;
    opacity: 0;
    /* transform: rotate(90deg); */
    /* transform:translateX(100px); */
  }
  &:hover{
    button{
      background-color: #63b6fa;
    }
    .homeRight{
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
const AButton=styled.a`
  margin-top: 20px;
  button{
    padding: 10px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    &:hover{
      color: #40a9ff;
      background-color:#ECF5FF;
      border-color: #40a9ff;
    }
  }
`;

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
function Home(){
  return (
    <div>
      <h2>Home</h2>
        <LinkButton to="/project"><button>To Project</button><div className="homeRight"></div></LinkButton>
    </div>
  );
}
function About(){
  return <h2>about</h2>;
}
function User(){
  return <h2>user</h2>;
}
function Project(){
  return (
    <ConList>
      <h2>project</h2>
      <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/blog"><button>多人博客-Vue2</button></AButton>
      <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/yinxiangyun"><button>印象云笔记-Vue2</button></AButton>
      <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/gulu-ui-website-1"><button>样式组件-Vue3</button></AButton>
      <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/react-image-upload"><button>图床-React</button></AButton>
      <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/morney-1"><button>旺财记账-React</button></AButton>
    </ConList>
  );
}
function NoMatch(){
  return <h2>404</h2>;
}
export default App;
