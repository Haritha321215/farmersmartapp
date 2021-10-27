package org.launchcode.farmersmart.repository;

import org.launchcode.farmersmart.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<User, Integer> {

}
