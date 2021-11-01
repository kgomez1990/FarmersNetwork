const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Fruit' },
    { name: 'Vegetables' },
    { name: 'Meat' },
    { name: 'Jarred and Canned Goods' },
    { name: 'Plants and Seeds' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Skirt Steak - 9oz',
      description:
        'Antibiotic free Angus Beef Outside Skirt Steak',
      image: 'Skirt-Steak.jpg',
      category: categories[2]._id,
      price: 13.28,
      quantity: 7
    },
    {
      name: 'Lemons',
      description:
        'California Lemons shipped right to your door! Very high in Vitamin C and great for your favorite drink and food recipes. This is a 5lb case(between 12-18 Lemons',
      image: 'Lemons.jpg',
      category: categories[0]._id,
      price: 10.99,
      quantity: 100
    },
    {
      name: 'Organic Detroit Dark Red Beets - 5lb',
      category: categories[1]._id,
      description:
        'Detroit Dark Red has been the preferred choice for homegrown classic American beets. Introduced in 1892 by Detroit’s world famous D.M. Ferry Seed Company, the American red beet eventually adopted the moniker “Detroit” since it became known that the best beets hailed from the “Motor City”. The 2-3" globe-shaped roots are tender and sweet. A dual-purpose vegetable, the deep green tops can be cooked like swiss chard.',
      image: 'Beets.jpg',
      price: 3.13,
      quantity: 20
    },
    {
      name: 'Cranberry Jam',
      category: categories[3]._id,
      description:
        'Merry, bright and full of festive flavors, this cranberry sauce gets a dose of holiday cheer from citrusy orange zest, warm spices and a splash of brandy. Serve it alongside a celebratory roast, spread it on a turkey sandwich or pair it with a cheese plate!',
      image: 'Cranberries.jpg',
      price: 9.99,
      quantity: 10
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
