import React from "react";
import styles from "./Card.css";

class Card extends React.Component {
  render() {
    const { index, card } = this.props;
    return (
      <div className={styles.card}>
        <h1>#{index}</h1>
        <img src={card.owner.avatar_url} className={styles.imgstyle} alt="" />
        <br />
        <a href={card.html_url} className={styles.titlestyle}>
          {card.owner.login}
        </a>
        <p className={styles.pstyle}>
          <i
            className="fa fa-user"
            aria-hidden="true"
            style={{ width: "20px" }}
          />
          <a href={card.owner.html_url} className={styles.astyle}>
            {card.owner.login}
          </a>
        </p>
        <p className={styles.pstyle}>
          <i
            className="fa fa-star"
            aria-hidden="true"
            style={{ width: "20px" }}
          />
          <span className={styles.spanstyle}>
            {card.stargazers_count} stars
          </span>
        </p>
        <p className={styles.pstyle}>
          <i
            className="fa fa-code-fork"
            aria-hidden="true"
            style={{ width: "20px" }}
          />
          <span className={styles.spanstyle}>{card.forks_count} forks</span>
        </p>
        <p className={styles.pstyle}>
          <i
            className="fa fa-exclamation-triangle"
            aria-hidden="true"
            style={{ width: "20px" }}
          />
          <span className={styles.spanstyle}>
            {card.open_issues_count} open issues
          </span>
        </p>
      </div>
    );
  }
}
export default Card;
