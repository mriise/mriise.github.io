import {html, render} from './src/lib/preact.js'
import MarkdownViewer from './src/components/MarkdownViewer.js'
import ThemeSelector from './src/components/ThemeSelector.js'
import GithubActivity from './src/components/GithubActivity.js';
// import HyperdriveViewer from './src/components/HyperdriveViewer.js'
import {articles} from './content/text/index.js'
import Test from './src/components/test.js'

// async function getSDK() {
// 	return await window.datSDK()
// }
const testHtml = 'The <strong>price</strong> is'
render(html`
<div class="profile">
	<div>
		<${ThemeSelector} />

		<picture>
			<source srcset="./content/images/pfp.webp" type="image/webp"/>
			<source srcset="./content/images/pfp.jpg" type="image/jpeg"/> 
			<img class="pfp" src="./content/images/pfp.webp" alt="This is a picture of me!"/>
		</picture>
		
		<div class="links">
			<a class="link" href="https://github.com/mriise"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>
			<a class="link" href="./content/publicKey.txt"><i class="fa fa-key" aria-hidden="true"></i> Public Key</a>
		</div>
	</div>
	<${GithubActivity}/>
</div>
<div class="content">
	<!-- <strong><a>Website is still under development! <br/> come back another time!</a></strong> -->
	<!-- <div class="panel">
		<p class="text-content">The last thing you would want ing your aaaaaaaaaaaaaaaaaaa</p>
	</div> -->
	<div class="panel"><${MarkdownViewer} src="./content/text/hello.md" /></div>
	${articles.map(article => html`<div class="panel"><${Test} article=${article} /></div>`)}
	<div class="panel"><${MarkdownViewer} src="./content/text/markdown.md" /></div>
	<div class="panel"><${MarkdownViewer} src="./content/text/discord_cdn.md" /></div>
	<div class="panel"><${MarkdownViewer} src="./content/text/shared_workers.md" /></div>
	<div class="panel"><${MarkdownViewer} src="./content/text/cursor.md" /></div>

</div>
`, document.body);

//<${HyperdriveViewer} SDK=${getSDK()}></${HyperdriveViewer}>

{/* <i class="fas fa-link"></i> */}

