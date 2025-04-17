package com.cdac.docnearme.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cdac.docnearme.dao.AppointmentDao;
import com.cdac.docnearme.entity.Appointment;

@Repository
public class AppointmentService {
	
	@Autowired
	private AppointmentDao appointmentDao;
	
	public Appointment addAppointment(Appointment appointment) {
		return appointmentDao.save(appointment);
	}
	
	public Appointment getAppointmentById(int id) {
		return appointmentDao.findById(id).get();
	}

	public List<Appointment> getAllAppointment() {
		return appointmentDao.findAll();
	}
	
	public List<Appointment> getAppointmentByPatientId(int patiendId) {
		return appointmentDao.findByPatientId(patiendId);
	}
	
	public List<Appointment> getAppointmentByDoctorId(int doctorId) {
		return appointmentDao.findByDoctorId(doctorId);
	}
	
	
}
