import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components'

const NavWrapper=styled.nav`
  /* border: 1px solid blue; */
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  margin-right: 20px;
  /* height: 65px; */
  ul{
    display: flex;
    flex-direction: column;
    li{
        /* width: 33.333%; */
        text-align: center;
        box-shadow: 0 0 1px rgba(0,0,0,0.25);
        a{
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
            textDecoration: match ? "underline" : "none" ,
            color:match ? "green" : ""
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
