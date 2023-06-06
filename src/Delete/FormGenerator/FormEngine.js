import inputRules from "./inputRules"
export default function FormEngine(inputFields, formName) {

    console.log('inside form engine.....', inputFields)
    // return

    // 1 VALIDATION SCHEMA GENERATION
    let validationSchema = ''
    inputFields.forEach((value, key) => {
        validationSchema = `${validationSchema}
         ${value.key}: yup.string(),`
    })



    // 2 INITIALVALUES GENERATION
    let initialValues = ''
    inputFields.forEach((value, key) => {
        initialValues = `${initialValues}
        ${value.key}: '',`
    })

    // 3 INPUT VIEW GENERATION
    let inputView = ''
    inputFields.forEach((value, key) => {
        // GETTING HTML FOR SPECIFIC INPUT
        let inputViewHtml = inputRules(value.id, value.key, value.name)

        inputView = `${inputView}
       ${inputViewHtml}
       `
    })

    // 4 REQUEST BODY GENERATION
    let requestBody = ''
    inputFields.forEach((value, key) => {
        requestBody = `${requestBody}
        ${value.key}: values?.${value.key},`
    })

    // 5 FEED EDIT DATA GENERATION
    let feedData = ''
    inputFields.forEach((value, key) => {
        feedData = `${feedData}
        formik.setFieldValue('${value.key}', data?.${value.key})`
    })


    let formLayout = `
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'


function ${formName}(props) {
    
    const { id } = useParams()
    const navigate = useNavigate()
    const [isLoading, setisLoading] = useState(false)

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

    /*// FUNCTION TO POST OR EDIT DATA
    const saveMasterForm = (values) => {
        setisLoading(true)
        let url
        let requestBody
        let requestBodyBase = {
            ${requestBody}
        }
        if (id !== undefined) {
            url = 'apiEdit'
            requestBody = requestBodyBase
            requestBody.id = id
        } else {
            url = 'apiPost'
            requestBody = requestBodyBase
        }
    
        AxiosInterceptors.post(url, requestBody, ApiHeader())
            .then(function (response) {
                console.log('view fee master..', response?.data?.data)
                if (response?.data?.status) {
                } else {
                }
                setisLoading(false)
            })
            .catch(function (error) {
                console.log('==2 error list...', error)
                setisLoading(false)
            })
    }
    
    // FUNCTION TO FECTH DATA TO EDIT
    const fetchEditData = () => {
        setisLoading(true)
        seterroState(false)
        let requestBody = {
            id: id
        }
        AxiosInterceptors.post('apiFetch', requestBody, ApiHeader())
            .then(function (response) {
                console.log('fetch edit data response..', response?.data?.data)
                if (response?.data?.status) {
                    feedEditData(response?.data?.data)
                } else {
                    activateBottomErrorCard(true, 'Error occured in submitting deactivation application. Please try again later.')
                }
                setisLoading(false)
    
            })
            .catch(function (error) {
                console.log('= edit data error...', error)
                seterroState(true)
                setisLoading(false)
            })
    }
    
    // FUNCTION TO FEED EDIT DATA
    const feedEditData = (data) => {
        console.log('existing property details in prop address...', data)
       ${feedData}
    }
    
    // CALLING API TO FETCH DATA IN EDIT CASE
    useEffect(() => {
        if (id !== undefined) {
            fetchEditData()
        }
    }, [])
    */


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

export default ${formName}`

    return formLayout

}