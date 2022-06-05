import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CompaniesAdd() {
    const { id } = useParams();
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
    const date = new Date();
    const dateId = date.getTime();
    const [input, setInput] = useState({
        id: dateId,
        company_name: "",
        status: "",
        address: "",
        date_of_creation: ""
    })

    const { company_name, status, address, date_of_creation } = input;

    const handleInput = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (id) {
            const parseId = parseInt(id);
            const findData = data.find(e => e.id === parseId);
            setInput(findData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    return (<>
        <section className="conatiner mx-auto my-10">
            <div className="xl:max-w-screen-md lg:max-w-screen-md md:max-w-screen-md sm:max-w-screen-sm px-1 px-2 mx-auto border border-gray-100 shadow-xl rounded-lg">

                <form className="px-5 py-5">
                    <div className="mb-6">
                        <label htmlFor="CompanyName" className="block mb-2 text-sm font-medium text-gray-900">Company Name</label>
                        <input type="text" id="company_name" value={company_name} name="company_name" onChange={e => handleInput(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none focus:ring-1" placeholder="Company Name" required="" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="Status" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                        <select id="status" name="status" onChange={e => handleInput(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none focus:ring-1">
                            <option value="trial" selected={status === "Trial"}>Trial</option>
                            <option value="customer" selected={status === "Customer"}>Customer</option>
                            <option value="dead" selected={status === "Dead"}>Dead</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900">Company Address</label>
                        <textarea id="address" name="address" value={address} onChange={e => handleInput(e)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none focus:ring-1" placeholder="Address..."></textarea>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="DateOfCreation" className="block mb-2 text-sm font-medium text-gray-900">Date of Creation</label>
                        <input type="date" id="date_of_creation" value={date_of_creation} name="date_of_creation" onChange={e => handleInput(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none focus:ring-1" placeholder="Company Name" required="" />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>
                </form>

            </div>
        </section>
    </>)
}
export default CompaniesAdd;