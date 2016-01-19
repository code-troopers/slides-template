package com.codetroopers.eput.services;

import com.codetroopers.eput.domain.UserDAO;
import com.codetroopers.eput.domain.entities.User;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.List;

/**
 * Created by cgatay on 19/01/16.
 */
//tag::class[]
public class UserServiceNoIoC {
    private UserDAO userDAO;

    //tag::ctor[]
    public UserServiceNoIoC(UserDAO userDAO) {
        this.userDAO = userDAO;
    }
    //end::ctor[]

    public List<User> all(){
        return this.userDAO.all();
    }
}
//end::class[]