import {html, Component} from '../lib/preact.js'

// gist version here: https://gist.github.com/mriise/a256943b553ec8b56ac164f73635099a

const themes = {
	dark: {
		primary: '#ff00ff',
		secondary: '#0CCA98',
		background: '#1e1e1e',
		surface: '#282828',
		surfaceSecondary: '#383838',
		cursor: '#0CCA98'
	},
	light: {
		primary: '#000000',
		secondary: '#8B8989',
		background: '#FFFFFF',
		surface: '#D0CFCF',
		surfaceSecondary: '#b2b1b1',
		cursor: '#000000'
	},
	coral: {
		primary: '#643cf2',
		//'#84f79d',
		secondary: '#f79d84',
		background: '#f2d589',
		surface: '#f79d84',
		surfaceSecondary: '#cbe0ff',
		cursor: '#e53242'
	}
}

export default class MarkdownViewer extends Component {

	constructor(props) {
		super();
		let storedTheme = localStorage.getItem('theme')
		storedTheme = storedTheme === 'null' ? null : storedTheme
		let useLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches
		let preferedTheme = useLightTheme ? 'light' : 'dark'

		this.state = { theme: storedTheme || preferedTheme }
		this.loadTheme(this.state.theme)
	}

	loadTheme(themeName) {
		let newTheme = themes[themeName]
		Object.keys(newTheme).map(k => {
			document.documentElement.style.setProperty(`--${k}`, newTheme[k])
		})
	}

	changeTheme(e) {
		let themeName = e.target.getAttribute('theme')
		localStorage.setItem('theme', themeName)
		let newTheme = themes[themeName]
		Object.keys(newTheme).map(k => {
			document.documentElement.style.setProperty(`--${k}`, newTheme[k])
		})
	}

	render(props, state) {
		return html`
		<div class="theme-selector">
			${Object.keys(themes).map(k => html`<a theme=${k} class="theme-option" onClick=${this.changeTheme}>
			<div style=${"width: 20px; border:2px solid var(--secondary); margin:auto; height:20px; border-radius: 50%; pointer-events:none;" + `background-color: ${themes[k].background}; `}>
				
			</div>
			</a>`)}
			<!-- <a class="link"><i class="far fa-circle"></i></a> -->
			<!-- <i class="fas fa-mouse-pointer"></i> -->
		</div>`
	}
}