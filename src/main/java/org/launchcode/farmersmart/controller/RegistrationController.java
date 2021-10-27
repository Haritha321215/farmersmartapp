package org.launchcode.farmersmart.controller;

import org.launchcode.farmersmart.model.Product;
import org.launchcode.farmersmart.model.User;
import org.launchcode.farmersmart.repository.ProductRepository;
import org.launchcode.farmersmart.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class RegistrationController {
    @Autowired
    public RegistrationRepository registrationRepository;

    // create user rest api
    @PostMapping("/registration")
    public User createUser(@RequestBody User user)
    {
        return registrationRepository.save(user);
    }

}
