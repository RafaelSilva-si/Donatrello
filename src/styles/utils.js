import Styled, { css } from 'styled-components'

//css para o Header
export const Header = Styled.header`

@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

  font-family: 'Itim', cursive;
  width: 100%;
  height: 60px;
  background: rgba(255,255,255,.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 49px;
  color: white;
`

export const CardItem = Styled.div`
  width: 250px;
  background: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  ${props => props.isDragging && css`
    border: 2px dashed #221266;
    border-radius: 0px;
    background: transparent;
    div, p, textarea {
      opacity: 0;
    }
  `}
`

export const TitleItem = Styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-family: 'Itim', cursive;
  color: #002884;
`

export const InputDescItem = Styled.textarea`
  font-family: 'Itim', cursive;
  color: #002884;
`

export const TagItem = Styled.div`
  width: 30px;
  margin:2px;
  height: 10px;
  background: ${props => props.color};
  border-radius: 5px;

`
export const ColumnsItem = Styled.div`
  display: flex;
  padding: 30px 0;
  height: calc(100vh - 80px);
  
`

export const ContainerCard = Styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 280px;
  border-radius: 4px;
  background: rgba(255,255,255,.3);
  margin: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
    background: #002884;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

  }

  ul {
    margin-top: 30px;
  }
  
`;

export const TagsFields = Styled.div`
  border: 1px solid #c3c3c3;
  padding:15px;
`

export const Tags = Styled.div`
  width: 20px;
  height: 20px;
  background: red;
  margin-right: 10px;
`