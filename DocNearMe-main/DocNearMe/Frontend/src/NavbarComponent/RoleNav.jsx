import AdminHeader from "./AdminHeader";
import NormalHeader from "./NormalHeader";
import PatientHeader from "./PatientHeader";
import DoctorHeader from "./DoctorHeader";

const RoleNav = () => {
  const doctor = JSON.parse(sessionStorage.getItem("active-doctor"));
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
   const patient = JSON.parse(sessionStorage.getItem("active-patient"));


  if (patient != null) {
    return <PatientHeader />;
  } else if (admin != null) {
    return <AdminHeader />;
  } else if (doctor != null) {
    return <DoctorHeader />;
  }
   else {
    return <NormalHeader />;
  }
};

export default RoleNav;
