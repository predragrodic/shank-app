import pica from './podaci/pica'
import Sto from './klase/Sto'

// inicijalizujemo objekte

const sto1 = new Sto('Sto u uglu')
const sto2 = new Sto('Separe')
sto1.slobodan = false

// probamo metode

sto1.getMeni()
sto1.prikaziMeni()
// sto1.zatvoriMeni()
// sto2.prikaziMeni()
