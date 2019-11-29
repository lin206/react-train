import React from "react";
import styles from "./Battlerule.css";
import Battlegame from "./Battlegame";

class Battlerule extends React.Component {
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
      <div className={styles.contentbox}>
        <h1 className={styles.h1style}>用法说明</h1>
        <ul className={styles.ulstyle}>
          <li className={styles.listyle}>
            <p className={styles.pstyle}>输入两个Github用户</p>
            <i
              className="fa fa-user"
              aria-hidden="true"
              style={{ fontSize: "150px", color: "orange" }}
            />
          </li>
          <li className={styles.listyle}>
            <p className={styles.pstyle}>战斗</p>
            <i
              className="fa fa-fighter-jet"
              aria-hidden="true"
              style={{ fontSize: "150px" }}
            />
          </li>
          <li className={styles.listyle}>
            <p className={styles.pstyle}>获胜者</p>
            <i
              className="fa fa-trophy"
              aria-hidden="true"
              style={{ fontSize: "150px", color: "yellow" }}
            />
          </li>
        </ul>
        <h1 style={{ textAlign: "center", marginTop: "150px" }}>玩家</h1>
        <div className={styles.playerbox}>
          <Battlegame
            playone={playone}
            playtwo={playtwo}
            onecom={onecom}
            twocom={twocom}
            changone={changone}
            changtwo={changtwo}
            handelChange1={handelChange1}
            handelChange2={handelChange2}
            handleClick1={handleClick1}
            handleClick2={handleClick2}
            returnClick1={returnClick1}
            returnClick2={returnClick2}
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}
export default Battlerule;
