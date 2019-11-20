import React from "react";
import "font-awesome/css/font-awesome.min.css";
import styles from "./Changeimg.css";

class Changeimg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChange: false
    };
  }

  componentDidMount() {}

  handleClick = () => {
    this.setState(state => ({ isChange: !state.isChange }));
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={styles.changebut}
        type="button"
      >
        <i
          className={this.state.isChange ? "fa fa-moon-o" : "fa fa-lightbulb-o"}
          aria-hidden="true"
          style={{ width: "50px", fontSize: "50px" }}
        />
      </button>
    );
  }
}
export default Changeimg;
