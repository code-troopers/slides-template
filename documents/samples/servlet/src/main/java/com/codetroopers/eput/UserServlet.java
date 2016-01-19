package com.codetroopers.eput;

import com.codetroopers.eput.services.UserService;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by cgatay on 13/01/16.
 */
//tag::class[]
@WebServlet(urlPatterns = "/users")
public class UserServlet extends HttpServlet{

    @Inject
    UserService userService;

    @Override
    //tag::get[]
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        userService.all().forEach(u ->{
            try {
                resp.getWriter()
                        .println(u.name
                                + " - "
                                + u.email
                        );
            } catch (IOException e) {
                //don't ever do this
            }
        });
    }
    //end::get[]
}
//end::class[]