package com.eduardo.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.eduardo.model.User;

@Repository("userRepository")
public class UserRepository {

	@PersistenceContext(type = PersistenceContextType.EXTENDED)
	private EntityManager manager;

	@Transactional
	public void save(User user) {
		manager.persist(user);
	}

	@Transactional
	public void update(User user) {
		manager.merge(user);
	}

	public User getUser(int id) {
		return manager.find(User.class, id);
	}

	@Transactional
	public void delete(int id) {
		User user = getUser(id);
		manager.remove(user);
	}

	public List<User> allUsers() {
		return (List<User>) manager.createQuery("SELECT e FROM User e ORDER BY e.name ", User.class).getResultList();
	}
}