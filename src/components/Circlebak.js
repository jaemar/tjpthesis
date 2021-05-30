import React, { Component } from "react";

class Circle extends Component {
  constructor(props) {
    super(props);
    this.alertMe = this.alertMe.bind(this)
    this.state = {
      selected: false
    };
  }

  alertMe(e, id) {
    e.preventDefault();
    //alert(id);
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    const {
      nodeId,
      cx,
      cy,
      isSelected
    } = this.props;
    console.log(this.props)

    return (
      <circle
        cx={cx}
        cy={cy}
        r="10"
        fill={this.state.selected ? "red" : "white"}
        onClick={e => this.alertMe(e, nodeId)}
      />
    )
  }
}

export default Circle;
