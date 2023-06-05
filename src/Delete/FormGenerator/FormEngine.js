import inputRules from "./inputRules"
export default function FormEngine(inputFields) {

    console.log('inside form engine.....', inputFields)
    // return

    // 1 VALIDATION SCHEMA GENERATION
    let validationSchema = ''
    inputFields.forEach((value, key) => {
        validationSchema = `${validationSchema}
         ${value.name}: yup.string(),`
    })



    // 2 INITIALVALUES GENERATION
    let initialValues = ''
    inputFields.forEach((value, key) => {
        initialValues = `${initialValues}
        ${value.name}: '',`
    })

    // 3 INPUT VIEW GENERATION
    let inputView = ''
    inputFields.forEach((value, key) => {
        // GETTING HTML FOR SPECIFIC INPUT
        let inputViewHtml = inputRules(value.id, value.type, value.name)

        inputView = `${inputView}
       ${inputViewHtml}
       `
    })


    let formLayout = `
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'


function DynamicForm(props) {

    let validationSchema = yup.object({
        ${validationSchema}
    })

    const initialValues = {
      ${initialValues}
    };

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log('form values', values)
        }
        , validationSchema
    })

    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value
    };

    return (
        <>
            <div  className="block md:p-4 w-full md:py-6 rounded-lg mx-auto  shadow-xl bg-white px-4 sm:px-0">
                <form onChange={handleOnChange} onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-12  sm:space-x-2">
                ${inputView}

                <div className=' text-right col-span-12 mt-10'>
                    <button type="submit" className="cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next</button>
                </div>

        </div>
                </form>

            </div>
        </>
    )
}

export default DynamicForm`

    return formLayout

}