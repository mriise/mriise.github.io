import {html, Component} from '../lib/preact.js'

const themes = {
	dark: {
		primary: '#adadad',
		secondary: '#643cf2',
		background: '#1e1e1e',
		surface: '#282828',
		surfaceSecondary: '#383838',
		cursor: '#0CCA98'
	},
	light: {
		primary: '#000000',
		secondary: '#19a893',
		background: '#f2f2f2',
		surface: '#FFFFFF',
		surfaceSecondary: '#e3e3e3',
		cursor: '#000000'
	},
	coral: {
		primary: '#643cf2',
		secondary: '#0016d9',
		background: '#f2d589',
		surface: '#f79d84',
		surfaceSecondary: '#cbe0ff',
		cursor: '#e53242'
	}
	//0CCA98 pleasant teal
	//'#84f79d' super bright teal
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
			${Object.keys(themes).map(k => 
				html`
					<a theme=${k} class="theme-option" onClick=${this.changeTheme}>
						<div style=${"width: 20px; border:2px solid var(--secondary); margin:auto; height:20px; border-radius: 50%; pointer-events:none; cursor: pointer;" + `background-color: ${themes[k].background}; `}></div>
					</a>`
			)}
			<!-- <a class="link"><i class="far fa-circle"></i></a> -->
			<!-- <i class="fas fa-mouse-pointer"></i> -->
		</div>`
	}
}