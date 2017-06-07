// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import axios from 'axios';

// class AlbumList extends Component {
//     // state = { albums: [] };

//     componentWillMount() {
//         axios.get('https://rallycoding.herokuapp.com/api/music_albums')
//             // .then(response => this.setState({ albums: response.data }));
//             .then(response => console.log(response));
//     }

//     // renderAlbums(){
//     //   return this.state.albums.map(album => <Text>{album.title}</Text>); 
//     // }
//     render() {
//         // console.log("this.state", this.state);
//         return (
//             <View>
//               {/*{this.renderAlbums()}*/}
//             </View>
//         );
//     }
// }

// export default AlbumList;

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

    return(
         <View>
         <Text> Albums </Text>
        </View>
    );
};

export default AlbumList;