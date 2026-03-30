import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InfiniteCalendar from 'react-infinite-calendar';
import Calendar from 'react-infinite-calendar/lib/Calendar';
import {
  withMultipleDates,
  defaultMultipleDateInterpolation
} from 'react-infinite-calendar/lib/Calendar/withMultipleDates';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import EsriLoader from 'esri-loader-react';
import {dojoRequire} from 'esri-loader';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List, ListItem} from "material-ui";

const settings = {
  mapProps: {
    basemap: 'topo',
    defaultLayerId: 'durham_streets',
  },
  viewProps: {
    // center: [-78.94527568817058, 44.02122397587841],
    zoom: 10,
    container: "mapArcgis",
    constraints: {
      minZoom: 1
    },
    ui: false
  },
  layers: [
    {
      url: 'https://maps.durham.ca/arcgis/rest/services/Cached_Basemaps/DurhamStreet_UTM/MapServer',
      id: 'durham_streets',
    },
    {
      url: 'https://maps.durham.ca/arcgis/rest/services/Cached_Basemaps/DurhamImage_UTM/MapServer',
      id: 'durham_satellite',
      visible: false
    },
  ],
  devices: [
    {
      type: 'atr',
      graphic: 'point',
      visible: false
    },
    {
      type: 'pcs',
      graphic: 'point',
      visible: false
    },
    {
      type: 'tmc',
      graphic: 'point',
      visible: false

    },
    {
      type: 'cln',
      graphic: 'point',
      visible: false,
      extent: true
    },

  ],
  objects: [
    {
      type: 'mrs',
      graphic: 'polyline',
      url: 'https://image.durham.ca/ArcGIS/rest/services/Traffic/Traffic_MATRIX/MapServer/1',
      outFields: ["OBJECTID", "ID"]
    },
    {
      type: 'mri',
      graphic: 'cycle',
      url: 'https://image.durham.ca/ArcGIS/rest/services/Traffic/Traffic_MATRIX/MapServer/0',
      outFields: ["OBJECTID", "NODE_ID"]
    }
  ]
};

class App extends Component {

  static  childContextTypes =  {
    muiTheme: React.PropTypes.object.isRequired,
  }

  loadEsriModules(settings) {
    dojoRequire([
      "esri/Map",
      "esri/views/MapView",
      "esri/widgets/Zoom",
      "esri/layers/MapImageLayer",
      "esri/layers/GraphicsLayer",
      "esri/layers/FeatureLayer",
      "esri/config",
      "esri/geometry/Point",
      "esri/symbols/PictureMarkerSymbol",
      "esri/Graphic",
      "esri/geometry/Extent",
      "esri/geometry/SpatialReference"
    ], (Map,
        MapView,
        Zoom,
        MapImageLayer,
        GraphicsLayer,
        FeatureLayer,
        esriConfig,
        Point,
        PictureMarkerSymbol,
        Graphic,
        Extent,
        SpatialReference) => {
      esriConfig.request.corsDetection = false;
      this.esri = {
        Map,
        MapView,
        Zoom,
        MapImageLayer,
        GraphicsLayer,
        FeatureLayer,
        Point,
        PictureMarkerSymbol,
        Graphic,
        Extent,
        SpatialReference
      };
      this.initMap(settings);
    }, (err) => console.error(err))
  }

  initMap() {
    const map = new this.esri.Map(settings.mapProps);
    const {objectsProps} = settings.objects;
    map.addMany(settings.layers.map(layer => new this.esri.MapImageLayer(layer)));

    for (let i in objectsProps) {
      this.initFeatureLayer(objectsProps[i], map);
    }
    this.map = map;
    this.initView(settings);
  }

  initView(map) {
    const view = new this.esri.MapView({
      ...settings.viewProps,
      map: this.map,
      extent: new this.esri.Extent({
        xmin: 6336,
        ymin: 4851,
        xmax: 7052,
        ymax: 4932,
        spatialReference: {wkid: 26917}
      }),
    }); // ToDo: implement external control, create extent
    const zoom = new this.esri.Zoom({view});
  }

  initFeatureLayer(props, map) {
    let layer = new this.esri.FeatureLayer({
      url: props.url,
      id: props.type,
      opacity: 0.2,
      outFields: props.outFields,
      minScale: 72223
    });
    map.add(layer);
  }


  constructor() {
    super();
    this.state = {checked: false};
  }

  change(e) {
    console.log('asd');
    this.setState({checked: e.target.checked});
  }

  // render() {
  //   return (
  //       <div id="mapArcgis" onMouseOver={() => console.log("hover")} className="map">
  //         <div id="mapArcgis" style={{height: '400px'}}>
  //           <EsriLoader options={{url: 'https://js.arcgis.com/4.4/'}} ready={() => this.loadEsriModules(settings)}/>
  //         </div>
  //
  //         <input type="checkbox" checked={this.state.checked} onChange={e => this.change(e)}></input>
  //         <input type="text" value={this.state.checked}></input>
  //       </div> );
  // }



  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }


  render() {
    return (<List>
      {['a', 'b','c','d'].map( e=> <ListItem primaryText={e} onMouseEnter={d => console.log(e)}/>)}
    </List> );
  }
}

export default App;
