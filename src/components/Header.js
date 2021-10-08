import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {
	return ( 
		<View style={styles.container}>
			<Text style={styles.text}>What's the weather like today?</Text>
		</View>
	 );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#87aed8',
	},
	text: {
		color: '#fff',
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
	

export default Header;