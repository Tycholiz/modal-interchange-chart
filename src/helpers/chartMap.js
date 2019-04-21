const key = {
	c: { c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', a: 'a', b: 'b' },
}

const pitch = {
	sharp: '♯',
	flat: '♭'
}

const chord = {
	major: 'maj',
	minor: 'min',
	aug: 'aug',
	dim: 'dim'
}

const seventh = {
	majSeventh: 'maj7',
	seventh: '7'
}


function createValue(key, pitch, chord, seventh) {
	let value = `${key}${pitch}${chord}${seventh}`
	return value
}

console.log(createValue(key.c.c, pitch.sharp, chord.major, seventh.seventh))