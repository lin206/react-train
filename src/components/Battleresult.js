import React from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

class Battleresult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onerep: 0,
      tworep: 0
    };
  }

  componentDidMount() {
    this.battle();
  }

  battle = async () => {
    const { playone, playtwo } = this.props;
    const play1url = `https://api.github.com/users/${playone}?client_id=0aad2fd78be38bd241df&client_secret=fa0825b616ae72b529d829b963d82aaf58a01209`;
    const play2url = `https://api.github.com/users/${playtwo}?client_id=0aad2fd78be38bd241df&client_secret=fa0825b616ae72b529d829b963d82aaf58a01209`;
    const res1 = await axios.get(play1url);
    const res2 = await axios.get(play2url);
    this.setState({
      onerep: res1.data.public_repos,
      tworep: res2.data.public_repos
    });
  };

  render() {
    const { playone, playtwo, onbut } = this.props;
    const { onerep, tworep } = this.state;
    return (
      <>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "80px"
          }}
        >
          <ResultCard play={playone} anrep={tworep} />
          <ResultCard play={playtwo} anrep={onerep} />
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            type="button"
            onClick={onbut}
            style={{
              width: "150px",
              height: "50px",
              backgroundColor: "black",
              color: "white",
              fontSize: "18px",
              outline: "none",
              marginTop: "80px"
            }}
          >
            返回
          </button>
        </div>
      </>
    );
  }
}
export default Battleresult;
