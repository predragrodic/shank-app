import pica from '../podaci/pica'
const meniId = 'meni'

export default class Sto {
  constructor(ime) {
    this.slobodan = true
    this.porudzbine = []
    this.aktivaPorudzbina = {}
    this.ime = ime
    this.reset()
  }

  getMeni() {
    pica.map(p => {
      p.ima = (p.kolicina > 0) ? true : false
    })
    // console.log('getMeni', pica)
  }

  prikaziMeni() {
    // render
    for (var i = 0; i < pica.length; i++) {
      const div = document.createElement('div')
      div.innerHTML = `
        ${pica[i].naziv}: ${pica[i].cena}
      `
      div.dataset.sifra = pica[i].sifra
      div.onclick = () => this.dodajPice(div.dataset.sifra)
      document.getElementById(meniId).appendChild(div)
    }
  }

  zatvoriMeni() {
    document.getElementById(meniId).innerHTML = ''
  }

  //resetuje
  reset() {
    this.getMeni()
    this.prikaziMeni()
    this.aktivaPorudzbina = {}
    console.log("Reset")
  }

  dodajPice(sifraPica) {
    console.log(this.ime, 'sifra pica', sifraPica)
    // dodaje pice na aktivaPorudzbina
    // this.aktivaPorudzbina dodaj sifraPica
  }
}
