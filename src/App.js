import React from 'react'
import io from 'socket.io-client'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			long: '',
			lat: '',
			socket: io('https://iss-location-socket.joaquingiordano.now.sh/'),
		}
	}

	componentDidMount() {
		this.state.socket.on('coords', coords => {
			this.setState({
				long: coords.long,
				lat: coords.lat,
			})
		})
	}

	render() {
		return (
			<div id='App'>
				<h1>International Space Station</h1>
				<h2>
					Longitude: <span>{this.state.long}°</span>
				</h2>
				<h2>
					Latitude: <span>{this.state.lat}°</span>
				</h2>
			</div>
		)
	}
}

export default App
