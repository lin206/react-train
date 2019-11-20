import React from "react";
/* import axios from "axios"; */

class Player extends React.Component {
  render() {
    const { onClick, handelChange } = this.props;
    return (
      <>
        <input
          style={{
            width: "300px",
            height: "40px",
            fontSize: "20px",
            border: "0.3px solid #bfbfbf"
          }}
          placeholder="github用户名"
          onChange={handelChange}
        />
        <button
          style={{
            width: "150px",
            height: "40px",
            marginLeft: "20px",
            color: "#bfbfbf",
            fontSize: "20px",
            backgroundColor:
              this.props.color === true ? "black" : "transparent",
            border: "1px solid #bfbfbf",
            borderRadius: "8px"
          }}
          type="button"
          onClick={onClick}
        >
          提交
        </button>
      </>
    );
  }
}
export default Player;
