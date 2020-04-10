import React from "react"
import PropTypes from "prop-types"
import Button, { ButtonContainer } from "./style"

export default function GlobalButton(props) {
  return (
    <ButtonContainer
      className={props.containerclass ? props.containerclass : ""}
      style={props.styleContainer ? props.styleContainer : {}}>
      <React.Fragment>
        <Button
          id={props.id ? props.id : ""}
          onClick={!props.isLoading ? props.onclick : () => {}}
          className={props.customClass ? props.customClass : ""}
          style={props.style}
          type="button">
          {props.text}
        </Button>
        {props.caret ? <i className="right" /> : null}
      </React.Fragment>
    </ButtonContainer>
  )
}

GlobalButton.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  containerclass: PropTypes.string,
  styleContainer: PropTypes.object,
  style: PropTypes.object,
  onclick: PropTypes.func,
  caret: PropTypes.bool,
}
