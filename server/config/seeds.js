/*const db = require('./connection');
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
*/

const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Sunglasses' },
    { name: 'Belts' },
    { name: 'Shoes' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Ray-Ban Clubmaster Classic Sunglasses',
      description:
        'Black frame with green lenses.',
      image: 'ray-ban-clubmaster-sunglasses.jpg',
      category: categories[0]._id,
      price: 163,
      quantity: 500
    },
    {
      name: 'Ray-Ban Beat Sunglasses',
      description:
        'Gold frame with dark green classic lenses.',
      image: 'ray-ban-beat-sunglasses.jpg',
      category: categories[0]._id,
      price: 151,
      quantity: 500
    },
    {
      name: 'Ray-Ban RB2180',
      category: categories[0]._id,
      description:
        'Striped red havana frames with dark brown classic lenses.',
      image: 'ray-ban-RB2180-sunglasses.jpg',
      price: 151,
      quantity: 20
    },
    {
      name: 'Black leather belt with snake buckle',
      category: categories[1]._id,
      description:
        'Black leather with raw cut edge, brass snake buckle, and 1.5" width.',
      image: 'gucci-snake-belt.jpg',
      price: 770,
      quantity: 50
    },
    {
      name: 'Dior 30 Montaigne Reversible Belt',
      category: categories[1]._id,
      description:
        'Black and Latte Smooth Calfskin, 20 MM',
      image: 'dior-montaigne-belt.jpg',
      price: 740,
      quantity: 100
    },
    {
      name: 'Versace Greca Accent Belt',
      category: categories[1]._id,
      description:
        'Black calf leather, square buckle, with a greca belt loop.',
      image:'versace-accent-belt.jpg',
      price: 525,
      quantity: 30
    },
    {
      name: 'Prada High-heeled satin sandals',
      category: categories[2]._id,
      description:
        'Black satin platform sandals with 135mm heel, and 40mm platform.',
      image: 'prada-satin-sandal-shoes.jpg',
      price: 1220,
      quantity: 30
    },
    {
      name: 'Jimmy Choo Romy 100',
      category: categories[2]._id,
      description:
        'Black Suede Pointy Toe Pumps.',
      image: 'jimmy-choo-suede-shoes.jpg',
      price: 750,
      quantity: 100
    },
    {
      name: 'Christian Louboutin Ankle-Strap Red Sole Sandals',
      category: categories[2]._id,
      description: 'Louboutin smooth napa leather sandals, with iconic red nail lacquer painted sole.',
      image: 'louboutin-ankle-strap-shoes.jpg',
      price: 825,
      quantity: 1000
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Ann',
    lastName: 'Adams',
    email: 'ann@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Emma',
    lastName: 'Hursch',
    email: 'ehursch@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
