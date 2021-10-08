import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function WeatherInfo(props) {
	const { weather } = props;

	let weatherImg;

	if(weather.sky.toLowerCase().includes("sunny")) {
			weatherImg = require('../../assets/sun-regular.png');
	} else if(weather.sky.toLowerCase().includes("cloudy")) {
			weatherImg = require('../../assets/cloud-solid.png');
		} else if(weather.sky.toLowerCase().includes("rain")) {
				weatherImg = require('../../assets/cloud-rain-solid.png');
			} else {
				weatherImg = require('../../assets/cloud-sun-solid.png');
			}
	


	return ( 
			<View style={styles.weatherContainer}>
				<Text style={styles.text}>
					{weather.location}
				</Text>
				<Text style={styles.text}>
					{weather.tempC} °C
				</Text>
				<Text style={styles.text}>
					{weather.sky}
				</Text>
				<Image
					style={styles.icon}
					source={weatherImg}
				/>
			</View>
	 );
}

const styles = StyleSheet.create({
	weatherContainer: {
		alignItems: 'center',
		width: '80%',
	},
	text: {
    color: '#364556',
    fontSize: 30,
    fontWeight: "bold",
		padding: 20,
		textAlign: "center", 
	},
	icon: {
		width: 120,
		height: 120,
		resizeMode:'contain',
		tintColor: '#5e7997',
	}
});

export default WeatherInfo;