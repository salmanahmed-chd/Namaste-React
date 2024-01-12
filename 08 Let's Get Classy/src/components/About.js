import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      {/* <User name="SavorSpot" location="Chandigarh" handle="@savorspot" /> */}
      <UserClass name="SavorSpot" location="Chandigarh" handle="@savorspot" />
    </div>
  );
};

export default About;
