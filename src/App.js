import React from 'react'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			long: '',
			lat: '',
		}
	}

	componentDidMount() {
		fetch('http://api.open-notify.org/iss-now.json')
			.then(data => {
				return data.text()
			})
			.then(data => {
				return JSON.parse(data)
			})
			.then(myJson => {
				this.setState({
					long: Number(myJson.iss_position.longitude).toFixed(2),
					lat: Number(myJson.iss_position.latitude).toFixed(2),
				})
			})
	}

	render() {
		return (
			<div id='App'>
				<h2>Longitude: {this.state.long}°</h2>
				<h2>Latitude: {this.state.lat}°</h2>
			</div>
		)
	}
}

export default App
