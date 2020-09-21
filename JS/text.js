
      
function myFunction() {
    var element = document.getElementById("menu");
    element.classList.toggle("mystyle");
  }
     
     // ——————————————————————————————————————————————————
  // TextScramble
  // ——————————————————————————————————————————————————
  
  class TextScramble {
   constructor(el) {
     this.el = el
     this.chars = '!<>-_\\/[]{}—=+*^?#________'
     this.update = this.update.bind(this)
   }
   setText(newText) {
     const oldText = this.el.innerText
     const length = Math.max(oldText.length, newText.length)
     const promise = new Promise((resolve) => this.resolve = resolve)
     this.queue = []
     for (let i = 0; i < length; i++) {
       const from = oldText[i] || ''
       const to = newText[i] || ''
       const start = Math.floor(Math.random() * 40)
       const end = start + Math.floor(Math.random() * 40)
       this.queue.push({ from, to, start, end })
     }
     cancelAnimationFrame(this.frameRequest)
     this.frame = 0
     this.update()
     return promise
   }
   update() {
     let output = ''
     let complete = 0
     for (let i = 0, n = this.queue.length; i < n; i++) {
       let { from, to, start, end, char } = this.queue[i]
       if (this.frame >= end) {
         complete++
         output += to
       } else if (this.frame >= start) {
         if (!char || Math.random() < 0.28) {
           char = this.randomChar()
           this.queue[i].char = char
         }
         output += `<span class="dud">${char}</span>`
       } else {
         output += from
       }
     }
     this.el.innerHTML = output
     if (complete === this.queue.length) {
       this.resolve()
     } else {
       this.frameRequest = requestAnimationFrame(this.update)
       this.frame++
     }
   }
   randomChar() {
     return this.chars[Math.floor(Math.random() * this.chars.length)]
   }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
  'Cyber Crew',
  'Cyber Crew',
  ]
  
  const el = document.querySelector('.text')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
   fx.setText(phrases[counter]).then(() => {
     setTimeout(next, 800)
   })
   counter = (counter + 1) % phrases.length
  }
  
  next()
  
  
  ////////////////////////////////////////Mention text//////////////////////////////////
  function typeEffect(element, speed) {
   var text = element.innerHTML;
   element.innerHTML = "";
   
   var i = 0;
   var timer = setInterval(function() {
     if (i < text.length) {
       element.append(text.charAt(i));
       i++;
     } else {
       clearInterval(timer);
     }
   }, speed);
  }
  
  
  // application
  var speed = 75;
  var h4 = document.querySelector('h4');
  
  var delay = h4.innerHTML.length * speed + speed;
  
  // type affect to header
  typeEffect(h4, speed);
  
  
  ///////////MENU TRIGGER/////////////
  $(document).ready(function(){
     $('.menu-trigger').click(function() {
       $('.menu').toggle("slide");
     });
  });
  