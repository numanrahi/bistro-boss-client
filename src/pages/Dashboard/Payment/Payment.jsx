import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// TODO : provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="please process"></SectionTitle>
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <h2 className='text-3xl'>Payment page </h2>
            {/* <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements> */}
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;