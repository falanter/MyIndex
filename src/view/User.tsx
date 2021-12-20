import styled from "styled-components";

const Con=styled.div`
   display:flex;
   flex-direction: column;
`;
const Wrapper=styled.div`
    padding:20px;
    background-image: linear-gradient(to top right, #D9E5F3, #eff);
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    box-shadow: 0 0 50px rgba(0,0,0,0.25);
`;
const Black=styled.div`
   height:50px;
`;

function About(){
    return (
        <Con>
            <Black/>
            <Wrapper>
                <h2>User</h2>
            </Wrapper>
            <Black/>
        </Con>
    );
  }
export default About;