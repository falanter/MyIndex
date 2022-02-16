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
    display:flex;
    flex-direction: column;
`;
const Black=styled.div`
   height:50px;
`;
const Title=styled.h2`
   height:60px;
`;
const Main=styled.div`
   margin-left:auto;
`;
function About(){
    return (
        <Con>
            <Black/>
            <Wrapper>
                <Title>About</Title>
                <Main>
                    展示了个人项目，同时适配了平板和移动端，实现了live2d-widget在React框架中的使用(左下角为live2d，第一次加载时会慢一些)。
                </Main>
            </Wrapper>
            <Black/>
        </Con>
    );
  }
export default About;