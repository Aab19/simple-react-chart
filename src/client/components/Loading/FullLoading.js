import React from "react"
import styled from "styled-components"

const FullLoadingStyle = styled.div`
  width: 300px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Spinner */

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  .spinner {
    width: 24px;
    height: 24px;
    margin: 0 auto;
    border-radius: 100%;
    border: solid 2px #fff;
    border-right-color: transparent;

    animation: loading 750ms linear infinite;
    -webkit-animation: loading 750ms linear infinite;
  }
`

export default function FullLoading() {
  return (
    <FullLoadingStyle>
      <div className="spinner"></div>
    </FullLoadingStyle>
  )
}
