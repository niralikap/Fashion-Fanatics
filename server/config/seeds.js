const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Sunglasses' },
    { name: 'Shoes' },
    { name: 'Belts' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'ABC Sunglasses',
      description:
        'ABC description',
      image: '',
      category: categories[0]._id, 
      price: 100000,
      quantity: 500,
    },
    {
      name: 'XYZ Sunglasses',
      description:
        'XYZ description',
      image: '',
      category: categories[0]._id,
      price: 100000,
      quantity: 400,
    },
    {
      name: 'ABC Shoes',
      description:
        'ABC Shoes description',
      image: '',
      category: categories[1]._id,
      price: 100000,
      quantity: 300,
    },
    {
      name: 'XYZ Shoes',
      description:
        'XYZ Shoes description',
      image: '',
      category: categories[1]._id,
      price: 100000,
      quantity: 100,
    },
    {
      name: 'ABC Belts',
      description:
        'ABC Belts description',
      image: '',
      category: categories[2]._id,
      price: 100000,
      quantity: 200,
    },
    {
      name: 'XYZ Belts',
      description:
        'XYZ Belts description',
      image: '',
      category: categories[2]._id,
      price: 100000,
      quantity: 300,
    },
    {
      name: 'UVW Sunglasses',
      description:
        'UVW Sunglasses description',
      image: '',
      category: categories[0]._id,
      price: 100000,
      quantity: 100,
    },
    {
      name: 'UVW Shoes',
      description:
        'UVW Shoes description',
      image: '',
      category: categories[1]._id,
      price: 100000,
      quantity: 200,
    },
    {
      name: 'UVW Belts',
      description:
        'UVW Belts description',
      image: '',
      category: categories[2]._id,
      price: 100000,
      quantity: 400,
    },
    {
      name: 'GHI Sunglasses',
      description:
        'GHI Sunglasses description',
      image: '',
      category: categories[0]._id,
      price: 100000,
      quantity: 550,
    },
    {
      name: 'GHI Shoes',
      description:
        'GHI Shoes description',
      image: '',
      category: categories[1]._id,
      price: 100000,
      quantity: 300,
    },
    {
      name: 'GHI Belts',
      description:
        'GHI Belts description',
      image: '',
      category: categories[2]._id,
      price: 100000,
      quantity: 350,
    },

  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'First1',
    lastName: 'Last1',
    email: 'first1@test.com',
    password: 'password1',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id] 
      }
    ]
  });

  await User.create({
    firstName: 'First2',
    lastName: 'Last2',
    email: 'first2@test.com',
    password: 'password2'
  });

  console.log('users seeded');

  process.exit();
});
