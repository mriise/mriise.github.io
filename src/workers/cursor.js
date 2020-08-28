// var cursor = document.getElementById('cursor')
// const followCursor = (e) => { 
// 	let x = (e.clientX) + 'px'
// 	let y = (e.clientY) + 'px'
// 	window.requestAnimationFrame(() => {
// 		document.documentElement.style.setProperty('--cursor-x', x);
// 		document.documentElement.style.setProperty('--cursor-y', y);
// 	})
	
// }

self.onmessage = (message) => {
	console.log(message.data)
	if(message.data.id === 'document'){
		console.log(message.content)
	} else {
		console.log('what')
	}
}

