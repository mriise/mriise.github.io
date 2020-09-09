const main = async () => {
	console.log(window.location.hash)
	if(window.location.hash){
		let msg_name = window.location.hash.replace('#', '')
		let discord_html = await fetch(`https://cors-anywhere.herokuapp.com/cdn.discordapp.com/attachments/${msg_name}/index.html`,{mode: 'cors'})
		document.getElementById('body').innerHTML = await discord_html.text()
	}
}	
main()