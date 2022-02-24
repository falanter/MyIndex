import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components'
import perIcon from '../assets/icon.jpg'
const NavWrapper=styled.nav`
  /* border: 1px solid blue; */
  display:flex;
  flex-direction: column;
  z-index:5;
  padding-top:20px;
  box-shadow: 20px 0 50px rgba(0,0,0,0.25);
  line-height: 24px;
  /* margin-right: 20px; */
  background-image: linear-gradient(to top right, #D9E5F3, #eff);
  border-radius:20px;
  width:250px;
  /* height: 300px; */
  ul{
    display: flex;
    flex-direction: column;
    padding:10px;
    li{
        /* width: 33.333%; */
        text-align: center;
        height:30px;
        /* border:1px solid #ccc; */
        /* border:none; */
        // box-shadow:match ? "1px -1px 3px rgba(0,0,0,0.25)":"",
        a{
            padding: 3px;
            display: flex;
            /* flex-direction: column; */
            justify-content:space-around;
            align-items: center;
            border-radius:12px;
        }
    }
  }
`;
const PerWrapper=styled.nav`
  height:250px;
  display:flex;
  flex-direction: column;
  align-items:center;
  text-align:center;
  img{
    width:100px;
    height:100px;
    border-radius:50%;
  }
  h1{
    height:25px;
    color:#555;
    width:200px;
    font-size:20px;
    margin-top:5px;
    margin-bottom:0;
  }
  h2{
    font-size:16px;
    color:#838282;
    height:20px;
  }
  div{
    color:#fff;
    font-size:14px;
    margin:10px 0 20px 0;
    width:150px;
    height:30px;
    background:#6ba9f5;
    border-radius:10px;
    line-height:30px;
  }
`
const Nav = () => {
    return (
        <NavWrapper>
          <ul>
              <li>
                  <CustomLink to="/home">
                      home
                  </CustomLink>
              </li>
              <li>
                  <CustomLink to="/about">
                      about
                  </CustomLink>
              </li>
              {/* <li>
                  <CustomLink to="/user">
                      user
                  </CustomLink>
              </li> */}
              <li>
                  <CustomLink to="/project">
                      project
                  </CustomLink>
              </li>
          </ul>
          <PerWrapper>
            <img src={perIcon} alt="icon" />
            <h1>falanter</h1>
            <h2>falanter's</h2>
            <h2>project</h2>
            <div>Go to my github</div>
          </PerWrapper>
        </NavWrapper>
    )
}
function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div>
        <Link
          style={{ 
            // textDecoration: match ? "underline" : "none" ,
            // color:match ? "#000" : "#555",
            background: match ? "#EDF4FC":"",
            // boxShadow:match ? "1px -1px 3px rgba(0,0,0,0.25)":"",
            // boxShadow:match ? "1px 1px 1px #fff,-1px -1px 1px rgba(0,0,0,0.25)":"", 
            boxShadow:match ? "inset 1px 1px 3px rgba(0,0,0,0.25)":"",
            
          }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
  }
export default Nav;
