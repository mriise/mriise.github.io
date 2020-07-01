import {html, render} from './src/preact.js'
import HyperdriveViewer from './src/components/HyperdriveViewer.js'


async function getSDK() {
	return await window.datSDK()
}


render(html`
<div class="profile">
    <nav>fax</nav> 
    <p>this is dumb</p>
    <p>so is this</p>
</div>
<div class="content"> 
	<a href="/">Helloo!</a>
	<${HyperdriveViewer} SDK=${getSDK()}>
		
	</${HyperdriveViewer}>
	<footer>feet!</footer>
</div>
`, document.body);

{/* <i class="fas fa-link"></i> */}

