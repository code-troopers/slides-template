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
@Stateless
public class UserService {
    @Inject
    public UserDAO userDAO;

    public List<User> all(){
        return userDAO.all();
    }
}
//end::class[]