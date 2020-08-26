import {html, Component} from '../preact.js'

// gist version here: https://gist.github.com/mriise/a256943b553ec8b56ac164f73635099a

export default class MarkdownViewer extends Component {

	constructor(props) {
		super();
		this.src = props.src
		this.state = { innerHtml: undefined };
	}

	componentDidMount() {
		let fetchMarkdown = async (src) => {
			let res = await fetch(src)
			return marked(await res.text())
		}
		fetchMarkdown(this.src).then(html => this.setState({ innerHtml: html}) )
	}

	render(props, state) {
		return html`
		${state.innerHtml ? 
			html`<span class="text-content" dangerouslySetInnerHTML=${ {__html: state.innerHtml} }/>` 
			: 'Loading' }`
	}

	// this only adds custom mouse listeners for links
	componentDidUpdate() {
		let mouseover = (e) => {
			cursor.classList.replace('mouse', 'pointer')
		}
		let mouseout = (e) => {
			cursor.classList.replace('pointer', 'mouse')
		}

		let links = document.querySelectorAll('a')
		links.forEach((link) => {
			link.addEventListener('mouseover', mouseover)
			link.addEventListener('mouseout', mouseout)
		})
	}
}