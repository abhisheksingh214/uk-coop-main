import React from 'react'

const ResponsiveTable = ({ body, head }) => {
    return (
        <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-gray-300 bg-white bg-opacity-90">
                <thead className='bg-[#FAF0D9]'>
                    <tr>
                        {head.map((content, index) => {
                            return (
                                <th key={index} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                                    {content}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {body.map((content, index) => (
                        <tr
                            className='hover:bg-gray-100 cursor-pointer'
                            key={index}
                        >
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-2">{index+1}</td>

                            {
                                content.map((c, i) => {
                                    return (
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-2">{c}</td>
                                    )
                                })
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ResponsiveTable
