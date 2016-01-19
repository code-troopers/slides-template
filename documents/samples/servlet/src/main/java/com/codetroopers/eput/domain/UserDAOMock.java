package com.codetroopers.eput.domain;

import com.codetroopers.eput.domain.entities.User;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.Arrays;
import java.util.List;

/**
 * Created by cgatay on 19/01/16.
 */
//tag::class[]
@Stateless
public class UserDAOMock {

    //tag::allMethod[]
    public List<User> all(){
        return Arrays.asList(
                new User("bobba", "bobba@code-troopers.com"),
                new User("jango", "jango@code-troopers.com")
        );
    }
    //end::allMethod[]
}
//end::class[]
