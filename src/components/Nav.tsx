import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components'

const NavWrapper=styled.nav`
  /* border: 1px solid blue; */
  z-index:5;
  padding-top:20px;
  box-shadow: 0 0 50px rgba(0,0,0,0.25);
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
                <li>
                    <CustomLink to="/user">
                        user
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to="/project">
                        project
                    </CustomLink>
                </li>
            </ul>
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
