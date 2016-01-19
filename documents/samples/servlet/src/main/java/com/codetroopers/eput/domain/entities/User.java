package com.codetroopers.eput.domain.entities;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

/**
 * Created by cgatay on 19/01/16.
 */
//tag::class[]
@Entity(name="user")
public class User {
    @NotNull
    public String name;
    @NotNull
    public String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
}
//end::class[]
