
import React, { useState } from 'react'

// write your custom hook here to control your checkout form

export const useForm = (key, initialValue, cb) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue)

    const handleChanges = e => {
        // console.log(e.target.name)
        setValues({
            ...values, 
            [e.taget.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setShowSuccessMessage(true)
    }

    return [showSuccessMessage, values, handleChanges, handleSubmit]

}

export default useForm