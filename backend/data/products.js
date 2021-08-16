const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 13,
  },
  {
    name: 'Canon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Canon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 1,
    rating: 2.5,
    numReviews: 12,
  },
  {
    name: 'Belkin Soundform Hi-Fi Speaker',
    image: '/images/belkin.jpg',
    description:
      "The Belkin SoundForm Elite Hi-Fi Smart speakers are the entry for Belkin into the audio technology market. The collaboration with Devialet just works as it combines the hardware expertise of Belkin and the audio expertise of the team at Devialet to give you a well-rounded product.It's a speaker that does the job.",
    brand: 'Belkin',
    category: 'Electronics',
    price: 99.99,
    countInStock: 12,
    rating: 4,
    numReviews: 22,
  },
  {
    name: 'Sony Xperia X',
    image: '/images/xperiax.png',
    description:
      'Introducing the Sony Xperia X. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Sony',
    category: 'Electronics',
    price: 229.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 17,
  },
  {
    name: 'Samsung VR Headset',
    image: '/images/samsungvr.jpeg',
    description:
      'Samsung VR is your go-to app for the very best in 360° video - delivering you FRESH content daily and providing access to one of the largest high-quality libraries in the world. •Samsung VR provides you with FREE access to the most engaging & innovative content - anywhere, anytime.',
    brand: 'Samsung',
    category: 'Electronics',
    price: 449.99,
    countInStock: 3,
    rating: 3.5,
    numReviews: 20,
  },
  {
    name: 'Asus Battery Pack',
    image: '/images/batterypack.jpg',
    description:
      'Buy a brand-new battery from our wide range of official Asus batteries. There are from 2600 mAh up to 7000 mAh capacities in 2 to 7 cells. All Asus laptops are compatible.',
    brand: 'Asus',
    category: 'Electronics',
    price: 79.99,
    countInStock: 3,
    rating: 2,
    numReviews: 15,
  },
  {
    name: 'LG Television',
    image: '/images/lgtv.jpeg',
    description:
      "LG Televisions are stylish and deliver superior picture quality. Whether you're looking for an LED, OLED,Plasma screen or 4K TV LG quality speaks for itself.",
    brand: 'LG',
    category: 'Electronics',
    price: 599.99,
    countInStock: 12,
    rating: 4.5,
    numReviews: 55,
  },
  {
    name: 'Fitbit',
    image: '/images/Fitbit.jpg',
    description:
      "Find your fit with Fitbit's family of fitness products that help you stay motivated and improve your health by tracking your activity, exercise, food, weight and sleep. Whether you're looking for sleek style or the motivation to get kids moving, Fitbit have you covered.",
    brand: 'Fitbit',
    category: 'Electronics',
    price: 69.99,
    countInStock: 12,
    rating: 3,
    numReviews: 10,
  },
  {
    name: 'Roomba',
    image: '/images/Roomba.jpg',
    description:
      'Our smartest, most powerful robot vacuum yet. Roomba® s Series. Starting at €1,499.99. Learns your routine, schedules around your life. Empties on its own. Roomba® i Series.',
    brand: 'Roomba',
    category: 'Electronics',
    price: 1499.99,
    countInStock: 12,
    rating: 3,
    numReviews: 64,
  },
  {
    name: 'Eton Rukus Solar Speaker',
    image: '/images/Speaker.jpg',
    description:
      "The best stereo solar Bluetooth speaker that we've tested is the Eton Rukus. This speaker comes with a built-in carrying handle you can use to easily take it with you when you're on the go.",
    brand: 'Eton',
    category: 'Electronics',
    price: 54.99,
    countInStock: 1,
    rating: 3,
    numReviews: 16,
  },
  {
    name: 'Evapolar USB Air Conditioner',
    image: '/images/evapolar.jpg',
    description:
      "The Evapolar portable air conditioner is a perfect example of a personal evaporative air cooler that you should be able to use when you're out in nature camping, or when you just need a breeze.",
    brand: 'Evapolar',
    category: 'Electronics',
    price: 39.99,
    countInStock: 13,
    rating: 5,
    numReviews: 19,
  },
  {
    name: 'Kodak Pixpro',
    image: '/images/kodak.jpg',
    description:
      'Kodak PIXPRO Astro Zoom AZ421-BK 16MP Digital Camera with 42X Optical Zoom and 3" LCD Screen (Black) Powerful 16. 1-Megapixel CCD sensor gives you room to enlarge, zoom and crop to your heart\'s content without losing out on life-like clarity or quality.',
    brand: 'Kodak',
    category: 'Electronics',
    price: 789.99,
    countInStock: 22,
    rating: 4,
    numReviews: 78,
  },
  {
    name: 'Skull Candy Headphones',
    image: '/images/scheadphones.jpg',
    description:
      'Skullcandy Crusher Headphones with Built-in Amplifier and Mic, Black. Experience the music the way it was meant to be heard, this Crusher transforms your audio experiences into a tactile sensation.',
    brand: 'Skullcandy',
    category: 'Electronics',
    price: 99.99,
    countInStock: 5,
    rating: 2.5,
    numReviews: 15,
  },
  {
    name: 'Amazon Echo',
    image: '/images/speakertower.jpg',
    description:
      'Use the Amazon Alexa App to set up your Alexa-enabled devices, listen to music, create shopping lists, get news updates, and much more. The more you use Alexa, the more she adapts to your voice, vocabulary, and personal preferences. ',
    brand: 'Amazon',
    category: 'Electronics',
    price: 79.99,
    countInStock: 5,
    rating: 2.5,
    numReviews: 15,
  },
]

export default products
