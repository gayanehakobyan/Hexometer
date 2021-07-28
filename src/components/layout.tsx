/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import "./layout.css";

const Layout = ({children}) =>
{

    return (
        <div>
            <Header />
            <div className="content-wrapper">
              <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
