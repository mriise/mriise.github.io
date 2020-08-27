import {html, render} from './src/lib/preact.js'
import MarkdownViewer from './src/components/MarkdownViewer.js'
// import HyperdriveViewer from './src/components/HyperdriveViewer.js'


// async function getSDK() {
// 	return await window.datSDK()
// }
const testHtml = 'The <strong>price</strong> is'
render(html`
<div class="profile">
	<div>
		<img src="./content/images/pfp.webp"/>
		<div class="links">
			<a class="link" href="https://github.com/mriise"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>
			<a class="link" href="./content/publicKey.txt"><i class="fa fa-key" aria-hidden="true"></i> Public Key</a>
		</div>
	</div>
</div>
<div class="content">
	<!-- <strong><a>Website is still under development! <br/> come back another time!</a></strong> -->
	<!-- <div class="panel">
		<p class="text-content">The last thing you would want ing your aaaaaaaaaaaaaaaaaaa</p>
	</div> -->
	<div class="panel"><${MarkdownViewer} src="./content/text/hello.md" /></div>
	<div class="panel"><${MarkdownViewer} src="./content/text/markdown.md" /></div>
	
</div>
<div id="cursor" class="mouse"></div>

`, document.body);

var cursor = document.getElementById('cursor')
const followCursor = (e) => { 
	let x = (e.clientX) + 'px'
	let y = (e.clientY) + 'px'
	window.requestAnimationFrame(() => {
		document.documentElement.style.setProperty('--cursor-x', x);
		document.documentElement.style.setProperty('--cursor-y', y);
	})
	
}
document.addEventListener('mousemove', followCursor)


const mouseover = (e) => {
	cursor.classList.replace('mouse', 'pointer')
}
const mouseout = (e) => {
	cursor.classList.replace('pointer', 'mouse')
}
var links = document.querySelectorAll('.link')
links.forEach((link) => {
	link.addEventListener('mouseover', mouseover)
	link.addEventListener('mouseout', mouseout)
})

//<${HyperdriveViewer} SDK=${getSDK()}></${HyperdriveViewer}>

{/* <i class="fas fa-link"></i> */}

