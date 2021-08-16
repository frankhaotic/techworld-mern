import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
}

const StripePaymentForm = ({ amount, onSuccess }) => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const finalAmount = amount * 100

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post(
          'http://localhost:5000/api/config/stripe/',
          {
            amount: finalAmount,
            id,
          }
        )

        if (response.data.success) {
          console.log('Successful payment', response.data)
          setSuccess(true)
          onSuccess(response)
        }
      } catch (error) {
        console.log('error in stripe payment form', error.message)
        onSuccess(false)
      }
    }
  }

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="custom_stripe_button">Pay</button>
        </form>
      ) : (
        <h3>Thank you for shopping</h3>
      )}
    </>
  )
}

export default StripePaymentForm
