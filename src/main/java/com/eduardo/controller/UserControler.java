package com.eduardo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import com.eduardo.model.Result;
import com.eduardo.model.User;
import com.eduardo.repository.UserRepository;

@Controller
@RequestMapping("/user")
public class UserControler {

	@Autowired
	Result result;

	@Autowired
	UserRepository userRepository;

	@RequestMapping(value = "/register.html", method = RequestMethod.GET)
	public ModelAndView register() {
		return new ModelAndView("register");
	}

	@RequestMapping(value = "/users.html", method = RequestMethod.GET)
	public ModelAndView allUsers() {
		return new ModelAndView("allUsers");
	}

	@RequestMapping(value = "/edit.html/{id}", method = RequestMethod.GET)
	public ModelAndView edit(@PathVariable int id) {
		User user = userRepository.getUser(id);
		return new ModelAndView("edit", "user", user);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResponseEntity<Void> save(@RequestBody User user) {
		try {
			userRepository.save(user);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public ResponseEntity<Void> update(@RequestBody User user) {
		try {
			userRepository.update(user);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public ResponseEntity<List<User>> users() {
		List<User> users = userRepository.allUsers();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable int id) {
		userRepository.delete(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}