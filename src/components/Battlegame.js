import React from "react";
import Player from "./Player";
import PlayCard from "./PlayCard";

class Battlegame extends React.Component {
  render() {
    const {
      onbut,
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
              onClick={onbut}
            >
              battle
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
