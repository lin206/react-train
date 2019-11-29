import React from "react";

class ResultCard extends React.Component {
  render() {
    const { res } = this.props;
    let data = null;
    data = this.props.data;
    return (
      <div
        style={{
          width: "300px",
          backgroundColor: "#bfbfbf",
          textAlign: "center",
          padding: "15px 15px"
        }}
      >
        <h1>{res}</h1>
        <img
          src={data.avatar_url}
          style={{ width: "150px", height: "150px" }}
          alt=""
        />
        <br />
        <a
          href={data.html_url}
          style={{ color: "red", textDecoration: "none", fontSize: "25px" }}
        >
          {data.login}
        </a>
        <br />
        <p style={{ textAlign: "left", marginLeft: "50px" }}>
          <i
            className="fa fa-user"
            aria-hidden="true"
            style={{ width: "50px", color: "red", fontSize: "25px" }}
          />
          <span
            style={{ fontSize: "20px", marginLeft: "20px", textAlign: "left" }}
          >
            {data.name}
          </span>
        </p>
        <br />
        <p style={{ textAlign: "left", marginLeft: "50px" }}>
          <i
            className="fa fa-users"
            aria-hidden="true"
            style={{ width: "50px", color: "blue", fontSize: "20px" }}
          />
          <span style={{ fontSize: "20px" }}>{data.followsers} followers</span>
        </p>
        <br />
        <p style={{ textAlign: "left", marginLeft: "50px" }}>
          <i
            className="fa fa-user-plus"
            aria-hidden="true"
            style={{ width: "50px", color: "green", fontSize: "20px" }}
          />
          <span style={{ fontSize: "20px" }}>{data.following} following</span>
        </p>
        <br />
        <p style={{ textAlign: "left", marginLeft: "50px" }}>
          <i
            className="fa fa-code"
            aria-hidden="true"
            style={{ width: "50px", fontSize: "20px" }}
          />
          <span style={{ fontSize: "20px" }}>
            {data.public_repos} repositories
          </span>
        </p>
        <br />
      </div>
    );
  }
}
export default ResultCard;
