export default function inputRules(id, type, name) {

    const inputJson = {
        // 1 TEXT INPUT
        TEXT: `<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${name}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${name}')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${name} && formik.errors.${name} ? formik.errors.${name} : null}</span>
</div>`,
        // 2 EMAIL INPUT
        EMAIL: `<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${name}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${name}')} type="email" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${name} && formik.errors.${name} ? formik.errors.${name} : null}</span>
</div>`
        ,

        // 3 DESCRIPTION INPUT (done)
        DESCRIPTION: `<div className="form-group col-span-12 grid grid-cols-12">
        <div className='col-span-12 md:col-span-6 mb-6 md:px-4'>
            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${name}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
            <textarea {...formik.getFieldProps('${name}')} class="h-40 resize form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"></textarea>
            <span className="text-red-600 absolute text-xs">{formik.touched.${name} && formik.errors.${name} ? formik.errors.${name} : null}</span>
        </div>
    </div>`
        ,
        // 4 PASSWORD INPUT - (done)
        PASSWORD: `<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${name}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${name}')} type="password" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${name} && formik.errors.${name} ? formik.errors.${name} : null}</span>
</div>`
        ,
        // 5 NUMBER INPUT
        NUMBER: `<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${name}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${name}')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${name} && formik.errors.${name} ? formik.errors.${name} : null}</span>
</div>`
        ,
        // 6 LIST INPUT - (done)
        LIST: `<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <label className={'form-label inline-block mb-1 text-gray-600 text-sm font-semibold'}>${name}</label>
        <select name="zone" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer'}
        >
            <option value="1" >Option 1</option>
            <option value="2" >Option 2</option>

        </select>
</div>`
        ,
        // 7 DATE INPUT - (done)
        DATE: `<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${name}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${name}')} type="date" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${name} && formik.errors.${name} ? formik.errors.${name} : null}</span>
</div>`
        ,
        // 8 MEDIA INPUT - (done)
        MEDIA: ` <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">${name}</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
        <span className="text-red-600 absolute text-xs">{formik.touched.${name} && formik.errors.${name} ? formik.errors.${name} : null}</span>
    </div>`
        ,

        BOOLEAN: ` <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <div class="text-sm font-medium text-gray-900 dark:text-gray-300">${name}</div>
        <label class="relative inline-flex items-center cursor-pointer mt-2">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    </div>`
        ,
        // 10 JSON INPUT
        JSON: `<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${name}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${name}')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${name} && formik.errors.${name} ? formik.errors.${name} : null}</span>
</div>`
    }

    return (inputJson[id])

}