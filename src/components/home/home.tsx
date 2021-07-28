import * as React from "react";
import Img from "../image";
import "./home.css";


class Home extends React.Component
{
  render()
  {
    return (
      <>
          <div className="home-bubble">
            <div className="bubble bubble_one"></div>
            <div className="bubble bubble_two"></div>
            <div className="bubble bubble_tree"></div>
            <div className="bubble bubble_four"></div>
        </div>
          <section className="home-container">
            <div className="home-section">
              <h1>Beyond error and token</h1>
              <div className="text-part">
                <div className="content"><h2 className="f_size_24 f_700 t_color3 l_height30 mt_20 mb_20">Meet
                  Hexometer, your AI sidekick that works 24/7 to catch problems before they affect your business.</h2>
                  <button className="software_banner_btn trial_btn">Get started with our free plan</button>
                  <p>Every day your website can face an increasing range of threats. Server
                    problems, slow landing pages, broken links, frustrating mobile experiences,
                    embarrassing spelling mistakes, changing SEO rules, 3rd party services
                    breaking, or security issues that put your business at risk.
                  </p>
                  <p>To make matters worse, these issues can linger unnoticed, wasting your ad-budget and costing your
                    business lost sales.</p>
                  <p>Hexometer monitors your website 24/7, to catch Availability, Performance,
                    User experience, SEO, Health and Security problems, before they affect
                    your customers.
                  </p></div>
              </div>
              <div className="image-part">
                <Img image="dashScreen"/>
              </div>
            </div>
          </section>
      </>
    );
  }
}

export default Home;