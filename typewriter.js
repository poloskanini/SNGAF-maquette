// Typewriter
const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
  deleteSpeed: 5
})
.changeDelay(30)
.typeString('Moi c\'est Nico')
.pauseFor(300)
.typeString(', <strong>Developpeur Web et Mobile </strong>')
.typeString('Full-Stack')
.pauseFor(2000)
.deleteChars('10')
.typeString('<span style="color: #CC5634">HTML</span>')
.pauseFor(1400)
.deleteChars('4')
.typeString('<span style="color: #459ACD"> CSS</span')
.pauseFor(1400)
.deleteChars('3')
.typeString('<span style="color: #ff6910"> JavaScript</span')
.pauseFor(1400)
.deleteChars('10')
.typeString('<span style="color: #e056fd"> PhP</span')
.pauseFor(1200)
.deleteChars('3')
.typeString('<span style="color: #E84F35"> SWIFT</span')
.pauseFor(1000)
.deleteChars('5')
.typeString('<span style="color: #0D9FC9"> React Native</span')
.pauseFor(800)
.deleteChars('12')
.typeString('...')
.start()