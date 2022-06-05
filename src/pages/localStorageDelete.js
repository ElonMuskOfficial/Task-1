import { useState,useEffect } from "react";

const getData = () => {
    let list = localStorage.getItem("Task");
    // console.log(list);
    if (list) {
        return JSON.parse(localStorage.getItem("Task"))
    } else {
        return [];
    }
}

function List() {

    const [items, setItems] = useState(getData());

    // console.log(items);
    const handleDelete = (id) => {
        // console.log(id);
        const deleteItems = items.filter((e) => {
            console.log("data",e.id)
            console.log("para",id);
            return e.id !== parseInt(id)
        })
        console.log(deleteItems)
        setItems(deleteItems);
    }

    // const data = [
    //     {
    //         id: 1,
    //         name: "raju",
    //         city: "surat"
    //     },
    //     {
    //         id: 2,
    //         name: "aman",
    //         city: "rajkot"
    //     }
    // ]

    useEffect(() => {
        localStorage.setItem("Task", JSON.stringify(items));
    }, [items])

    return (<>
        <div className="container my-4">
            <div className="col-md-8 border px-4 py-3 border-1 mx-auto rounded-2">
                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">DOB</th>
                                <th scope="col">City</th>
                                {/* <th scope="col">Gender</th>
                                <th scope="col">Address</th> */}
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((i) => (
                                <tr key={i.id}>
                                    <th scope="row">{i.id}</th>
                                    <td>{i.name}</td>
                                    <td>{i.city}</td>
                                    <td><button className="btn btn-danger" onClick={() => handleDelete(i.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>)
}
export default List;
