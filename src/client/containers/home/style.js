import styled from "styled-components"

const HomeStyle = styled.div`
  .button-container {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 8px 0;
    align-items: center;

    button {
      text-transform: uppercase;
    }

    i {
      margin-right: 24px;
    }
  }
`

export default HomeStyle
