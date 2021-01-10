import React , {useEffect , useState} from 'react';
import Header from './Header.js';
import { Table } from "react-bootstrap";

function Users (){
    const [employee , setEmployee] = useState([])

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            data.json().then(result=>{
                console.warn("result" , result);
                setEmployee(result.data)
            })
        })
    },[])
    return(
        <>
            <Header/>
            <h1 className="my-5 text-center">our Users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
                    {
                        employee.map((item , index)=>
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_age}</td>
                                <td>{item.employee_salary}</td>
                            </tr>
                        )
                    }
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </>
    )
}
export default Users;