import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import CodeView from './Common/CodeView'

function Input() {

    let validationSchema = yup.object({
        mobileNo: yup.string().required('Enter khat no.'),
    })

    const formik = useFormik({
        initialValues: {
            mobileNo: '',
        },
        onSubmit: (values, resetForm) => {
        }
        , validationSchema
    })

    const allowNumberInput = (currentValue, oldValue, max = null) => {
        if (currentValue.length > max)  //stop if max value and return oldvalue
            return oldValue

        const re = /^[0-9\b]+$/;     //number
        if (currentValue === '' || re.test(currentValue)) //test
            return currentValue
        else
            return oldValue
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        { name == 'mobileNo' && formik.setFieldValue("mobileNo", allowNumberInput(value, formik.values.mobileNo, 10)) }
    }


    return (
        <>
            <form onSubmit={formik.handleSubmit} onChange={handleChange}>
                <div className="form-group w-60 mb-6 md:px-4">
                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Mobile No.<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                    <input   {...formik.getFieldProps('mobileNo')} type="text" className={`cypress_mobileNo form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md `}
                        placeholder="Enter mobile no." />
                    <span className="text-red-600 absolute text-xs">{formik.touched.mobileNo && formik.errors.mobileNo ? formik.errors.mobileNo : null}</span>
                </div>
            </form>

            {/* CODE VIEW */}
            <CodeView code={`import { useFormik } from 'formik'
import * as yup from 'yup'

let validationSchema = yup.object({
                mobileNo: yup.string().required('Enter khat no.'),
            })
        
            const formik = useFormik({
                initialValues: {
                    mobileNo: '',
                },
                onSubmit: (values, resetForm) => {
                }
                , validationSchema
            })
         const handleChange = (e) => {
                let name = e.target.name
                let value = e.target.value
        
                { name == 'mobileNo' && formik.setFieldValue("mobileNo", allowNumberInput(value, formik.values.mobileNo, 10)) }
            }
            
            
            <form onSubmit={formik.handleSubmit} onChange={handleChange}>
                <div className="form-group w-60 mb-6 md:px-4">
                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Mobile No.<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                    <input   {...formik.getFieldProps('mobileNo')} type="text" className={'cypress_mobileNo form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md '}
                        placeholder="Enter mobile no." />
                    <span className="text-red-600 absolute text-xs">{formik.touched.mobileNo && formik.errors.mobileNo ? formik.errors.mobileNo : null}</span>
                </div>
            </form>`} />


            <div className='text-xl font-semibold mt-10'># Powerups</div>
            {/* CODE VIEW */}
            <CodeView code={`export const returnCapitalize = (currentValue) => {
    let capitalizeValue = currentValue.toUpperCase()
    return capitalizeValue
}
export const allowFloatInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^\d*\.?\d*$/;  //number + one dot
    if (currentValue === '' || re.test(currentValue)) //test for float input only one dot allowed
        return currentValue
    else
        return oldValue
}
export const allowNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b]+$/;     //number
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}
export const allowNumberCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b,]+$/;     //number + comma
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}
export const allowCharacterCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b,]+$/;     //number + comma
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}

export const allowCharacterSpecialInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[\.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[\a-zA-Z0-9! ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowNumberCharacterInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[\.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[\a-zA-Z0-9! ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Z\s]*$/;  //character + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterSpaceCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[\a-zA-Z,! ]*$/; //character + space + comma
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[\a-zA-Z0-9!]*$/;    //character + number 
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowMailInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[\a-zA-Z0-9@.!]*$/;    //character + number 
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberSpaceInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[\.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[\a-zA-Z0-9! ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberSpaceCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[\.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[\a-zA-Z0-9!, ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const nullToNA = (value) => {
    if (value === undefined || value === null || typeof value === "undefined" || value === "") {
        return "NA";
    } else if (value === true) {
        return 'Yes';
    } else if (value === false) {
        return 'No'
    } else {
        return value
    }

}
export const nullToZero = (value) => {

    if (value === undefined || value === null || typeof value === "undefined" || value === "") {
        return "0";
    } else {
        return parseFloat(value).toLocaleString("en-IN")
    }

}`} />
        </>
    )
}

export default Input