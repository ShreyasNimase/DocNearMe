import Carousel from "./Carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import DoctorCard from "../UserComponent/DoctorCard";
import Department from "./Department";

const HomePage = () => {
  const [allDoctor, setAllDoctor] = useState([]);

  const retrieveAllDoctor = async () => {
    const response = await axios.get("http://localhost:8080/api/doctor/all");
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllDoctor = async () => {
      const allDoctor = await retrieveAllDoctor();
      if (allDoctor) {
        setAllDoctor(allDoctor);
      }
    };

    getAllDoctor();
  }, []);

  return (
    <div className="container-fluid mb-2">
      <Carousel />
      <div className="mt-2 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-5 g-3">
              {allDoctor.map((doctor) => {
                return <DoctorCard item={doctor} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Department/>
      <Footer />
    </div>
  );
};

export default HomePage;
