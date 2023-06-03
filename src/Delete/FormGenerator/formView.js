export default function formView() {
    // 1 VALIDATION SCHEMA
    let validationSchema = yup.object({
        dateOfPurchase: yup.string().required('Select date of purchase'),
    })

    // 2 INITIAL VALUES
    const initialValues = {
        dateOfPurchase: '',
    };

    // 3 FORMIK OBJECT
    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values, resetForm) => {
            console.log('at form submit...', values)
        }
        , validationSchema
    })

    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value
    
    };

    return(
        <form onChange={handleOnChange} onSubmit={formik.handleSubmit}>
                    <Tooltip anchorId="my-element" />
                    <div className="grid grid-cols-12  sm:space-x-2">

                        <div className="col-span-12  grid grid-cols-12 md:px-12  md:py-10 rounded-lg py-6">

                          <div className={`form-group col-span-12 md:col-span-3 mb-4 md:px-2`}>
                                <div> <label className={`form-label text-xs mb-1 text-gray-400  font-semibold flex items-center`}>&nbsp;</label></div>
                                <label className={`form-label inline-block mb-1 text-gray-600 text-sm font-semibold`}>Transafer Mode<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                                <select  id='basic_details_1' {...formik.getFieldProps('dateOfPurchase')} className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md cursor-pointer`}>
                                    <option value="" >Select</option>
                                    <option value="" >Option 1</option>
                                    <option value="" >Option 2</option>
                                    
                                </select>
                                <span className="text-red-600 absolute text-xs">{formik.touched.dateOfPurchase && formik.errors.dateOfPurchase ? formik.errors.dateOfPurchase : null}</span>
                            </div>
                        </div>

                        <div></div>
                    </div>
                </form>
    )

}