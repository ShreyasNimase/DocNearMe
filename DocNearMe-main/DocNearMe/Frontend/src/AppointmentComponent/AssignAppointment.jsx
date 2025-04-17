import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AssignAppointment = () => {
  let navigate = useNavigate();

  const { appointmentId } = useParams();
  console.log("FETCHED APPOINTMENT ID : " + appointmentId);

  const [doctorId, setDoctorId] = useState("");

  const [appointment, setAppointment] = useState("");

  const [allDoctor, setAllDoctor] = useState([]);

  const retrieveAppointment = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/appointment/id?appointmentId=" + appointmentId
    );
    return response.data;
  };

  useEffect(() => {
    const getAllDoctor = async () => {
      const allDoctor = await retrieveAllDoctor();
      if (allDoctor) {
        setAllDoctor(allDoctor);
      }
    };

    const getAppointment = async () => {
      const patientAppointment = await retrieveAppointment();
      if (patientAppointment) {
        setAppointment(patientAppointment);
      }
    };

    getAllDoctor();
    getAppointment();
  }, []);

  const retrieveAllDoctor = async () => {
    const response = await axios.get("http://localhost:8080/api/doctor/all");
    console.log(response.data);
    return response.data;
  };

  const saveAppointment = () => {
    const formData = new FormData();
    formData.append("appointmentId", appointmentId);
    formData.append("doctorId", doctorId);

    axios
      .post(
        "http://localhost:8080/api/appointment/admin/assign/doctor",
        formData
      )
      .then((result) => {
        result.json().then((res) => {
          console.log(res);

          console.log(res.responseMessage);

          alert("Patient Appointment Assigned to Doctor");

          navigate("/admin/appointments/all");
        });
      });
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">Assign Doctor to Appointment</h5>
          </div>
          <div className="card-body text-color">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Patient Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={appointment.patientName}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  <b>Problme Description</b>
                </label>
                <textarea
                  className="form-control"
                  id="problem"
                  name="problem"
                  rows="3"
                  value={appointment.problem}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Appointment Date</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={appointment.appointmentDate}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Doctor</b>
                </label>
                <select
                  name="coachId"
                  onChange={(e) => {
                    setDoctorId(e.target.value);
                  }}
                  className="form-control"
                >
                  <option value="">Select Doctor</option>

                  {allDoctor.map((doctor) => {
                    return (
                      <option value={doctor.id}>
                        {" "}
                        {doctor.firstName + " " + doctor.lastName}{" "}
                      </option>
                    );
                  })}
                </select>
              </div>

              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={saveAppointment}
              >
                Assign Doctor
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignAppointment;
