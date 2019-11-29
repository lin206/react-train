import React from "react";
/* import {Link } from "react-router-dom"; */
import axios from "axios";
import Player from "./Player";
import PlayCard from "./PlayCard";

class Battlegame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playonedata: null,
      playtwodata: null
    };
  }

  playdata = async () => {
    const { playone, playtwo } = this.props;
    const play1url = `https://api.github.com/users/${playone}?client_id=0aad2fd78be38bd241df&client_secret=fa0825b616ae72b529d829b963d82aaf58a01209`;
    const play2url = `https://api.github.com/users/${playtwo}?client_id=0aad2fd78be38bd241df&client_secret=fa0825b616ae72b529d829b963d82aaf58a01209`;
    const res1 = await axios.get(play1url);
    const res2 = await axios.get(play2url);
    this.setState({
      playonedata: res1.data,
      playtwodata: res2.data
    });
    const playque = {
      playone: this.state.playonedata,
      playtwo: this.state.playtwodata
    };
    const path = {
      pathname: "/battle/result",
      query: playque
    };
    this.props.history.push(path);
  };

  render() {
    const {
      playone,
      playtwo,
      onecom,
      twocom,
      changone,
      changtwo,
      handelChange1,
      handelChange2,
      handleClick1,
      handleClick2,
      returnClick1,
      returnClick2
    } = this.props;
    return (
      <>
        <div style={{ width: "500px", marginTop: "10px" }}>
          <h2 style={{ color: "#bfbfbf" }}>Play One</h2>
          {onecom ? (
            <PlayCard name={playone} onClick={returnClick1} />
          ) : (
            <Player
              username={playone}
              commit={onecom}
              onClick={handleClick1}
              handelChange={handelChange1}
              color={changone}
            />
          )}
        </div>
        <div style={{ width: "500px", marginTop: "10px" }}>
          <h2 style={{ color: "#bfbfbf" }}>Play Two</h2>
          {twocom ? (
            <PlayCard name={playtwo} onClick={returnClick2} />
          ) : (
            <Player
              username={playtwo}
              commit={twocom}
              onClick={handleClick2}
              handelChange={handelChange2}
              color={changtwo}
            />
          )}
        </div>
        <br />
        {onecom && twocom ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "50px"
            }}
          >
            <button
              type="button"
              style={{
                width: "150px",
                height: "50px",
                backgroundColor: "black",
                color: "white",
                fontSize: "18px",
                outline: "none"
              }}
              onClick={this.playdata}
            >
              Battle
            </button>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}
export default Battlegame;
