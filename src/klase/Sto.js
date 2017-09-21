export default class Sto {
  constructor(ime) {
    this.slobodan = true
    this.porudzbine = []
    this.aktivaPorudzbina = {}
    this.ime = ime
  }

  getMeni() {
    // povlači stanje skladišta
  }

  prikaziMeni() {
    // render
  }

  reset() {
    // briše sva stanja, poziva getMeni i render
  }

  dodajPice() {
    // dodaje pice na aktivaPorudzbina
  }
}
