import styled from "@emotion/styled"

const CustomButton = styled.button`
  padding: 15px;
  background-color: #819da8;
  font-size: 24px;
  border: 1px solid #819da8;
  border-radius: 20px;
  color: black;
  font-weight: bold;
  height: 50px;
  width: 100%;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:not(:last-child){
    margin-bottom: 20px;
  };
  &:hover {
    color: #000000;
  };
  &.active{
    background-color: #ffffff;
  }
`

export {CustomButton}