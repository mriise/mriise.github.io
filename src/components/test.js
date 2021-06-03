import {html, Component} from '../lib/preact.js'
// gist version here: https://gist.github.com/mriise/a256943b553ec8b56ac164f73635099a

export default class Test extends Component {

	constructor(props) {
		super();
		this.article = props.article
		this.sanitizeOpt = {
			allowedTags: [ 'b', 'i', 'ul', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'em', 'strong', 'a', 'p'],
		}
		this.state = { innerHtml: undefined };
	}

	componentDidMount() {
		let fetchMarkdown = async (src) => {
			let res = await fetch(src)
			return marked(await res.text())
		}
		fetchMarkdown(this.article.src).then(html => this.setState({ innerHtml: sanitizeHtml(html, this.sanitizeOpt)}) )
	}

	render(props, state) {
		return html`
		${state.innerHtml ? 
			html`<span class="text-content" dangerouslySetInnerHTML=${ {__html: state.innerHtml} }/>` 
			: 'Loading' }` //TODO: loading animation
	}
}