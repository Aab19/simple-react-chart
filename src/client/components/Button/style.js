import styled from "styled-components"

export const ButtonContainer = styled.div`
  width: 100%;

  i {
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 5px;
  }

  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`

const Button = styled.button`
  border: none;
  background: #fff;
  border-radius: 4px;
  padding: 12px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover,
  &:active {
    background-color: #eee;
    color: #444;
    opacity: 1;
    cursor: pointer;
  }

  &.button--transparent {
    background-color: transparent;
  }

  &.button--blue {
    background-color: #4185f4;
    color: #fff;
  }
`

export default Button
