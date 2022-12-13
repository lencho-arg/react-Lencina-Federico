import Valija from '../assets/images/valijaViajes.png'
import Bolso from '../assets/images/bolso-zauber-52-lts.jpg'
import Salomon from '../assets/images/zapatillassalomon.png'
import Stanley from '../assets/images/termoStanley.png'

export const Productos = [
    {
      id: "1",
      img: Valija,
      title: 'VALIJA DE VIAJES',
      category: 'Valijas',
      description: 'Carry on liviano',
      price: 25000,
      stock: 5,
    },
   {
      id: "2",
      img: Bolso,
      title: 'MOCHILAS DE VIAJE',
      category: 'Valijas',
      description: 'Bolso zauber 52-lts',
      price: 30000,
      stock: 3,
    },
    {
      id: "3",
      img: Salomon,
      title: 'ZAPATILLAS DE TREKKING',
      category: 'Zapatillas',
      description: 'Salomon Trekking',
      price: 30000,
      stock: 3,
    },
    {
      id: "4",
      img: Stanley,
      title: 'TERMO STANLEY',
      category: 'Termos',
      description: 'Stanley 1lt, Edicion Limitada Stargazing',
      price: 20000,
      stock: 5,
    }
]

export default Productos