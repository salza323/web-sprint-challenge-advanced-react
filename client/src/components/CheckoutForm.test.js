import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
describe('tests checkout form', () => {
    render(<CheckoutForm/>)

    test("form header renders", () => {
        render(<CheckoutForm/>)
    });

    test("form shows success message on submit with form details", async() => {
        render(<CheckoutForm/>)

        //select everything that I will need to submit form
        const firstNameInput = screen.getByLabelText(/first Name/i)
        const lastNameInput = screen.getByLabelText(/last Name/i)
        const adressInput = screen.getByLabelText(/address/i)
        const cityInput = screen.getByLabelText(/city/i)
        const stateInput = screen.getByLabelText(/state/i)
        const zipInput = screen.getByLabelText(/zip/i)
        const submitButton = screen.getByRole('button', {type: /submit/i});

        //fire events to fill out form and submit
        fireEvent.change(firstNameInput, {target:{firstName:'Sal'}})
        fireEvent.change(lastNameInput, {target:{lastName:'Zamora'}})
        fireEvent.change(adressInput, {target:{adress:'123 House St'}})
        fireEvent.change(cityInput, {target:{city:'Metropolis'}})
        fireEvent.change(stateInput, {target:{state:'Narnia'}})
        fireEvent.change(zipInput, {target:{zip:'90210'}})
        fireEvent.click(submitButton)

        //when success message is shown, "woo-hoo!" is diplayed, so I will verify that the message is in the window
        const success = await screen.findByText(/woo-hoo!/i)

    });
})
