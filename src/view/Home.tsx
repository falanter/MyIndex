import styled from "styled-components";
// const LinkButton=styled(Link)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 30px;
//   margin-top: 20px;

//   button{
//     padding: 10px;
//     cursor: pointer;
//     border: none;
//     border-bottom-left-radius: 5px;
//     border-top-left-radius:5px;
//     background-color: #40a9ff;
//     color: #fff;
//     /* height: 20px; */
//   }
//   .homeRight{
//     width:0;
//     height:0;
//     border:30px solid;
//     border-color: transparent transparent transparent #63b6fa;
//     transform:translateX(-10px);
//     transition: all 250ms;
//     opacity: 0;
//     /* transform: rotate(90deg); */
//     /* transform:translateX(100px); */
//   }
//   &:hover{
//     button{
//       background-color: #63b6fa;
//     }
//     .homeRight{
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
// `;
const Con=styled.div`
   display:flex;
   flex-direction: column;
`;
const Wrapper=styled.div`
    padding:20px;
    /* background-color:#333; */
    background-image: linear-gradient(to top right, #D9E5F3, #eff);
    /* background-image: linear-gradient(to top right, #D9E5F3, #D9E5F3); */
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    box-shadow: 0 0 50px rgba(0,0,0,0.25);
`;
const Black=styled.div`
   height:50px;
`;

function Home(){
    return (
        <Con>
            <Black/>
            <Wrapper>
                <h2>Home</h2>
                {/* <LinkButton to="/project"><button>To Project</button><div className="homeRight"></div></LinkButton> */}
            </Wrapper>
            <Black/>
        </Con>
    );
  }
export default Home;