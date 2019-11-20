import React from "react";
import axios from "axios";

class ResultCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: "",
      login: "",
      name: "",
      followsers: "",
      following: "",
      rep: 0,
      uurl: "",
      res: "Tie"
    };
  }

  componentDidMount() {
    this.search();
  }

  componentDidUpdate(prevProps) {
    if (this.props.anrep !== prevProps.anrep) {
      this.battle();
    }
  }

  search = async () => {
    /* let d=[] */
    const { play } = this.props;
    const playurl = `https://api.github.com/users/${play}?client_id=0aad2fd78be38bd241df&client_secret=fa0825b616ae72b529d829b963d82aaf58a01209`;
    const res = await axios.get(playurl);
    this.setState({
      imgurl: res.data.avatar_url,
      login: res.data.login,
      name: res.data.name,
      followsers: res.data.followsers,
      following: res.data.following,
      rep: res.data.public_repos,
      uurl: res.data.html_url
    });
  };

  battle() {
    const { anrep } = this.props;
    let { res } = this.state;
    const { rep } = this.state;
    if (rep > anrep) {
      res = "Winner";
    } else if (rep < anrep) {
      res = "Loser";
    } else {
      res = "Tie";
    }
    this.setState({
      res
    });
  }

  render() {
    const {
      imgurl,
      login,
      name,
      followsers,
      following,
      rep,
      uurl,
      res
    } = this.state;
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
        <img src={imgurl} style={{ width: "150px", height: "150px" }} alt="" />
        <br />
        <a
          href={uurl}
          style={{ color: "red", textDecoration: "none", fontSize: "25px" }}
        >
          {login}
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
            {name}
          </span>
        </p>
        <br />
        <p style={{ textAlign: "left", marginLeft: "50px" }}>
          <i
            className="fa fa-users"
            aria-hidden="true"
            style={{ width: "50px", color: "blue", fontSize: "20px" }}
          />
          <span style={{ fontSize: "20px" }}>{followsers} followers</span>
        </p>
        <br />
        <p style={{ textAlign: "left", marginLeft: "50px" }}>
          <i
            className="fa fa-user-plus"
            aria-hidden="true"
            style={{ width: "50px", color: "green", fontSize: "20px" }}
          />
          <span style={{ fontSize: "20px" }}>{following} following</span>
        </p>
        <br />
        <p style={{ textAlign: "left", marginLeft: "50px" }}>
          <i
            className="fa fa-code"
            aria-hidden="true"
            style={{ width: "50px", fontSize: "20px" }}
          />
          <span style={{ fontSize: "20px" }}>{rep} repositories</span>
        </p>
        <br />
      </div>
    );
  }
}
export default ResultCard;
