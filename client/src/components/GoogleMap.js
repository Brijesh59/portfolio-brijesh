import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { withStyles } from '@material-ui/core';
import {compose} from 'recompose';

const styles = [
    {elementType: 'geometry', stylers: [{color: '#242526'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#272B33'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#272B33'}]},
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
    }
];
 
class GoogleMap extends Component {

    handleMarkerClick = () => {
        console.log('Marker CLicked')
    }
    
  render() {
    return (
        <div>
            <Map    
                google={this.props.google} 
                styles={styles}
                zoom={15}
                initialCenter={{
                    lat: 17.4484363,
                    lng: 78.3741361
                }}
                >
                <Marker 
                    title={'Madhapur, Hyderabad'}
                    name={'Brijesh'}
                    position={{lat: 17.4484363, lng: 78.3741361}} 
                    onClick= {this.handleMarkerClick}
                    >
                </Marker>                 
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <h1>Madhapur, Hyderabad</h1>
                </InfoWindow>
            </Map>
        </div>
    );
  }
}

export default compose(
    GoogleApiWrapper({
        apiKey: ("AIzaSyBbhwu_uRIAXsZdos9lmk37s2uGHhKOk9U")
    }),
    withStyles(styles)
)(GoogleMap);