import React, {Component} from 'react'

// my app stuff
import M from 'materialize-css';
// lets rock !

class FileManagerCont extends Component {
	constructor(props) {
		super(props);
		this.state={currentContent:props.data.contentData[props.data.navData[0].menuList[0].content_id]}
		
			
	}
	componentDidMount(){
		let elems = document.querySelectorAll('.dropdown-trigger');
    	let instances = M.Dropdown.init(elems);
	}
	callNavAction(content_id=null, action=null){
		if(content_id){
			this.setState({currentContent:this.props.data.contentData[content_id]})
			return true
		}
		else if(action){
			return action()
		}
	}
	renderNav(){
		let render = []
		
		this.props.data.navData.map((menu,i)=>{
			render.push(<span key={"__k"+i} className="manager-nav-label">{menu.label}</span>)
			menu.menuList.map((item,j)=>{
				render.push(
					<a key={"__t"+j}  href="#" className="menu-item" onClick={()=>{this.callNavAction(item.content_id, item.action)}}>
						<div className="nav-d-inline mr-3">
							<i className="material-icons">{item.logo}</i>
						</div>
						<span>{item.name}</span>

						<span className={item.notif>0?"chip red lighten-5 float-right red-text ":"hide"}>{item.notif}</span>
					</a>
				)
			})
		})
		return render
	}
	renderFolder(){
		return this.state.currentContent.folderList.map((folder,i)=>{
			return(
				<div key={"__t"+i} className="col xl3 l6 m4 s6">
					<div className="card file-info">
						<div className="card-content">
							<div className="file-folder-content">
								<div className="file-folder-logo mr-3">
									<i className="material-icons">{folder.logo}</i>
								</div>
								<div className="file-folder-details">
									<div className="file-folder-name">{folder.name}</div>
									<div className="file-folder-size">{folder.numberFile +" file(s)"}, {folder.size}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		})
	}
	renderDropdown(index){
		return this.state.currentContent.fileList[index].menu.map((item, i)=>{
			return(
				<li key={"__t"+i} onClick={item.action}><a href="#">{item.name}</a></li>
			)
		})
	}
	renderFile(){
		return this.state.currentContent.fileList.map((file,i)=>{

			return(
				<div key={"__t"+i}  className="col xl3 l6 m3 s6">
					<div className="card file-info">
						<div className="card-content">
							<div className="file-content-logo grey lighten-4">
								<div className="fonticon dropdown-trigger" data-target={'dropdown'+i} >
									<i className="material-icons">more_vert</i>
								</div>
								<ul id={'dropdown'+i} className='dropdown-content'>
								    {this.renderDropdown(i)}
								</ul>
								<img className="recent-file" src={file.logo} height="38" width="30" alt="Card image cap"/>
							</div>
							<div className="file-details">
								<div className="file-name">{file.name}</div>
								<div className="file-size">{file.size}</div>
								<div className="file-type">{file.type} file</div>
							</div>
						</div>
					</div>
				</div>
			)
		})
	}
	renderContent(){
		return(
			<div className="content">
	        	<h6 className="title">{this.state.currentContent.title}</h6>
	        	<div className="file-manager-folder">
	        		<span className="manager-file-label">Folder</span>
	        		<div className="row">
						{this.renderFolder()}
	        		</div>
	        	</div>
	        	<div className="file-manager-file">
	        		<span className="manager-file-label">Files</span>
	        		<div className="row">
						{this.renderFile()}
	        		</div>
	        	</div>
	        </div>
		)
	}
	render(){
		return(
			<div className="col s12">
				<div className="file-manager-wrapper">
					<div className="file-manager-nav">
						<div className="input-field btn-wrapp">
							
							<label htmlFor="getFile" className="btn btn-block waves-effect waves-light mb-10">

								<i className="material-icons mr-3">add</i>
								<span>Add File</span>
							</label>
						
							<div className="getfileInput">
								<input type="file" id="getFile" />
							</div>
						</div>
						<div className="manager-nav-menu">
							{this.renderNav()}
						</div>
					</div>
					<div className="file-manager-content">
						
						<div className="file-manager-header">
					      
							<div className="input-field">
								<i className="material-icons prefix">search</i>
								<input type="search" id="search-file" placeholder="search-file"/>
							</div>
					      
					        
				        </div>
				        {this.renderContent()}
				
				   
					</div>
				</div>
			</div>
		)
	}

}

export default FileManagerCont