////////////////////////////////////////////////////////////////
// Imports

// npm package imports
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import stripe from 'stripe'
import bodyParser from 'body-parser'
import cors from 'cors'

// custom files for import
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// api routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

//////////////////////////////////////////////////////////////////
// Server Setup

// define server port
const PORT = process.env.PORT || 5000

// enable .env functionality
dotenv.config()

// enable stripe package
const Stripe = stripe(process.env.STRIPE_SEC_KEY)

// connect to local MongoDB (from config/db.js)
connectDB()

// declare and initiate express application
const app = express()

// initialise the morgan logger in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// setup the body-parser
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.options('*', cors())

//////////////////////////////////////////////////////////////////
// Routes

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

// payments with paypal
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

// payments with stripe
app.post('/api/config/stripe', cors(), async (req, res) => {
  let { amount, id } = req.body
  try {
    const payment = await Stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'techworld purchase',
      payment_method: id,
      confirm: true,
    })
    res.json({
      message: 'Payment successful',
      success: true,
    })
  } catch (error) {
    console.log('error', error)
    res.json({
      message: 'Payment failed',
      success: false,
    })
  }
})

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}

//////////////////////////////////////////////////////////////////
// Middlewares
app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
