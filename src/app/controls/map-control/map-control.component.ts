import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-map-control',
  templateUrl: './map-control.component.html',
  styleUrls: ['./map-control.component.css']
})
export class MapControlComponent implements OnInit {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  apiLoaded: Observable<boolean>;
  selectedmark:string="";
  options: google.maps.MapOptions = {
    center: {lat: 46.8083, lng: -100.7837},
    zoom: 3,
    disableDefaultUI: true,
    styles:
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8ec3b9"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1a3646"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#64779e"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#334e87"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6f9ba5"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3C7680"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#304a7d"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2c6675"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#255763"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#b0d5ce"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3a4762"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#0e1626"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#4e6d70"
          }
        ]
      }
    ]  
  };

  tracks: any[] = [
    {
      destinations:[        
        {desc:'Warehouse Alabama', cords: {lat: 32.3182, lng: -86.9023}},
        {desc:'Warehouse Phoenix' ,cords:{lat: 33.4484, lng: -112.0740}},
      ], 
      currentLocation:{lat:  35.173, lng: -80.778},
      companyName:'Empresa 1',
    },
    {
      destinations:[        
        {desc:'Warehouse Texas', cords: {lat: 31.9686, lng: -99.9018}},
        {desc:'Warehouse NY' ,cords:{lat: 40.7128, lng: -74.0060}},
      ],
      currentLocation:{lat: 38.2987, lng: -106.112},
      companyName:'Empresa 2',
    },
    {
      destinations:[
        {desc:'Warehouse California' ,cords:{lat: 36.7783, lng: -119.4179}},
        {desc:'Warehouse Florida', cords: {lat: 27.6648, lng: -81.5158}},
      ],
      currentLocation:{lat: 43.4653, lng: -122.63},
      companyName:'Empresa 3',
    },
  ];

  vertices: {path:google.maps.LatLngLiteral[], options:any}[] = [];

  genPolylineOptions(){
    return {
    strokeColor: this.getRandomColor(),
    strokeOpacity: 0.8,
    strokeWeight: 2,
  }
  };

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  
  markerOptionsDelivery: google.maps.MarkerOptions = {draggable: false, icon:{
    url: "../assets/truck-delivery.png",
    scaledSize: {equals:()=>false, height:20, width:20}
  }};
  markerOptionsDestiny: google.maps.MarkerOptions = {draggable: false, icon:{
    url: "../assets/domain.png",
    scaledSize: {equals:()=>false, height:20, width:20}
  }};
  markerPositions: google.maps.LatLngLiteral[] = [];
  markerPositionsDestiny: {desc:string, cords:google.maps.LatLngLiteral}[] = [];  
  markerPositionsCurrent: {currentLocation:google.maps.LatLngLiteral}[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng!.toJSON());
  }

  getRandomColor() {
    var letters = '6789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
  }

  openInfoWindow(marker: MapMarker, content: string) {
    console.log(marker)
    this.selectedmark=content;
    this.infoWindow!.open(marker);
  }

  openInfoWindowTrack(marker: MapMarker, track:any) {
    console.log(track)
    this.selectedmark=track.companyName;
    this.infoWindow!.open(marker);
  }

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAe7LWsictdIHXjFvsYt_TYFtiYkp6aJmY', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit(): void {
    this.tracks.forEach(track => {
      const path=[track.currentLocation]
      this.markerPositionsCurrent.push(track);
      track.destinations.forEach((destination: { desc:string, cords: google.maps.LatLngLiteral }) => {
        this.markerPositionsDestiny.push(destination);
        path.push(destination.cords);
      });
      this.vertices.push({path:path,options:this.genPolylineOptions()});
    }
    );
  }



}
