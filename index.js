import {html, render} from './src/preact.js'
// import HyperdriveViewer from './src/components/HyperdriveViewer.js'


// async function getSDK() {
// 	return await window.datSDK()
// }


render(html`
<div class="profile">
	<div>
		<img src="./content/images/pfp.jpg"/>
		<div class="links">
			<a href="https://github.com/mriise">GitHub</a>
			<a href="./content/publicKey.txt"><i class="fa fa-key" aria-hidden="true"></i> Public Key</a>
		</div>
	</div>


    
</div>
<div class="content">
	<strong><a>Website is still under development! <br/> come back another time!</a></strong>
	<!-- <footer></footer> -->
</div>
`, document.body);

//<${HyperdriveViewer} SDK=${getSDK()}></${HyperdriveViewer}>

{/* <i class="fas fa-link"></i> */}

