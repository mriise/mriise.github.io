import {html, Component} from '../preact.js'

export default class HyperdriveViewer extends Component {


	drive
	constructor(props) {
		super();
		this.state = {content: ''}

		//destructure SDK from props
		const {SDK} = props
		this.SDK = SDK
		this.readySDK()

	}

	async readySDK() {
		const {Hypercore, Hyperdrive, resolveName, getIdentity, deriveSecret, close} = await this.SDK	

		let drive = Hyperdrive('test')
		this.drive = drive
		await drive.ready()
		console.debug('drive ready')
		
		// console.log('stat', await drive.stat('/'))
	
		await drive.writeFile('/example.txt', 'Hello World!')
		console.debug('Written example file!', await drive.readdir('/'))
	}

	async readExampleTxt(){

		await this.drive.ready()
		const data = await this.drive.readFile('/example.txt')
		this.setState({content: data.toString()})
		console.debug('read from file:', this.state.content)
	}
	
	// Lifecycle: Called whenever our component is created
	componentDidMount() {
		// update time every second

	}
	
	// Lifecycle: Called just before our component will be destroyed
	componentWillUnmount() {
		// stop when not renderable

	}
	
	render(){
		return html`
		<button onclick="${() => this.readExampleTxt()}">read text!</button>
		<br/>
		${this.state.content}
		`
	}
	}