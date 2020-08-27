import {html, Component} from '../lib/preact.js'

// gist version here: https://gist.github.com/mriise/a256943b553ec8b56ac164f73635099a

const themes = {
	dark: {
		primary: '#ca00ff',
		secondary: '#ff0062',
		background: '#1e1e1e',
		surface: '#282828',
		surfaceSecondary: '#383838',
		cursor: '#3500D3'
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
		secondary: '#84f79d',
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
		let useLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches
		let preferedTheme = useLightTheme ? 'light' : 'dark'
		
		this.state = { theme: storedTheme || preferedTheme }
		this.loadTheme(this.state.theme)
		console.log(this.loadTheme)
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
			<a theme='light' class="link" onClick=${this.changeTheme}>light</a>
			<a theme='dark' class="link" onClick=${this.changeTheme}>dark</a>
			<a theme='coral' class="link" onClick=${this.changeTheme}>coral</a>
			<!-- <a class="link"><i class="far fa-circle"></i></a> -->
			<!-- <i class="fas fa-mouse-pointer"></i> -->
		</div>`
	}
}