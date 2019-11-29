import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "./Loading";
import Card from "./Card";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      repos: [],
      preurl: "",
      pageNum: 1
    };
  }

  componentDidMount() {
    this.search();
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.search();
    }
  }

  search = async (page = 1) => {
    const { query } = this.props;
    this.setState({
      isLoading: true
    });
    const purl = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories`;
    const ppurl = this.state.preurl;
    let p = this.state.pageNum;
    if (ppurl !== purl) {
      this.setState({
        repos: [],
        pageNum: 1,
        preurl: purl
      });
    }
    const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${page}`;
    const res = await axios.get(url);
    p += 1;
    this.setState(state => ({
      repos: [...state.repos, ...res.data.items],
      isLoading: false,
      pageNum: p
    }));
  };

  render() {
    const { repos, isLoading, pageNum } = this.state;
    const list = repos.map((item, key) => (
      <Card key={key} index={key + 1} card={item} />
    ));
    return (
      <InfiniteScroll
        initialLoad={false}
        loadMore={() => this.search(pageNum)}
        hasMore={!isLoading}
        loader={<Loading />}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {list}
        </div>
        {isLoading && <Loading />}
      </InfiniteScroll>
      /*  {isLoading ? <Loading /> : list} */
    );
  }
}
export default Content;
