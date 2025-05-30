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

  this.invecchia = function (){
    this.età++;
    return età;
  }

}

let animale1 = new Animale('canide', 'pazzo', 50)
let animale2 = new Animale ('gattastro', 'Sole', 2)

console.log(animale1)
console.log(animale2.bio())
animale1.invecchia();
console.log(animale1.età)
console.log(animale1.bio())

function Libro (titolo, autore, anno, genere){

this.titolo = titolo
this.autore = autore
this.anno = anno
this.genere = genere

this.bio = function (){
  return `Il libro ${this.titolo} di ${this.autore} è un ${this.genere} uscito nel ${this.anno}`
}
}

let libro1 = new Libro('1984', 'George Orwell', 1949,'romanzo' )
console.log(libro1.bio())

let biblioteca = {

  libri: [
    {
      titolo: '1948',
      autore: 'George Orwell',
      anno: 1949
    },


    {
      titolo: 'Spuzzoweb',
      autore: 'Il rudamaio',
      anno: 2002
    },

    {
      titolo: 'Cronaca di una morte annunciata',
      autore: 'Gabriel Marquez',
      anno: 1989
    },

    {
      titolo: 'Monster 2',
      autore: 'Urasawa',
      anno: 2007
    }
  ],

  cercaPerAutore: function (autore){

    let libri = []
    for (i=0; i<biblioteca.libri.length;i++){
      if (autore != biblioteca.libri[i].autore){
        console.log('Libro non presente')
      }else if (autore === biblioteca.libri[i].autore){
        libri.push(biblioteca.libri[i].titolo)
      }
    }
    
    if (libri.length < 2){
      return libri;
    }else if (libri.length >=2){
      libri.join(', ')
      return `I libri dell' autore da te cercato sono ${libri}`
    }
  },

  aggiungiLibro: function(libro){
    for (i=0; i<biblioteca.libri.length;i++){
      if (libro.titolo === biblioteca.libri[i].titolo){
        return 'Libro già presente'
      }
    }
    biblioteca.libri.push(libro)
  },
  
}

console.log(biblioteca.cercaPerAutore('George Orwell'))
biblioteca.aggiungiLibro({
      titolo: 'Monster 3',
      autore: 'Urasawa',
      anno: 2007
    })
biblioteca.aggiungiLibro({
      titolo: 'PAZZO',
      autore: 'George Orwell',
      anno: 2007
    })
console.log(biblioteca.libri)