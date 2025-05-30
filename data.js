function Persona (nome, cognome, età, genere, interessi){

  Persona.nome = nome,
  Persona.cognome = cognome,
  this.età = età,
  this.genere = genere,
  this.interessi = interessi
  this.bio = function(){
    console.log(`${this.nome}  ${this.cognome} è ${(this.genere === 'Maschio') ? 'un ragazzo' : 'una ragazza'} di ${this.età} anni, i suoi interessi sono ${this.interessi.join(', ')}.`)
  }
  this.saluta = function (){
    console.log(`Yo! Sono ${this.nome}`)
  }


}

