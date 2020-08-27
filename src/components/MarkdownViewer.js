import {html, Component} from '../lib/preact.js'

// gist version here: https://gist.github.com/mriise/a256943b553ec8b56ac164f73635099a

export default class MarkdownViewer extends Component {

	constructor(props) {
		super();
		this.src = props.src
		this.sanitizeOpt = {
			allowedTags: [ 'b', 'i', 'ul', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'em', 'strong', 'a' ],
		}
		this.state = { innerHtml: undefined };
	}

	componentDidMount() {
		let fetchMarkdown = async (src) => {
			let res = await fetch(src)
			return marked(await res.text())
		}
		fetchMarkdown(this.src).then(html => this.setState({ innerHtml: sanitizeHtml(html, this.sanitizeOpt)}) )
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