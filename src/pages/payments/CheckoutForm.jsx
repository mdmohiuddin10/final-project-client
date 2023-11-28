import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const CheckoutForm = ({ biodata, newData }) => {
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const price = 500;


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: price })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error', confirmError);
        } else {

            // 
            Swal.fire({
                title: "Are you sure?",
                text: "You have to pay $500 for request",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Do it!"
            }).then(async(result) => {
                if (result.isConfirmed) {
                    // 
                    console.log('paymentIntent', paymentIntent);
                    if (paymentIntent.status === 'succeeded') {
                        // console.log('transaction id', paymentIntent.id);
                        setTransactionId(paymentIntent.id)
                    }

                    // post data to server
                    const request = {
                        // requester
                        RequesterEmail: newData.email,
                        RequesterName: newData.name,
                        RequesterBiodataId: newData.biodataId,
                        Requesterimage: newData.image,
                        transectionId: paymentIntent.id,
                        requestedName: biodata.name,
                        requestedBiodataId: biodata.biodataId,
                        requestedNumber: biodata.number,
                        requestedEmail: biodata.email,
                        price: price,
                        date: new Date(), //utc data convert.use moment js to convert..
                        status: 'pending'
                    }

                    //
                    const res = await axiosSecure.post('/requset', request);
                    console.log('payment saved', res);
                    if (res.data?.data?.insertedId) {
                        // todo
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your Payment is successFull",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                    // 
                }
            })




        }



    };




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p>{error}</p>
            </form>

        </div>
    );
};

export default CheckoutForm;





