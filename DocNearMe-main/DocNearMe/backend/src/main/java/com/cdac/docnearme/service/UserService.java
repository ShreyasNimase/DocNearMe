package com.cdac.docnearme.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.docnearme.dao.UserDao;
import com.cdac.docnearme.entity.User;
import com.cdac.docnearme.utility.Constants.UserStatus;


@Service
public class UserService {
	
	@Autowired
	private UserDao userDao;
	
	public User registerUser(User user) {
		User registeredUser = null;
		if(user != null) {
			registeredUser = this.userDao.save(user);
		}
		
		return registeredUser;
	}
	
	public User getUserByEmailIdAndPassword(String emailId, String password) {
		return this.userDao.findByEmailIdAndPassword(emailId, password);
	}
	
	public User getUserByEmailIdAndPasswordAndRole(String emailId, String password, String role) {
		return this.userDao.findByEmailIdAndPasswordAndRole(emailId, password, role);
	}
	
	public User getUserByEmailIdAndRole(String emailId, String role) {
		return this.userDao.findByEmailIdAndRole(emailId, role);
	}
	
	public User getUserByEmailId(String emailId) {
		return this.userDao.findByEmailId(emailId);
	}
	
	public User getUserById(int userId) {
		return this.userDao.findById(userId).get();
	}
	
	public User updateUser(User user) {
		return this.userDao.save(user);
	}
	
	public List<User> getAllUserByRole(String role) {
		return this.userDao.findByRoleAndStatus(role, UserStatus.ACTIVE.value());
	}

	public void deletUser(User user) {
		this.userDao.delete(user);
	}
}
