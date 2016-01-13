package com.codetroopers.eput;

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
@WebServlet(urlPatterns = "/")
public class MyServlet extends HttpServlet{

    static int count[] = new int[]{0,0};

    @Override
    //tag::get[]
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        count[0]++;
        writeResponse(resp);
    }
    //end::get[]

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        count[1]++;
        writeResponse(resp);
    }

    private void writeResponse(HttpServletResponse response) throws IOException {
        response.getWriter().println("Get count : " + count[0]);
        response.getWriter().println("Post count : " + count[1]);
    }
}
//end::class[]