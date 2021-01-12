import {html, Component} from '../lib/preact.js'

const ghApiURL = 'https://api.github.com/'
export default class GithubActivity extends Component {

	constructor(props) {
		super();
		this.state = { };
	}

	componentDidMount() {
		let getEvents = async () => {
			let res = await fetch(ghApiURL + 'users/mriise/events/public')
			return res.json()
		}
		getEvents().then(res => this.setState(res))
	}

	redirectAPItoHTML(e) {
		e.preventDefault()
		let apiURL = e.currentTarget.getAttribute('href')
		
		fetch(apiURL)
		.then(res => res.json())
		.then(res => window.location.assign(res.html_url))		
		return false
	}

	render(props, state) {
		return html`
		<div class="gh-events">
			<ul>
				${Object.keys(this.state).slice(0, 10).map(k => {
					let ghevent = this.state[k]
					switch (ghevent.type) {
						case 'PushEvent':
							let commits = ghevent.payload.commits
							for (let commit in commits) {
								commits[commit].html_url = ''
								commits[commit].shortSha = commits[commit].sha.substring(0, 7)
							}
							return html`
								<li>
									<i style="font-size: 12px;">${new Date(ghevent.created_at).toLocaleDateString()}</i> commit <a href=${commits[0].url} onclick=${this.redirectAPItoHTML}><i>${commits[0].shortSha}</i></a>${commits.slice(1).map( commit => html`, <a href=${commit.url} onclick=${this.redirectAPItoHTML}><i>${commit.shortSha}</i></a>`)} pushed to <a href=${ghevent.repo.url} onclick=${this.redirectAPItoHTML}>${ghevent.repo.name}</a>
								</li>`
						case 'IssueCommentEvent':
							return html`
								<li>
									<i style="font-size: 12px;">${new Date(ghevent.created_at).toLocaleDateString()}</i> <a href=${ghevent.payload.comment.html_url}>comment</a> on issue <a href=${ghevent.payload.issue.html_url}>${ghevent.repo.name}</a>
								</li>`
						case 'IssuesEvent':
							return html`
								<li>
									<i style="font-size: 12px;">${new Date(ghevent.created_at).toLocaleDateString()}</i> ${ghevent.payload.action} <a href=${ghevent.payload.issue.html_url}>issue</a> on <a href=${ghevent.repo.url} onclick=${this.redirectAPItoHTML}>${ghevent.repo.name}</a>
								</li>`
						default:
							break;
					}
				})}
				<li>
					see the rest <a href="https://github.com/mriise?tab=repositories">here</a>...
				</li>
			</ul>
		</div>`
	}
}
