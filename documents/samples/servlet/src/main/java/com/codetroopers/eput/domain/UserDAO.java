package com.codetroopers.eput.domain;

import com.codetroopers.eput.domain.entities.User;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by cgatay on 19/01/16.
 */
//tag::class[]
@Stateless
public class UserDAO {
    @Inject
    EntityManager em;

    //tag::allMethod[]
    public List<User> all(){
        return em.createQuery("SELECT u FROM User u", User.class).getResultList();
    }
    //end::allMethod[]
}
//end::class[]
