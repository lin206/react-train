import React from "react";

class PlayCard extends React.Component {
  render() {
    const { name, onClick } = this.props;
    const imgurl = `https://github.com/${name}.png?size=200`;
    const url = `https://github.com/${name}`;
    return (
      <div
        style={{
          width: "500px",
          marginTop: "10px",
          background: "#d9d9d9",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div style={{ display: "flex" }}>
          <img src={imgurl} alt="" style={{ width: "50px", height: "50px" }} />
          <a
            href={url}
            style={{
              lineHeight: "50px",
              alignItems: "center",
              marginLeft: "20px",
              color: "black",
              textDecoration: "none",
              fontSize: "18px"
            }}
          >
            {name}
          </a>
        </div>
        <button
          type="button"
          style={{
            borderStyle: "none",
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
            width: "50px"
          }}
          onClick={onClick}
        >
          返回
        </button>
      </div>
    );
  }
}
export default PlayCard;
