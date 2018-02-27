import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet,View,TextInput } from 'react-native';
import { Button } from 'react-native';

export default class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			titleText: "Bird's Nest",
			bodyText: 'This is not really a bird nest.',
			messageText: 'this is react-native!.',
			text: 'simple test'
		};
	}


	render() {
		return (
			<View style ={{flex:1}}>
				<View style ={{flex:3,height:300,backgroundColor: 'red'}}>
					<View style={{margin: 50, backgroundColor: 'yellow'}}>

						<Text>
							{"\n"}
							{this.state.bodyText}
							{"\n"} {this.state.messageText}
						</Text>

						<Button 
							onPress={()=>console.log(this.state.text)}	
							title="Touch me!"
							color="orange"
							accessibilityLabel="Learn more about this purple button"
						/>

						<TextInput
							placeholder={"Type something here!"}
							onChangeText={(text) => this.setState({text})}
						/>
						<Text style={{padding: 10, fontSize: 42}}>
							{this.state.text}
						</Text>
					</View>
				</View>

				<Text style={{marginTop:0}}>
					{"\n"}
					{this.state.text}
				</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent("AwesomeProject4",()=> HelloWorldApp);
