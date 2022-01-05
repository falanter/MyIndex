import styled from "styled-components";

const PCon=styled.div`
   display:flex;
   flex-direction: column;
`;
const PWrapper=styled.div`
    padding:20px;
    background-image: linear-gradient(to top right, #D9E5F3, #eff);
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    box-shadow: 0 0 50px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
`;
const Black=styled.div`
   height:50px;
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

function Project(){
    return (
        <PCon>
            <Black/>
            <PWrapper>
                <h2>Project</h2>
                <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/blog"><button>多人博客-Vue2</button></AButton>
                <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/yinxiangyun"><button>印象云笔记-Vue2</button></AButton>
                <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/gulu-ui-website-1"><button>样式组件-Vue3</button></AButton>
                <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/react-image-upload"><button>图床-React</button></AButton>
                <AButton target="_blank" rel="noreferrer" href="https://falanter.gitee.io/morney-1/build"><button>旺财记账-React</button></AButton>
            </PWrapper>
            <Black/>
        </PCon>
    );
  }
export default Project;