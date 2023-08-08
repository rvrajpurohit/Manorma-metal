import React from "react";
import "./About.css"; // Import the CSS file for the About page styles

const About = () => {
  return (
    <div className="about-page">
      <div className="about-page__content">
        <h2>
          <b>Welcome to Manorma Metal</b>
        </h2>
        <p>
          Your Trusted Partner in Metal Manufacturing Excellence
          <br />
          <br />
          At Manorma Metal, we take immense pride in being a leading name in the
          metal manufacturing industry. With years of expertise and a commitment
          to excellence, we specialize in crafting high-quality metal pipes and
          valves that cater to a diverse range of industries. Our dedication to
          precision, reliability, and innovation sets us apart as a trusted
          partner for all your metal manufacturing needs.
        </p>
        <br />
        <p>Why Choose Manorma Metal?</p>
        <ol>
          <li>
            Expertise That Matters: Backed by a team of skilled engineers and
            professionals, we possess the technical know-how to deliver
            cutting-edge metal solutions that meet the highest industry
            standards.
          </li>
          <li>
            Unyielding Quality: At Manorma Metal, quality is at the core of
            everything we do. Our rigorous quality assurance processes ensure
            that each product leaving our facility is of superior quality and
            durability.
          </li>
          <li>
            Versatile Solutions: We understand that each project comes with
            unique requirements. That's why our diverse range of metal pipes and
            valves can be customized to fit your specific needs.
          </li>
          <li>
            Industry Leaders: As industry leaders, we continuously invest in
            state-of-the-art technology and machinery to provide you with the
            latest advancements in metal manufacturing.
          </li>
          <li>
            Customer-Centric Approach: Our clients are at the heart of our
            business. We listen attentively to your needs and work closely with
            you to deliver solutions that exceed your expectations.
          </li>
        </ol>
        <h4>Our Product Range:</h4>
        <p>
          <b>Metal Pipes:</b> From seamless stainless steel pipes to
          corrosion-resistant alloy pipes, our comprehensive range covers
          various sizes and specifications to suit your industrial applications.
        </p>
        <p>
          <b>Valves:</b> Whether it's gate valves, ball valves, or butterfly
          valves, our precision-crafted valves ensure smooth flow control and
          reliable performance.
        </p>
        <h4>Industries We Serve:</h4>
        <p>
          Our products find applications across diverse industries, including:
        </p>
        <br />
        <ul>
          <li>Oil and Gas</li>
          <li>Petrochemicals</li>
          <li>Power Generation</li>
          <li>Water Treatment</li>
          <li>Pharmaceuticals</li>
          <li>Food and Beverage</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
