'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SectionList,
  TouchableOpacity,
} from 'react-native';

class HomeView extends Component {
	static defaultProps = {
	  abc1: '在那遥远的地方',
	}
	static propTypes = {
	  abc1: React.PropTypes.string,
	}
  render() {
    return (
    	<View style={styles.bigViewStyle}>
    	<SectionList
       	renderItem={(aaa) => this.renderItemMethod(aaa)}
		ItemSeparatorComponent={()=><View style={styles.lineStyle}></View>}
       	renderSectionHeader={(sections) => this._renderSectionHeader(sections.section.title)}
       	ListHeaderComponent={()=><Text>大大的头</Text>}
       	ListFooterComponent={()=><Text>小小尾</Text>}
       	ListEmptyComponent={()=><View/>}
       	showsVerticalScrollIndicator={false}
       	contentContainerStyle={styles.listStyle}
		sections={[ // homogenous rendering between sections
         {data: ['李','中','强','李','中','强','李','中','强','李','中','强','李','中','强','李','中','强','李','中','强','李','中','强',], title: 'aaaaa'},
         {data: ['2','22','222','2','22','222','2','22','222','2','22','222','2','22','222','2','22','222','2','22','222','2','22','222',], title: 'bbbbb'},
         {data: ['3','33','333','3','33','333','3','33','333','3','33','333','3','33','333','3','33','333','3','33','333','3','33','333',], title: 'ccccc'},
       	]}
     	/>
     	</View>
		)}
	_renderSectionHeader(ss){
		console.log(ss);
		return <Text style={styles.headViewStyle}> 头{ss} ==</Text>;
	}
    changeName(a){
    	if (this.props.blockMethod) {
    		this.props.blockMethod(a);
    	}
    }
	renderItemMethod(aaa){
		return <View style={styles.cellStyle}>
			<TouchableOpacity onPress={()=>this.changeName(aaa.item)}>
			<Image
			  style={styles.imagStyle}
			  source={{uri: 'https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png'}}
			/>

			<Text style={styles.textStyle}>{aaa.item}+{this.props.abc1}</Text>
			</TouchableOpacity>
			</View>;
	}


}
HomeView.defaultProps = {
  abc1: '测试用的',
}
HomeView.propTypes = {
  abc1: React.PropTypes.string,
  blockMethod: React.PropTypes.func,
}

const styles = StyleSheet.create({
	listStyle:{
		flexDirection: 'row',//设置横向布局
    flexWrap: 'wrap',  //设置换行显示
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
	cellStyle:{
		flexDirection:'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop:10,
		marginLeft:10,
		marginRight:10,
		width:80,
		backgroundColor:'#bffff2',
	},
	bigViewStyle:{
		flex:1,
		margin:20,
		backgroundColor:'#f6f6f6',
	},
	headViewStyle:{
		backgroundColor:'yellow',
		width:300,
		height:44,
	},
	lineStyle:{
		height: 2,
		backgroundColor:'#ff6e40',
		marginLeft: 10,
		marginRight:10,
	},
	imagStyle:{
		height:50,
		marginLeft:3,
		marginRight:3,
		marginTop:3,
		resizeMode: 'contain'
	},
	textStyle:{
		marginLeft:3,
		marginRight:3,
		marginTop:3,
		marginBottom:10,
		backgroundColor:'#cccfff'
	},
	input:{
		marginTop:40,
	}
});
module.exports = HomeView;
