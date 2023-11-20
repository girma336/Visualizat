import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination';
const TableOfData = () => {
    const { filter } = useSelector(state => state.filter);
    const filterCountry = filter?.[filter.length - 1]?.filter(({ country }) => ![''].includes(country))
    const data = filterCountry?.filter(({ sector }) => ![''].includes(sector))
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='w-100% z-20  border border-[#ded] mt-[80px]'>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Country
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Sector
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Topic
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Start Year
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Source
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Pestle
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {currentItems?.map(person => (
                                        <tr key={person._id}>
                                            <td className="px-1 py-1 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-0">
                                                        <div className="text-sm font-medium text-gray-900">{person.country}</div>
                                                        <div className="text-sm text-gray-500">{person.region}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-1 py-1 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{person.sector}</div>
                                            </td>
                                            <td className="px-1 py-1 whitespace-nowrap">
                                                <span
                                                    className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                                                >
                                                    {person.topic}
                                                </span>
                                            </td>
                                            <td className="px-1 py-1 whitespace-nowrap text-sm text-gray-500">
                                                {person.start_year}
                                            </td>
                                            <td className="px-1 py-1 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{person.source}</div>
                                            </td>
                                            <td className="px-1 py-1 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{person.pestle}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </div>
                    
                </div>
                
            </div>
            {data?.length > itemsPerPage && (
                        <Pagination
                            totalItems={data?.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    )}
        </div>
    )
}

export default TableOfData