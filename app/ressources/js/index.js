// react stuff
import React from 'react'
import ReactDom from 'react-dom'

//redux stuff
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import allReducers from './reducers/index.js'
//my app stuf
import FileManager from "./components/filemanager"


let fileNavData=[
	{
		label:"Mydrive",
		
		menuList:[
			{logo : "folder_open", name:"All File", notif:2, content_id:"menu1"},
			{logo : "folder_open", name:"test", action:()=>{console.log('coucou')}}
		]
	}
]
let menutemplate=[
	{
		name:"test", action:()=>{console.log('coucou menu')}
	}
]
let fileContentData={
	menu1:{

		title : "All File",
		folderList:[
			{name:"test", logo: "folder_open", numberFile:2, size:"14.05mb"},

		],
		fileList:[
			{name:"test", logo: "/assets/filelogo/pdf.png", size:"13kb", type:"PDF", menu:menutemplate},
			{name:"test2", logo: "/assets/filelogo/pdf.png", size:"13kb", type:"PDF", menu:menutemplate},
		]
	},
	
}

ReactDom.render(
	
	<div><FileManager navData={fileNavData} contentData={fileContentData} /></div>,
	
	document.getElementById('app')
)


