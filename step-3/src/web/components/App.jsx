import React from 'react';
import Album from './AlbumList'

export default class App extends React.Component {

  render() {
    return (
     <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h1 style={styles.viewStyle}>{this.props.header}</h1>
        <Album />
      </div>);
  }
}

const styles = { 
  body: {
    margin: 0,
    padding: 0
  },
  viewStyle: {
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 0,
    boxShadow: '5px 10px 5px #888888',
    lineHeight: '55px',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    textAlign: 'center',
    width: '100%',
    fontSize: 20,

  }
};
