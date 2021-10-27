package org.launchcode.farmersmart.model;

import javax.persistence.*;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable=false, unique = true, length = 40)
    private String emailId;
    @Column(nullable=false,length = 40)
    private String userName;
    @Column(nullable=false, length = 64)
    private String passWord;

    public User(){}

    public User(int id, String emailId, String userName, String passWord) {
        super();
        this.id = id;
        this.emailId = emailId;
        this.userName = userName;
        this.passWord = passWord;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }



}
