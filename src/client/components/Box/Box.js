import React from 'react';
import BoxStyle from './style';

export default function Box(props) {
  return <BoxStyle>{props.children}</BoxStyle>;
}
