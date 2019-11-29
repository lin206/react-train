import React from "react";
import ResultCard from "./ResultCard";

class Battleresult extends React.Component {
  resetClick = () => {
    this.props.history.push("/battle");
  };

  render() {
    let { playres1, playres2 } = "Tie";
    if (
      this.props.location.query.playone.public_repos >
      this.props.location.query.playtwo.public_repos
    ) {
      playres1 = "Winner";
      playres2 = "Loser";
    } else if (
      this.props.location.query.playone.public_repos <
      this.props.location.query.playtwo.public_repos
    ) {
      playres1 = "Loser";
      playres2 = "Winner";
    } else {
      playres1 = "Tie";
      playres2 = "Tie";
    }
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
          <ResultCard data={this.props.location.query.playone} res={playres1} />
          <ResultCard data={this.props.location.query.playtwo} res={playres2} />
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            type="button"
            onClick={this.resetClick}
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
