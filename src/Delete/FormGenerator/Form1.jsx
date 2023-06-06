
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'


function Form1(props) {
    
    const { id } = useParams()
    const navigate = useNavigate()
    const [isLoading, setisLoading] = useState(false)

    let validationSchema = yup.object({
        
         fadf: yup.string(),
         fasdf: yup.string(),
         fsadf: yup.string(),
         bol: yup.string(),
    })

    const initialValues = {
      
        fadf: '',
        fasdf: '',
        fsadf: '',
        bol: '',
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
            
        fadf: values?.fadf,
        fasdf: values?.fasdf,
        fsadf: values?.fsadf,
        bol: values?.bol,
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
       
        formik.setFieldValue('fadf', data?.fadf)
        formik.setFieldValue('fasdf', data?.fasdf)
        formik.setFieldValue('fsadf', data?.fsadf)
        formik.setFieldValue('bol', data?.bol)
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
                
       <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">fasdf<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('fadf')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.fadf && formik.errors.fadf ? formik.errors.fadf : null}</span>
</div>
       
       <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <label className={'form-label inline-block mb-1 text-gray-600 text-sm font-semibold'}>fasdf</label>
        <select name="zone" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer'}
        >
            <option value="1" >Option 1</option>
            <option value="2" >Option 2</option>

        </select>
</div>
       
       <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">fasdff<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('fsadf')} type="date" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.fsadf && formik.errors.fsadf ? formik.errors.fsadf : null}</span>
</div>
       
        <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <div class="text-sm font-medium text-gray-900 dark:text-gray-300">bool</div>
        <label class="relative inline-flex items-center cursor-pointer mt-2">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    </div>
       

                <div className=' text-right col-span-12 mt-10'>
                    <button type="submit" className="cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next</button>
                </div>

        </div>
                </form>

            </div>
        </>
    )
}

export default Form1