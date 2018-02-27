import { Button } from 'react-native';
import React, { Component } from 'react';


class Button extends Component
{
	render()
	{
		return 
		(
			<Button
			onPress={()=>console.log("suca")}	
			onPressIn={() => console.log('Press started')}
			onPressOut={() => console.log('Press ending')}
			title="Learn More"
			color="#841584"
			accessibilityLabel="Learn more about this purple button"
			/>
		)	
	}
}
export.module=Button
