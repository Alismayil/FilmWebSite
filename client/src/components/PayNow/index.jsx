import React, { lazy, useState } from 'react'
import './PayNow.scss'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';

function PayNow({Item}) {
    const publishableKey =
        "pk_test_51OkuFOEhh5JG9R073dqjptfCydyJtPpachksbrZWc9w5zEhprQX17h9beBWMNj4RNfjx0QICol7fuRFg6Ox5US2v00uPs4e2T9";

    const priceForStripe = Item.newprice * 1;
    const { t, i18n } = useTranslation();


    const payNow = async (token) => {
        try {
            const response = await axios({
                url: "http://localhost:3000/payment",
                method: "post",
                data: {
                    amount: Item.newprice * 1,
                    token,
                },
            });
            if (response.status === 200) {
                toast.success('Payment successfully completed')
            }
        } catch (error) {
            toast.error("Oops a problem arose")
        }
    };
    
    return (
      <div className="payNow"  >
        
              <StripeCheckout
                stripeKey={publishableKey}
                label={Item.pricetype ==="Free"?
                <>{`${t("SelectFree")}`}</>
                :Item.pricetype ==="Premium"?
                <>{`${t("SelectPremium")}`}</>
                :<>{`${t("SelectBasic")}`}</>

            }
                name={Item.pricetype ==="Free"?
               "Free Movies Payment"
                :Item.pricetype ==="Premium"?
                "Premium Movies Payment"
                : "Basic Movies Payment"

            }
                billingAddress
                shippingAddress
                amount={priceForStripe}
                description={`Your total is $${Item.newprice}`}
                token={payNow}
            />
      </div>
    )
}

export default PayNow