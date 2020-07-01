import {html, render} from './src/preact.js'

import SDK from './src/hyperdrive.js'




(async function () {
	const {Hypercore, Hyperdrive, resolveName, getIdentity, deriveSecret, close} = await SDK()
	var drive = Hyperdrive('test');

	await new Promise(res => drive.once('ready', () => res()))
	console.log('drive ready')
	
	console.log('stat', await drive.stat('/'))

	console.log(await resolveName('dat://beakerbrowser.com'))
	// const url = `dat://${drive.key.toString('hex')}`

	// TODO: Save this for later!
	// console.log(`Here's your URL: ${url}`)

	// Check out the hyperdrive docs for what you can do with it
	// https://www.npmjs.com/package/hyperdrive#api
	await drive.writeFile('/example.txt', 'Hello World!')
	console.log('Written example file!', await drive.readdir('/'))
})();



render(html`
<div class="profile">
    <nav>fax</nav> 
    <p>this is dumb</p>
    <p>so is this</p>
</div>
<div class="content"> 
    <a href="/">Helloo!</a>
    <footer>feet!</footer>

</div>
`, document.body);

{/* <i class="fas fa-link"></i> */}

