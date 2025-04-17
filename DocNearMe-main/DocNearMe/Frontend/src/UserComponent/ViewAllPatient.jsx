import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ViewAllPatient = () => {
  const [allPatient, setAllPatient] = useState([]);

  useEffect(() => {
    const getAllPatient = async () => {
      const allPatient = await retrieveAllPatient();
      if (allPatient) {
        setAllPatient(allPatient);
      }
    };

    getAllPatient();
  }, []);

  const retrieveAllPatient = async () => {
    const response = await axios.get("http://localhost:8080/api/patient/all");
    console.log(response.data);
    return response.data;
  };

  const deletePatient = (patientId) => {
    fetch("http://localhost:8080/api/user/delete/id?userId=" + patientId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((res) => {
        alert(res.responseMessage);
      });
    });

    window.location.reload(true);
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center bg-color">
          <h2>All Patients</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allPatient.map((patient) => {
                  return (
                    <tr>
                      <td>
                        <b>{patient.firstName}</b>
                      </td>

                      <td>
                        <b>{patient.lastName}</b>
                      </td>
                      <td>
                        <b>{patient.emailId}</b>
                      </td>
                      <td>
                        <b>{patient.age}</b>
                      </td>
                      <td>
                        <b>{patient.sex}</b>
                      </td>
                      <td>
                        <b>{patient.bloodGroup}</b>
                      </td>
                      <td>
                        <b>{patient.contact}</b>
                      </td>

                      <td>
                        <b>
                          {patient.street +
                            " " +
                            patient.city +
                            " " +
                            patient.pincode}
                        </b>
                      </td>
                      <td>
                        <button
                          className="btn bg-color custom-bg-text btn-sm"
                          onClick={() => deletePatient(patient.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllPatient;
