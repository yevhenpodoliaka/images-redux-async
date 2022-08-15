import styled from "styled-components";
export const Btn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  color: white;
  background-color: grey;
  border-radius: 4px;
  padding: 15px 30px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
 
  &:hover,
  &:focus {
    color:yellow;
    background-color:blue;
  }
`;