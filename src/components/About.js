import React ,  {useEffect , useState} from "react";
import Header from "./Header.js";
import { Table } from "react-bootstrap";

function About() {

    const [user , setUser] = useState([
        {name:'Rajat' , age:'24' , address:'allaabad'},
        {name:'badrish' , age:'26' , address:'gurugram'},
        {name:'vibhav' , age:'27' , address:'sultanpur'},
        {name:'vibhav' , age:'27' , address:'sultanpur'},
        {name:'shivam' , age:'25' , address:'noida'}
    ])

  return (
    <>
        <Header />
        <h1 className="my-5 text-center">About Us</h1>
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item , index)=>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                        </tr>
                        )
                    }
                    
                    
                </tbody>
            </Table>
        </div>
    </>
  );
}
export default About;
