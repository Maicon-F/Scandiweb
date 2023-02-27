import React, { Component } from 'react';
import style from './Button.module.scss';



export default class Button extends React.Component<{name:String}> {
  render() {
    return(
      <div><button className={style.button}>{this.props.name}</button></div>
    )
  }

}

