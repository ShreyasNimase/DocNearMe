import { Link } from "react-router-dom";

const DoctorCard = (doctor) => {
  return (
    <div className="col">
      <div class="card border-color rounded-card card-hover product-card custom-bg h-100">
        <img
          src={"http://localhost:8080/api/doctor/" + doctor.item.doctorImage}
          class="card-img-top rounded mx-auto d-block m-2"
          alt="img"
          style={{
            maxHeight: "270px",
            maxWidth: "100%",
            width: "auto",
          }}
        />

        <div class="card-body text-color">
          <h5 class="card-title">
            <div>
              <b>{doctor.item.firstName + " " + doctor.item.lastName}</b>
            </div>
          </h5>

          <p class="text-color">
            <b>
              <i>Specialist :</i> {doctor.item.specialist}
            </b>
          </p>

          <p class="text-color">
            <b>
              <i>Experience :</i> {doctor.item.experience}
            </b>
          </p>

          <p class="text-color">
            <b>
              <i>Age :</i> {doctor.item.age}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
