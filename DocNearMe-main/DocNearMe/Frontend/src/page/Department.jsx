import React, { useEffect } from "react";
import "../styles/Department.css";

const Department = () => {
  useEffect(() => {
    const tabElements = document.querySelectorAll('[data-bs-toggle="tab"]');
    tabElements.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        event.preventDefault();
        const targetTab = new window.bootstrap.Tab(tab);
        targetTab.show();
      });
    });

    return () => {
      tabElements.forEach((tab) => {
        tab.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <section id="tabs" className="tabs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Departments</h2>
        <p>
          Explore our specialized medical departments, each dedicated to
          providing exceptional care.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#tabs-tab-1"
                >
                  Cardiology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-2">
                  Neurology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-3">
                  Hepatology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-4">
                  Pediatrics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-5">
                  Ophthalmology
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tabs-tab-1">
                <div className="row">
                  <div className="col-lg-8 details">
                    <h3>Cardiology</h3>
                    <p className="fst-italic">
                      Our cardiology department specializes in diagnosing and
                      treating heart conditions, including hypertension, heart
                      attacks, and arrhythmias.
                    </p>
                    <p>
                      We offer advanced cardiac care, including non-invasive
                      tests, angioplasty, and heart surgeries to ensure optimal
                      heart health.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center">
                    <img
                      src="/images/departments-1.jpg"
                      alt="Cardiology"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-tab-2">
                <div className="row">
                  <div className="col-lg-8 details">
                    <h3>Neurology</h3>
                    <p className="fst-italic">
                      Our neurology department specializes in brain, spine, and
                      nervous system disorders, including epilepsy, migraines,
                      and stroke management.
                    </p>
                    <p>
                      We provide state-of-the-art diagnostic services,
                      rehabilitation therapies, and cutting-edge treatments for
                      neurological conditions.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center">
                    <img
                      src="/images/departments-2.jpg"
                      alt="Neurology"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-tab-3">
                <div className="row">
                  <div className="col-lg-8 details">
                    <h3>Hepatology</h3>
                    <p className="fst-italic">
                      Our hepatology department focuses on liver health,
                      diagnosing and treating liver diseases such as hepatitis,
                      cirrhosis, and fatty liver disease.
                    </p>
                    <p>
                      We provide advanced liver function testing, transplant
                      consultations, and personalized treatment plans to promote
                      liver wellness.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center">
                    <img
                      src="/images/departments-3.jpg"
                      alt="Hepatology"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-tab-4">
                <div className="row">
                  <div className="col-lg-8 details">
                    <h3>Pediatrics</h3>
                    <p className="fst-italic">
                      Our pediatrics department provides comprehensive
                      healthcare for infants, children, and adolescents,
                      ensuring their healthy growth and development.
                    </p>
                    <p>
                      We offer vaccinations, general check-ups, and treatment
                      for common childhood illnesses, prioritizing children's
                      well-being.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center">
                    <img
                      src="/images/departments-4.jpg"
                      alt="Pediatrics"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-tab-5">
                <div className="row">
                  <div className="col-lg-8 details">
                    <h3>Ophthalmology</h3>
                    <p className="fst-italic">
                      Our ophthalmology department specializes in diagnosing and
                      treating eye conditions, including cataracts, glaucoma,
                      and vision impairments.
                    </p>
                    <p>
                      We provide routine eye exams, laser treatments, and
                      advanced surgical procedures to maintain and restore
                      vision health.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center">
                    <img
                      src="/images/departments-5.jpg"
                      alt="Ophthalmology"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;