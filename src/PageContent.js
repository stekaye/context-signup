import React, {Component} from 'react';

class PageComponent extends Component {
  render() {
    const styles = {
      backgroundColor: 'white',
      height: '100vh',
      width: '100vw'
    }
    return (
      <div styles={styles}>
        {this.props.children}
      </div>
    )
  }
}

export default PageComponent;
