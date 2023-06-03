export default function inputRules() {

    // 1 TEXT INPUT
    let textInput = `<div className="form-group col-span-4 md:col-span-1 mb-6 md:px-4">
        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Khata No.<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
        <input {...formik.getFieldProps('${inputName}')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
            placeholder="Enter Khata No." />
        <span className="text-red-600 absolute text-xs">{formik.touched.${inputName} && formik.errors.${inputName} ? formik.errors.${inputName} : null}</span>
    </div>
    `
}