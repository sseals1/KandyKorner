import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import "./EmployeeHiringForm.css"





export const HiringEmployeeForm = () => {

    const [employee, setEmployee] = useState({
        //employee is a variable that will hold state. updateEmployee is the setter function that will modify state. useState is the hook that provides a place to house state.
        //useState provides a place where state will be held. The employee variable will have the values and the update function will set those values.
        name: "", //2 keys that will be populated in state.
        location: "",
        isManager: false,
        fullTime: false,
        hourlyRate: 0

    });



    const history = useHistory()


    const saveEmployee = (event) => { //this is the object that is created that we want to sent to the API for permanent storage.
        event.preventDefault()
        const newEmployee = { //declaration of the object that will hold the values of the employee that we want to save to the API
            name: employee.name, //this is the description key that is declared on line 9. description is the key on serviceEmployees in the API that
            //this is being set to employee.description. employee holds the value of the array that is created in transient state.
            location: employee.location, //this is the emergency key from the API serviceEmployees array. It is set to the value of the employee.emergency value in state(what the user picked this is a boolean).
            isManager: employee.isManager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate


        }

        const fetchOption = { //This is the POST request Object that needs to be passed in as a second argument to the fetch call
            method: "POST", //Get requests are the only fetch requests that do not require a second argument.
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption) //generating a new employee object in the employees resource of the API
            .then(() => {
                history.push("/employees") //the history method is used to rerender the employees to the DOM
                //creating the change in views using the history mechanism.
            })


    }



    return (

        <form className="employeeForm">
            <h2 className="employeeForm__title">Kandy Korner New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                //event is the varialbe placeholder that will capture the onChange events value
                                const copyOfEmployee = { ...employee }
                                //copyOfEmployee variable will hold a copy of the values from state
                                copyOfEmployee.name = event.target.value
                                //modify copyOfEmployee description from a blank string to whatever is currently typed in. look at Line 6.
                                setEmployee(copyOfEmployee)
                                //take the copyOfEmployee variable and pass it in as an argument to the updateEmployee setter function to set new state.
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name..."
                    />
                </div>



                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    
                    <input
                        onChange={
                            (event) => {
                                //event is the varialbe placeholder that will capture the onChange events value
                                const copyOfEmployee = { ...employee }
                                //copyOfEmployee variable will hold a copy of the values from state
                                copyOfEmployee.location = event.target.value
                                //modify copyOfEmployee description from a blank string to whatever is currently typed in. look at Line 6.
                                setEmployee(copyOfEmployee)
                                //take the copyOfEmployee variable and pass it in as an argument to the updateEmployee setter function to set new state.
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter a location..."
                    />
                </div>




                <div className="form-group">
                    <label htmlFor="isManager">Manager:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                //event is the varialbe placeholder that will capture the onChange events value
                                const copyOfEmployee = { ...employee }
                                //copyOfEmployee variable will hold a copy of the values from state
                                copyOfEmployee.isManager = event.target.checked
                                //modify copyOfEmployee description from a blank string to whatever is currently typed in. look at Line 6.
                                setEmployee(copyOfEmployee)
                                //take the copyOfEmployee variable and pass it in as an argument to the updateEmployee setter function to set new state.
                            }
                        }
                        required autoFocus
                        className="form-control"
                        placeholder="Are you a manager..."
                    />
                </div>




                <div className="form-group">
                    <label htmlFor="fullTime">Full Time:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                //event is the varialbe placeholder that will capture the onChange events value
                                const copyOfEmployee = { ...employee }
                                //copyOfEmployee variable will hold a copy of the values from state
                                copyOfEmployee.fullTime = event.target.checked
                                //modify copyOfEmployee description from a blank string to whatever is currently typed in. look at Line 6.
                                setEmployee(copyOfEmployee)
                                //take the copyOfEmployee variable and pass it in as an argument to the updateEmployee setter function to set new state.
                            }
                        }
                        required autoFocus
                        className="form-control"
                        placeholder="Full Time..."
                    />
                </div>




                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly:</label>
                    <input
                        onChange={
                            (event) => {
                                //event is the varialbe placeholder that will capture the onChange events value
                                const copyOfEmployee = { ...employee }
                                //copyOfEmployee variable will hold a copy of the values from state
                                copyOfEmployee.hourlyRate = event.target.value
                                //modify copyOfEmployee description from a blank string to whatever is currently typed in. look at Line 6.
                                setEmployee(copyOfEmployee)
                                //take the copyOfEmployee variable and pass it in as an argument to the updateEmployee setter function to set new state.
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter a specialty..."
                    />
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={saveEmployee}>
                Finish Hiring
            </button>

        </form>

    )

}
