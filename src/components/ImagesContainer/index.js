import React, { Component } from 'react';
import InfiniteScroll from '../../dist/InfiniteScroll';

class App extends Component {

  render() {
    const loader = <div className="loader">Loading ...</div>;

    var items = [];
    this.state.tracks

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems.bind(this)}
        hasMore={this.state.hasMoreItems}
        loader={loader}
      >
        <div className="tracks">
          {posts.map((post, i) => <Image post={post} />);
          );
        }
        </div>
      </InfiniteScroll>
    );
  }
};
