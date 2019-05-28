import React from 'react';
import connect from '@vkontakte/vkui-connect';
import Icon24Back from '@vkontakte/icons/dist/24/browser_back';
// import '../css/Main.css';
// import ReactMapGL, { Layer, Feature } from "react-mapbox-gl"; Pos
import { platform } from '@vkontakte/vkui';

const osname = platform();
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const maptok = "pk.eyJ1IjoibW9zdmVsb2Zlc3QiLCJhIjoiY2p1Y2c1ZnFsMGx1azQzcXF3YWM2cmVmeiJ9.-fa0G7F0sqLa9Sg302s3Dg";
var showMenu = false;

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
		if (osname === "android") {
			var heightMainContent = document.getElementsByClassName('maincontent');
			heightMainContent[0].style.height = "calc(100vh - 58px)";
		}
		if (osname === "ios") { console.log("de ios") }
		this.props.chHis(this.props.history)
		this.props.chHeader(< div className="header-h" > Main </div>, null, true);
		connect.send("VKWebAppSetViewSettings", { "status_bar_style": "light", "action_bar_color": "#212121" });
	}

	render() {
		return (
			<div className="maincontent">
				main
			</div>
		);
	}
}

export default Main;