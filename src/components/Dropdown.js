import React, { useState } from 'react';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';
import { Alert, StyleSheet, View } from 'react-native';
import WeatherInfo from './WeatherInfo';
import { countries } from './Countries';

function Dropdown() {
	const [weather, setWeather] = useState({});

	const baseUrl = 'http://api.weatherapi.com/v1/current.json?';
	const apiKey = 'key=c99cbc1c8e134e4283a191653212909';

	function showWeather(country) {
		axios.get(`${baseUrl}${apiKey}&q=${country}`)
			.then(function (response) {
				const countryWeather = {
					location: response.data.location.country,
					tempC: response.data.current.temp_c,
					sky: response.data.current.condition.text,
				}
				setWeather(countryWeather);
			})
			.catch(function (error) {
				Alert.alert('Oops! Something went wrong.');
				console.log(error);
			});
	}
	
	function handleSelect(country) {
		Alert.alert(`${country} selected!`);
		showWeather(country);
	}


	
	return (
		<View style={styles.dropdownContainer}>
			<SelectDropdown
				defaultButtonText="Choose a country"
				buttonStyle={styles.dropdown}
				buttonTextStyle={styles.dropdown}
				data={countries}
				onSelect={country => handleSelect(country)}
			/>
			{Object.entries(weather).length === 0 ? null :
				<WeatherInfo weather={weather}/>
			}
		</View>
	 );
}

const styles = StyleSheet.create({
		 dropdownContainer: {
			alignItems: 'center',
		 },
		 dropdown: {
			backgroundColor: '#5e7997',
			borderRadius: 5,
			color: '#fff'
		 }
});

export default Dropdown;
