import pica from '../podaci/pica'

export default class Sto {
  constructor(ime) {
    this.slobodan = true
    this.porudzbine = []
    this.aktivaPorudzbina = {}
    this.ime = ime
  }

  getMeni() {
    pica.map(p => {
      p.ima = (p.kolicina > 0) ? true : false
    })
    console.log('getMeni', pica)
  }

  prikaziMeni() {
    // render

  }

  reset() {
    // briše sva stanja, poziva getMeni i render
  }

  dodajPice(sifraPica) {
    // dodaje pice na aktivaPorudzbina
    // this.aktivaPorudzbina dodaj sifraPica
  }
}
