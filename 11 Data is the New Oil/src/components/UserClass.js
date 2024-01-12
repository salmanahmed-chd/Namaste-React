import React from "react";
import logoImage from "../../images/logo.png";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div className="user-card">
        <div>
          <img src={logoImage} alt="Logo" />
        </div>
        <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.location}</p>
          <p>{this.props.handle}</p>

          <h3>{this.state.count}</h3>

          <button onClick={
            this.setState({
              count: this.state.count + 1,
            })
          }>
            Count Increment
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;
