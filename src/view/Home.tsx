import styled from "styled-components";
import IconsVue from '../assets/Vue.svg'
import IconsReact from '../assets/React.svg'

const Con=styled.div`
   display:flex;
   flex-direction: column;
   width:80%;
`;
const Wrapper=styled.div`
    padding:20px;
    background-image: linear-gradient(to top right, #D9E5F3, #eff);
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    box-shadow: 0 0 50px rgba(0,0,0,0.25);
    @media(max-width:600px){
        display:none;
    }
`;
const Top=styled.div`
    height:10%;
    display:flex;
    div{
        margin-right:10px;
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius:5px;
        color:#999;
        height:30px;
        width:150px;
        margin-left:auto;
        background:#EDF4FC;
        box-shadow:inset 1px 1px 5px rgba(0,0,0,0.25);
        
    }
`;
const Main=styled.div`
   height:90%;
   display:flex;
   flex-direction: column;
`;
const Overview=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    height:150px;
    @media(max-width:800px){
        flex-direction: column;
        margin:20px 0;
        @media(max-height:800px){
            display:none;
        }
    }
`;
const OverItem=styled.div`
    background:#EDF4FC;
    box-shadow:inset 2px 2px 5px rgba(0,0,0,0.25);
    border-radius:12px;
    margin:0 5px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    @media(max-width:800px){
        margin:5px 0;
    }
`;
const Circle=styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow:inset 1px 1px 5px rgba(0,0,0,0.25);
    display:flex;
    align-items: center;
    justify-content: center;
    
`;
const Icon=styled.img`
   height:50px;
`;
const OverText=styled.div`
    width: 80px;
    height: 80px;
    display:flex;
    flex-direction:column;
    padding-top:10px;
`;
const Diagram=styled.div`
    height:350px;
    margin-top:40px;
    border-radius:12px;
    background-image: linear-gradient(to right, #D9E5F3, #eff);
    box-shadow: 5px 5px 10px rgba(0,0,0,0.25);
    display:flex;
    align-items: flex-end;
    justify-content: space-around;
    @media(max-width:800px){
        flex-direction: column;
        align-items: flex-start;
    }
`;
const TreeBox=styled.a`
    color:#333;
    display:flex;
    flex-direction:column-reverse;
    height:300px;
    width:150px;
    align-items: center;
    padding-bottom:20px;
    cursor: pointer;
    &:nth-child(1) div{
        width:50px;
        height:100px;
    }
    &:nth-child(2) div{
        width:50px;
        height:150px;
    }
    &:nth-child(3) div{
        width:50px;
        height:180px;
    }
    &:nth-child(4) div{
        width:50px;
        height:100px;
    }
    &:nth-child(5) div{
        width:50px;
        height:150px;
    }
    &:hover{
        div{
            background:#eef;
        }
    }
    @media(max-width:800px){
        width:100%;
        padding-bottom:0;
        flex-direction:row;
        &:nth-child(1) div{
            height:20px;
            width:20%;
        }
        &:nth-child(2) div{
            height:20px;
            width:30%;
        }
        &:nth-child(3) div{
            height:20px;
            width:50%;
        }
        &:nth-child(4) div{
            height:20px;
            width:20%;
        }
        &:nth-child(5) div{
            height:20px;
            width:30%;
        }
    }
`;
const Tree=styled.div`
    background-image: linear-gradient(to top right, #D9E5F3, #eff);
    border-radius:10px;
    box-shadow: 30px 15px 40px rgba(0,0,0,0.25);
    margin:20px 0;
    cursor: pointer;
    transition: all 250ms;
    &:hover{
        background:#eef;
    }
    @media(max-width:800px){
        border-radius:5px;
        height:50px;
    }
`;
const PWrapper=styled.div`
    display:none;
    padding:20px;
    background-image: linear-gradient(to top right, #D9E5F3, #eff);
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    box-shadow: 0 0 50px rgba(0,0,0,0.25);
    flex-direction: column;
    @media(max-width:600px){
        display: flex;
    }
`;
const AButton=styled.a`
  margin-top: 20px;
  button{
    background-image: linear-gradient(to right, #D9E5F3, #eff);
    box-shadow: 5px 5px 10px rgba(0,0,0,0.25);
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius:12px;
    background-color: #fff;
    &:hover{
      background:#EDF4FC;
      box-shadow:inset 1px 1px 5px rgba(0,0,0,0.25);
      
    }
  }
`;
const Black=styled.div`
   height:50px;
`;

function Home(){
    return (
        <Con>
            <Black/>
            <Wrapper>
                <Top>
                    <h2>Home</h2>
                    <div>2021-07</div>
                    <div>2021-11</div>
                </Top>
                <Main>
                    <Overview>
                        <OverItem>
                            <Circle>
                                <Icon src={IconsVue} alt="vue2" />                               
                            </Circle>
                            <OverText>
                                <div>Vue2</div>
                                <div>项目:2</div>
                                <div>★★☆</div>
                            </OverText>
                        </OverItem>
                        <OverItem>
                            <Circle>
                                <Icon src={IconsVue} alt="vue2" />
                            </Circle>
                            <OverText>
                                <div>Vue3</div>
                                <div>项目:1</div>
                                <div>★★★</div>
                            </OverText>
                        </OverItem>
                        <OverItem>
                            <Circle>
                                <Icon src={IconsReact} alt="vue2" />
                            </Circle>
                            <OverText>
                                <div>React</div>
                                <div>项目:2</div>
                                <div>★★★</div>
                            </OverText>
                        </OverItem>
                    </Overview>
                    <Diagram>
                        <TreeBox target="_blank" rel="noreferrer" href="https://falanter.gitee.io/blog">
                            Vue2
                            <Tree></Tree>
                            多人博客
                        </TreeBox>
                        <TreeBox target="_blank" rel="noreferrer" href="https://falanter.gitee.io/yinxiangyun">
                            Vue2
                            <Tree></Tree>
                            印象云笔记
                        </TreeBox>
                        <TreeBox target="_blank" rel="noreferrer" href="https://falanter.gitee.io/gulu-ui-website-1">
                            Vue3
                            <Tree></Tree>
                            样式组件
                        </TreeBox>
                        <TreeBox target="_blank" rel="noreferrer" href="https://falanter.gitee.io/react-image-upload">
                            React
                            <Tree></Tree>
                            图床
                        </TreeBox>
                        <TreeBox target="_blank" rel="noreferrer" href="https://falanter.gitee.io/morney-1/build">
                            React
                            <Tree></Tree>
                            旺财记账
                        </TreeBox>
                    </Diagram>
                </Main>
            </Wrapper>
            <PWrapper>
                <h2>Home</h2>
                <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/blog"><button>多人博客-Vue2</button></AButton>
                <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/yinxiangyun"><button>印象云笔记-Vue2</button></AButton>
                <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/gulu-ui-website-1"><button>样式组件-Vue3</button></AButton>
                <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/react-image-upload"><button>图床-React</button></AButton>
                <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/morney-1/build"><button>旺财记账-React</button></AButton>
            </PWrapper>
            <Black/>
        </Con>
        
    );
  }
export default Home;