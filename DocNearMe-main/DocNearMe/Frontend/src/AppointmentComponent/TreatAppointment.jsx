import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const TreatAppointment = () => {
  
  let navigate = useNavigate();

  const {appointmentId} = useParams();

  const [appointment, setAppointment] = useState("");

  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const [prescription, setPrescription] = useState("");
  
  const retrieveAppointment = async () => {
    const response = await axios.get("http://localhost:8080/api/appointment/id?appointmentId="+appointmentId);
    return response.data;
  };

  useEffect(() => {

    const getAppointment = async () => {
      const patientAppointment = await retrieveAppointment();
      if (patientAppointment) {
        setAppointment(patientAppointment);
      }
    };

    getAppointment();
  }, []);

  const saveAppointment = () => {
    const formData = new FormData();
    formData.append("appointmentId", appointmentId);
    formData.append("price", price);
    formData.append("prescription", prescription);
    formData.append("status", status);

    axios
      .post("http://localhost:8080/api/appointment/doctor/update", formData)
      .then((result) => {
        result.json().then((res) => {
          console.log(res);
  
          console.log(res.responseMessage);
  
          alert("Patient Appointment Status updated Successfully");
          
          navigate("/home");
                
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
            <h5 className="card-title">Update Appointment</h5>
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
                <label htmlFor="prescription" className="form-label">
                  <b>Prescription</b>
                </label>
                <textarea
                  className="form-control"
                  id="prescription"
                  name="prescription"
                  rows="3"
                  onChange={(e) => {
                    setPrescription(e.target.value);
                  }}
                  value={prescription}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  <b>Treatment Price</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Appointment Status</b>
                </label>
              <select
                  name="status"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  className="form-control"
                >
                  <option value="">Select Appointment Status</option>
                  <option value="Treatment Done">Treatment Done</option>
                  <option value="Cancel">Cancel</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={saveAppointment}
              >
                Update Appointment Status
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatAppointment;
