import pica from '../podaci/pica'
const meni = document.getElementById('meni')

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
        <p>${pica[i].naziv}: ${pica[i].cena}</p>
      `
      div.dataset.sifra = pica[i].sifra
      div.onclick = () => {
        this.dodajPice(div.dataset.sifra)
      }
      meni.appendChild(div)
    }
  }

  zatvoriMeni() {
    meni.innerHTML = ''
  }

    reset() {
      this.getMeni()
      this.prikaziMeni()
      this.aktivaPorudzbina = {}
      console.log("Reset")
    }
  }

  dodajPice(sifraPica) {
    console.log(this.ime, 'sifra pica', sifraPica)
    // dodaje pice na aktivaPorudzbina
    // aktivaPorudzbina je asocijativni niz sifra: kolicina
  }
}
