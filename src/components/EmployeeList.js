import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./EmployeeList.css"
import { Link } from "react-router-dom"





export const EmployeeList = () => {
    //export function
    const [employees, setEmployee] = useState([])

    const history = useHistory()

    const getEmployees = () => {
         fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then((employeeData) => {
                setEmployee(employeeData)
            })
    }
    useEffect(
        () => {
            getEmployees()
        }, [])


    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        .then(getEmployees)
    }




    return (
        //render a Specialties heading with employeeSpecialty interpolated to render them to the DOM.
        <>
            <div>
                <button className="btn btn-primary" onClick={() => history.push("/employee/form")}>Hire New Employee</button>

            </div>
            <h4>Employees:</h4>

            {
                // employees.map(
                //     (employeeObj) => {
                //         return <div className="employee"> <Link to={`/employees/${employeeObj.id}`}></Link></div>
                //         //<div className={employeeObj.employeeId ? "employeeObj" : "employeeObj"}></div>
                //         // <div className={ticketsObj.emergency ? "emergency" : "ticket"}></div>
                //         //In jsx the key ${employee.id} is used like an ID to find the id.
                //     }
                // )
                employees.map(
                    (employeeObj) => {
                        return <section className="employee_data" key={`employee--${employeeObj.id}`}>

                            <div>
                                <div>{employeeObj.name}</div>
                                <div>{employeeObj.location}</div>
                                <div>Is a Manager: {employeeObj.isManager === true ? "yes" : "no"}</div>
                                <div>Is Full time: {employeeObj.fullTime === true ? "yes" : "no"}</div>
                                <div>Hourly rate: ${employeeObj.hourlyRate}.00</div>

                                {/* /employees/:employeeId */}
                            </div>
                            <div>
                                {/* <button className="btn btn-primary" onClick={() => history.push("/employees")}>Fire Employee</button> */}
                                <button className="btn btn-primary" onClick={() => { deleteTicket(employeeObj.id) }}>Fire Employee</button>

                            </div>



                        </section>
                    }
                )
            }
        </>


    )
}
