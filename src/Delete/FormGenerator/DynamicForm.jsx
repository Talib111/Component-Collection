
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'


function DynamicForm(props) {

    let validationSchema = yup.object({
        
         name: yup.string(),
         is_armed_force: yup.string(),
         email: yup.string(),
         Postal_address: yup.string(),
         Document: yup.string(),
         mobile: yup.string(),
    })

    const initialValues = {
      
        name: '',
        is_armed_force: '',
        email: '',
        Postal_address: '',
        Document: '',
        mobile: '',
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
                
       <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">name<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('name')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.name && formik.errors.name ? formik.errors.name : null}</span>
</div>
       
        <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <div class="text-sm font-medium text-gray-900 dark:text-gray-300">is_armed_force</div>
        <label class="relative inline-flex items-center cursor-pointer mt-2">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    </div>
       
       <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">email<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('email')} type="email" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.email && formik.errors.email ? formik.errors.email : null}</span>
</div>
       
       <div className="form-group col-span-12 grid grid-cols-12">
        <div className='col-span-12 md:col-span-6 mb-6 md:px-4'>
            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Postal_address<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
            <textarea {...formik.getFieldProps('Postal_address')} class="h-40 resize form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"></textarea>
            <span className="text-red-600 absolute text-xs">{formik.touched.Postal_address && formik.errors.Postal_address ? formik.errors.Postal_address : null}</span>
        </div>
    </div>
       
        <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Document</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
        <span className="text-red-600 absolute text-xs">{formik.touched.Document && formik.errors.Document ? formik.errors.Document : null}</span>
    </div>
       
       <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">mobile<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('mobile')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : null}</span>
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

export default DynamicForm