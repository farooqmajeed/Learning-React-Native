import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class Album extends Component {
    state = {
        album: []
    }
    componentWillMount() {
        console.log(' ComponentWillMount in Album List');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ album: response.data }));
    }
    renderAlbumList(){
        return this.state.album.map(album =>
         <AlbumDetail key={album.title} album={album} />
         );
    }
    render() {
        return (
            <ScrollView>
                {console.log('this.State', this.state)}
               {this.renderAlbumList()}
            </ScrollView>
        );
    }
}
