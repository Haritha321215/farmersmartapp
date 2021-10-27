package org.launchcode.farmersmart.controller;

import org.launchcode.farmersmart.model.Product;
import org.launchcode.farmersmart.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
    @Autowired
    public ProductRepository productRepository;

    //get all products

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    // create product rest api
    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product)
    {
        return productRepository.save(product);
    }

    //get employee by id rest api
    @GetMapping("/products/{id}")
    public ResponseEntity<Optional<Product>> getProductById(@PathVariable Integer id){
        Optional<Product> product= Optional.ofNullable(productRepository.findById(id)
                .orElseThrow(() -> new ResourceAccessException("Product not exist with id" + id)));
        return ResponseEntity.ok(product);
    }

    //update product rest api
    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Integer id, @RequestBody Product productDetails){
        Product product= productRepository.findById(id)
                .orElseThrow(()-> new ResourceAccessException("Product not exist with id"+id));
        product.setProductName(productDetails.getProductName());
        product.setPrice(productDetails.getPrice());
        product.setQuantity(productDetails.getQuantity());
        Product updatedProduct=productRepository.save(product);
        return ResponseEntity.ok(updatedProduct);
    }
    // delete product rest api
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteProduct(@PathVariable Integer id){
        Product product=productRepository.findById(id)
                .orElseThrow(()->new ResourceAccessException("Product not exist with id:"+id));
        productRepository.delete(product);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
