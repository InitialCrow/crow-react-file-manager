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

// test zone
let getFile = ()=>{

	let fileList=[
			{name:"test+1", logo: "/assets/filelogo/pdf.png", size:"13kb", type:"PDF", menu:menutemplate},
			{name:"test+2", logo: "/assets/filelogo/pdf.png", size:"13kb", type:"PDF", menu:menutemplate},
		]
	let folderList=[
		{name:"test+1", logo: "folder_open", numberFile:2, size:"14.05mb", action:()=>getFile()},

	]
	let obj = {fileList : fileList, folderList:folderList}

	return  obj
}
//end test zone
let fileNavData=[
	{
		label:"Mydrive",
		
		menuList:[
			{logo : "folder_open", name:"All File", notif:2, content_id:"menu1"},
			{logo : "folder_open", name:"test", action:()=>console.log('coucou')}
		]
	}
]
let menutemplate=[
	{
		name:"test", action:()=>console.log('coucou menu')
	}
]
let fileContentData={
	menu1:{

		title : "All File",
		folderList:[
			{name:"test", logo: "folder_open", numberFile:2, size:"14.05mb", action:()=>getFile()},

		],
		fileList:[
			{name:"test",  classLogo:"flaticon-001-files-98", size:"13kb", type:"PDF", menu:menutemplate},
			{name:"test2", logo: "/assets/filelogo/pdf.png", size:"13kb", type:"PDF", menu:menutemplate},
		]
	},
	
}
let moreToolMenu=[
	{logo:"person_outline", action:()=>console.log("couou")}, {logo:"delete", action:()=>console.log("couou")},
	{logo:"more_vert", action:()=>console.log("couou")}
]

ReactDom.render(
	
	<div><FileManager navData={fileNavData} contentData={fileContentData} moreToolMenu={moreToolMenu} /></div>,
	
	document.getElementById('app')
)


