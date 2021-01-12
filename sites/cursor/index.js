var hovering = false

document.addEventListener('mousemove', (e) => { 
	window.requestAnimationFrame(() => {
		document.getElementById('cursor').style.setProperty('transform', `translate(${e.clientX-20}px, ${e.clientY-20}px)`);
		if (hovering) {
			document.getElementById('cursor').style.transform += 'scale(0.6)'
		}
	})
})

const mouseover = (e) => {
	document.getElementById('cursor').style.border = '4px dashed black'
	hovering = true
}
const mouseout = (e) => {
	document.getElementById('cursor').style.border = ''
	hovering = false
}
const attachCursorListeners = HTMLNode => {
	HTMLNode.addEventListener('mouseover', mouseover)
	HTMLNode.addEventListener('mouseout', mouseout)
}

attachCursorListeners(document.getElementById('hover'))