import { Link } from "react-router-dom";
import AddIcon from "../icons/add_icon.svg"

function Companies() {

    const data = [
        {
            id: 1654340739794,
            company_name: "Archer Daniels Midland Company",
            status: "Trial",
            address: "32442 George Ferguson Way",
            date_of_creation: "2020-03-26"
        },
        {
            id: 1654340739795,
            company_name: "Sysco Corporation",
            status: "Customer",
            address: "46 Castle St,Trowbridge,Wiltshire",
            date_of_creation: "2020-04-10"
        },
        {
            id: 1654340739796,
            company_name: "Nestle (U.S. &Canada)",
            status: "Dead",
            address: "Borsenbrucke 5,Hamburg",
            date_of_creation: "2020-05-19"
        }
    ]

    return (<>
        <section className="container mx-auto my-10">
            <div className="xl:max-w-screen-lg lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-1 px-2 mx-auto">
                <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Company Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id} className="bg-white border-b">

                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.company_name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.status}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link to={`/companies/edit/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <div className="fixed right-10 bottom-10">
            <Link to="/companies/add">
                <div className="w-10 h-10 bg-blue-500 rounded-full shadow-full">
                    <img src={AddIcon} alt="add Companies" className="absolute h-[32px] top-[4px] left-[4px]" />
                </div>
            </Link>
        </div>
    </>)
}
export default Companies;