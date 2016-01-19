package com.codetroopers.eput;

import javax.enterprise.inject.Produces;
import javax.persistence.EntityManager;

/**
 * Created by cgatay on 19/01/16.
 */
public class InjectInfo {
    @Produces
    EntityManager produceEntityManager(){
        //hack to deploy without a full JPA context
        return null;
    }
}
