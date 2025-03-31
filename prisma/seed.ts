import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
  //drinks seed!!
/* const products = [
  { name: 'Staropramen csapolt', unit: '5 dl', price: 890 },
  { name: 'Borsodi csapolt', unit: '5 dl', price: 690 },
  { name: 'Mort Subite csapolt', unit: '5 dl', price: 1490 },
  { name: 'Hoegaarden csapolt', unit: '5 dl', price: 1490 },
  { name: 'Heineken csapolt', unit: '5 dl', price: 990 },
  { name: 'Törley Irsai Olivér', unit: '1 dl', price: 400 },
  { name: 'Törley Rosé', unit: '1 dl', price: 400 },
  { name: 'Kisfröccs', unit: '2 dl', price: 450 },
  { name: 'Nagyfröccs', unit: '3 dl', price: 850 },
  { name: 'Hosszúlépés', unit: '3 dl', price: 550 },
  { name: 'Házmester', unit: '5 dl', price: 1200 },
  { name: 'Vice házmester', unit: '5 dl', price: 950 },
  { name: 'Borsodi Citrom', unit: '5 dl', price: 600 },
  { name: 'Borsodi Grapefruit', unit: '5 dl', price: 600 },
  { name: 'Stella Artois alkoholmentes', unit: '5 dl', price: 600 },
  { name: 'Staropramen', unit: '5 dl', price: 790 },
  { name: 'Stella Artois', unit: '5 dl', price: 690 },
  { name: 'Jim Bean Bourbon', unit: '0,4 dl', price: 900 },
  { name: 'Johnnie Walker', unit: '0,4 dl', price: 990 },
  { name: 'Ballantines', unit: '0,4 dl', price: 690 },
  { name: 'Captain Morgan Black', unit: '0,4 dl', price: 890 },
  { name: 'Beefeter Gin', unit: '0,4 dl', price: 890 },
  { name: 'Tequila Sierra', unit: '0,4 dl', price: 890 },
  { name: 'Jägermeister', unit: '0,4 dl', price: 990 },
  { name: 'Finlandia', unit: '0,4 dl', price: 890 },
  { name: 'Jack Daniels Honey', unit: '0,4 dl', price: 1050 },
  { name: 'Bacardi Carta Blanca', unit: '0,4 dl', price: 890 },
  { name: 'Bombay Saphire', unit: '0,4 dl', price: 1090 },
  { name: 'Kalumba', unit: '0,4 dl', price: 700 },
  { name: 'Grey Goose', unit: '0,4 dl', price: 1990 },
  { name: 'Tubi 60', unit: '0,4 dl', price: 1990 },
  { name: 'Diplomático', unit: '0,4 dl', price: 1990 },
  { name: 'Unicum', unit: '0,4 dl', price: 790 },
  { name: 'Malibu', unit: '0,4 dl', price: 850 },
  { name: 'Tátratea', unit: '0,4 dl', price: 1090 },
  { name: 'Panyolai', unit: '0,4 dl', price: 1200 },
  { name: 'Jameson', unit: '0,4 dl', price: 1090 },
  { name: 'Jameson IPA', unit: '0,4 dl', price: 1250 },
  { name: 'Martini', unit: '1 dl', price: 1190 },
  { name: 'Aperol', unit: '1 dl', price: 990 },
  { name: 'Coca Cola', unit: '5 dl', price: 490 },
  { name: 'Coca Cola Zero', unit: '5 dl', price: 490 },
  { name: 'Kinley Tonic', unit: '5 dl', price: 490 },
  { name: 'Kinley Gyömbér', unit: '5 dl', price: 490 },
  { name: 'Fanta', unit: '5 dl', price: 490 },
  { name: 'Cappy Barack', unit: '5 dl', price: 490 },
  { name: 'Cappy Körte', unit: '5 dl', price: 490 },
  { name: 'Cappy Narancs', unit: '5 dl', price: 490 },
  { name: 'Cappy Alma', unit: '5 dl', price: 490 },
  { name: 'Fuze Tea', unit: '5 dl', price: 490 },
  { name: 'Hell', unit: '2,5 dl', price: 490 },
  { name: 'Sommersby', unit: '5 dl', price: 700 },
  { name: 'Whisky-Cola', unit: '4 dl', price: 1500 },
  { name: 'Gin-Tonic', unit: '4 dl', price: 1500 },
  { name: 'Vodka szóda', unit: '4 dl', price: 1500 },
  { name: 'Vodka narancs', unit: '4 dl', price: 1500 },
  { name: 'Cuba Libre', unit: '4 dl', price: 1500 },
  { name: 'Mojito', unit: '4 dl', price: 1500 },
  { name: 'Malibu alma', unit: '4 dl', price: 1500 }
];
async function main() {
  for (const product of products) {
    await prisma.products.create({
      data: {
        productName: product.name,
        unit: product.unit,
        price: product.price,
        productGroup: {
          connect:{
            id: 1
          }
        }
      },
    });
  }
} */

//foods seed!!

/* const foods = [
  { name: 'Melegszendvics toast kenyérből', unit: '1 adag', price: 500 },
  { name: 'Melegszendvics baguette', unit: '1 adag', price: 850 },
  { name: 'Sült krumpli', unit: '1 adag', price: 700 },
  { name: 'Sült kolbász', unit: '1 adag', price: 1000 },
  { name: 'Sült krumpli és sült kolbász', unit: '1 adag', price: 1500 },
  { name: 'Zsíros kenyér', unit: '1 adag', price: 200 },
  { name: 'Sós mogyoró', unit: '1 adag', price: 400 },
  { name: 'Chips', unit: '1 adag', price: 650 },
  { name: 'Popcorn', unit: '1 adag', price: 400 }
];
async function main() {
  for (const product of foods) {
    await prisma.products.create({
      data: {
        productName: product.name,
        unit: product.unit,
        price: product.price,
        productGroup: {
          connect:{
            id: 2
          }
        }
      },
    });
  }
} */



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
