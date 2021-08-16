import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import StripePaymentForm from './StripePaymentForm'

const PUBLIC_KEY =
  'pk_test_51JOpW5AuDKpRpnU7Ar6R2uDgFzqzM328I6jfFBHwqDJaBHJ9Gi7aY3rqCAFu63VLXuXtPR0RDH2xyLDR3kTYliBD00n6TrAbIj'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = ({ amount, onSuccess }) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <StripePaymentForm amount={amount} onSuccess={onSuccess} />
    </Elements>
  )
}

export default StripeContainer
