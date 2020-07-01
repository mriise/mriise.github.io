import {html, render} from './src/preact.js'
import HyperdriveViewer from './src/components/HyperdriveViewer.js'


async function getSDK() {
	return await window.datSDK()
}


render(html`
<div class="profile">
    <nav>
		<div>
			<img src="./content/images/pfp.jpg"/>
			<div class="links">
				<p>fax</p>
				<p>Check out my github!</p>
			</div>
			

		</div>


	</nav> 
    
</div>
<div class="content"> 
	<a href="/">Helloo!</a>
	<!-- <${HyperdriveViewer} SDK=${getSDK()}>
		
	</${HyperdriveViewer}> -->
	<footer>feet!</footer>
</div>
`, document.body);

{/* <i class="fas fa-link"></i> */}

