function Persona (nome, cognome, età, genere, interessi){

  this.nome = nome,
  this.cognome = cognome,
  this.età = età,
  this.genere = genere,
  this.interessi = interessi
  this.bio = function(){
    return `${this.nome}  ${this.cognome} è ${(this.genere === 'Maschio') ? 'un ragazzo' : 'una ragazza'} di ${this.età} anni, i suoi interessi sono ${(this.interessi.length === 2) ? this.interessi.join(' e ') : this.interessi.join(', ')}.`
  }
  this.saluta = function (){
    return `Yo! Sono ${this.nome}`
  }
}


let persona1 = new Persona('Luca', 'Gialli', 19, 'Maschio', ['calcio', 'ping pong', 'tennis'])
let persona2 = new Persona ('Maria', 'Dandi', 22, 'Femmina', ['danza', 'Instagram'])

console.log(persona1)
console.log(persona1.bio())
console.log(persona1.saluta())
console.log(persona2)
console.log(persona2.bio())
console.log(persona2.saluta())


function Animale (specie, nome, età){

  this.specie = specie
  this.nome = nome
  this.età = età
  this.bio = function (){
    return `Il ${this.specie} di nome ${this.nome} ha ${this.età} anni`
  }

}

let animale1 = new Animale('canide', 'pazzo', 50)
let animale2 = new Animale ('gattastro', 'Sole', 2)

console.log(animale1)
console.log(animale1.bio())
console.log(animale2.bio())
