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


function Studente (nome, materie){
  this.nome = nome
  this.materie = materie
  this.aggiungimateria = function(oggetto){
    for (i=0; i<this.materie.length;i++){
      if (this.materie[i].mat != oggetto.mat){
        this.materie.push(oggetto)
        break;
      }
    }
  }

  this.mediavoti = function(studente){

    let somma = 0
    let media = 0
    if (this.nome === studente){
      for (i=0; i<this.materie.length;i++){
        somma = somma+this.materie[i].voto
      }
      media = somma / this.materie.length
      
    }
  return media;
}
}

let studente1 = new Studente('Luca', [{mat: 'matematica', voto: 6}, {mat: 'geografia', voto: 6}, {mat: 'storia', voto: 8}])
let studente2 = new Studente('Maria', [{mat: 'matematica', voto: 6}, {mat: 'geografia', voto: 6}, {mat: 'storia', voto: 7}])
studente1.aggiungimateria({mat: 'chimica', voto: 4})
console.log(studente1)
console.log(studente1.mediavoti('Luca'))
console.log(studente2.mediavoti('Maria'))

function Utente (nome){
  this.nome = nome
  this.inviaMessaggio = function(dest,content){
    let mex = []
    let oggetto = {destinatario: dest, contenuto: content}
    this.mess.push(oggetto)
  }
  
  this.mess = []
}

let person1 = new Utente('Luca')
person1.inviaMessaggio('Mario', 'Ciao!')
person1.inviaMessaggio('Maria', 'We!')
person1.inviaMessaggio('Marco', 'Domani ci sei?')
console.log(person1)

let prenotaCinema = {

  film: [
    {
      titolo: 'Ciao a tutti amigos!',
      sala: 8,
      posti: 280,
      postiDisponibili: 20,
      biglietti: []
    },

    {
      titolo: 'Emerald',
      sala: 1,
      posti: 120,
      postiDisponibili: 119,
      biglietti: []
    },

    {
      titolo: 'okkkk',
      sala: 2,
      posti: 260,
      postiDisponibili: 250,
      biglietti: []
    },

    {
      titolo: 'Avengers',
      sala: 3,
      posti: 280,
      postiDisponibili: 5,
      biglietti: []
    },

    {
      titolo: 'One Piece Red',
      sala: 6,
      posti: 150,
      postiDisponibili: 120,
      biglietti: []
    }
  ],



  prenotazione: function(nome, filmastro, n){

    for (i=0; i<prenotaCinema.film.length;i++){
      if (filmastro === prenotaCinema.film[i].titolo){
        if (prenotaCinema.film[i].postiDisponibili >= n){
          let biglietto = {name: nome, nbiglietti: n}
          prenotaCinema.film[i].biglietti.push(biglietto)
          prenotaCinema.film[i].postiDisponibili = prenotaCinema.film[i].postiDisponibili-n
          return `Grazie ${nome}, hai prenotato ${n} biglietti per il film ${filmastro}.`
        }else{
          return `Sono rimasti solamente ${prenotaCinema.film[i].postiDisponibili} posti disponibili, ${n-prenotaCinema.film[i].postiDisponibili} in meno rispetto ai tuoi prenotati.` 
        }
      }
    }
  }
}

console.log(prenotaCinema.prenotazione('Luca', 'Avengers', 2))
console.log(prenotaCinema.film)

  