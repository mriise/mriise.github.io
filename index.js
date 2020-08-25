import {html, render} from './src/preact.js'
// import HyperdriveViewer from './src/components/HyperdriveViewer.js'


// async function getSDK() {
// 	return await window.datSDK()
// }

render(html`
<div class="profile">
	<div>
		<img src="./content/images/pfp.webp"/>
		<div class="links">
			<a class="link" href="https://github.com/mriise">GitHub</a>
			<a class="link" href="./content/publicKey.txt"><i class="fa fa-key" aria-hidden="true"></i> Public Key</a>
		</div>
	</div>
</div>
<div class="content">
	<strong><a>Website is still under development! <br/> come back another time!</a></strong>
	<!-- <footer></footer> -->
	<div class="panel">
		<p class="text_content">The last thing you would want ing your aaaaaaaaaaaaaaaaaaa</p>
	</div>
	<div class="panel">ee</div>
</div>
<div id="cursor"></div>
`, document.body);

var cursor = document.getElementById('cursor')
const followCursor = (e) => { 
	let x = (e.pageX - 10) + 'px'
	let y = (e.pageY - 10) + 'px'
	window.requestAnimationFrame(() => {
		cursor.style.transform = `translate3d(${x}, ${y}, 0)`
	})
	
}
document.addEventListener('mousemove', followCursor)


const mouseover = (e) => {
	cursor.style.height = 10 + 'px'
	cursor.style.width = 10 + 'px'
}
const mouseout = (e) => {
	cursor.style.height = 20 + 'px'
	cursor.style.width = 20 + 'px'
}
var links = document.querySelectorAll('a')
links.forEach((link) => {
	link.addEventListener('mouseover', mouseover)
	link.addEventListener('mouseout', mouseout)
})

//<${HyperdriveViewer} SDK=${getSDK()}></${HyperdriveViewer}>

{/* <i class="fas fa-link"></i> */}

