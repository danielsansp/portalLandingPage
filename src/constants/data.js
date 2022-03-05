import images from './images';

const burgers = [
  {
    title: 'Portal',
    price: '$11.500',
    tags: '150 gr de carne artesanal, queso, tocineta, lechuga, tomate',
  },
  {
    title: 'Portazo',
    price: '$19.000',
    tags: 'Dos carnes de 150 gr de carne artesanal, doble queso, tocineta, lechuga, tomate',
  },
  {
    title: 'Pollo',
    price: '$11.500',
    tags: 'Filete de pollo, queso, tocineta, lechuga, tomate, cebolla',
  },
  {
    title: 'Ranchera',
    price: '$15.000',
    tags: '150 gr de carne artesanal, salchicha ranchera en salsa BB, queso, tocineta, lechuga, tomate',
  },
  {
    title: 'Queso',
    price: '$12.000',
    tags: '150 gr de carne artesanal, triple queso, tocineta',
  },
  {
    title: 'Junior',
    price: '$9.000',
    tags: '100 gr de carne artesanal, queso, tocineta, lechuga, tomate',
  },
  {
    title: 'Norteña',
    price: '$15.500',
    tags: '120 gr de carne desmechada con picante y frijol sofritot, tocineta, queso, aros de cebolla,/n pepino agridulces',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { burgers, cocktails, awards };
