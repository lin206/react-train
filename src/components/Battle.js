import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Battlerule from "./Battlerule";
import Battleresult from "./Battleresult";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isresult: false,
      playone: "",
      playtwo: "",
      onecom: false,
      twocom: false,
      changone: false,
      changtwo: false
    };
  }

  handelChange1 = e => {
    if (e.target.value === "") {
      this.setState({
        changone: false,
        playone: e.target.value
      });
    } else {
      this.setState({
        changone: true,
        playone: e.target.value
      });
    }
  };

  handelChange2 = e => {
    if (e.target.value === "") {
      this.setState({
        changtwo: false,
        playtwo: e.target.value
      });
    } else {
      this.setState({
        changtwo: true,
        playtwo: e.target.value
      });
    }
  };

  handleClick1 = () => {
    const { playone } = this.state;
    let { onecom } = this.state;
    if (playone !== "") {
      onecom = true;
    } else {
      onecom = false;
    }
    this.setState({
      onecom
    });
  };

  handleClick2 = () => {
    const { playtwo } = this.state;
    let { twocom } = this.state;
    if (playtwo !== "") {
      twocom = true;
    } else {
      twocom = false;
    }
    this.setState({
      twocom
    });
  };

  returnClick1 = () => {
    this.setState({
      playone: "",
      changone: false,
      onecom: false
    });
  };

  returnClick2 = () => {
    this.setState({
      playtwo: "",
      changtwo: false,
      twocom: false
    });
  };

  handleresult = () => {
    let {
      isresult,
      playone,
      changone,
      onecom,
      playtwo,
      changtwo,
      twocom
    } = this.state;
    if (isresult) {
      isresult = false;
      playone = "";
      changone = false;
      onecom = false;
      playtwo = "";
      changtwo = false;
      twocom = false;
    } else {
      isresult = true;
    }
    this.setState({
      isresult,
      playone,
      changone,
      onecom,
      playtwo,
      changtwo,
      twocom
    });
  };

  render() {
    const { isresult, playone, playtwo } = this.state;
    return isresult ? (
      <Battleresult
        playone={playone}
        playtwo={playtwo}
        onbut={this.handleresult}
      />
    ) : (
      <Battlerule
        onbut={this.handleresult}
        playone={this.state.playone}
        playtwo={this.state.playtwo}
        onecom={this.state.onecom}
        twocom={this.state.twocom}
        changone={this.state.changone}
        changtwo={this.state.changtwo}
        handelChange1={this.handelChange1}
        handelChange2={this.handelChange2}
        handleClick1={this.handleClick1}
        handleClick2={this.handleClick2}
        returnClick1={this.returnClick1}
        returnClick2={this.returnClick2}
      />
    );
  }
}
export default Battle;
