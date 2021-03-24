import React from "react";
import "./Home.css";
import {
  Link
} from "react-router-dom";



class About extends React.Component {
  constructor(props, context) {
		super(props, context);
	}
	render() {

	return (
      <div>
       {/*} <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>*/}
        
        <div className="container">
        <div>
          <div className="title">
            <p>EDDIE</p>
            <img className="button" src="profile.png"/>
            {/*<h5><u>Evaluation Process </u></h5>*/}
          </div>

          <div className="section">
            <h2>Overview</h2>
            <p>EDDIE is a chatbot that generates jokes based on a user given keyword.</p>
          </div>
         
          <div className="section">
            <h2>Goal</h2>
            <p>This chatbot was developed with the purpose of increasing the existing amount of available jokes and also help improve the mental health of college students by providing an interactive joke generator.</p>
          </div>
          <div className="section">
            <h2>How it works</h2>
            <p>Eddie uses two separate models to make provide the joke: Generator model and Retrieval model. The generator model uses our own algorithm to generate the joke from the keywords. The retrieval model retrieves the best joke that relates closest to the keyword inputted.</p>
            <p>Joke candidates and keywords first go through a toxicity filter in order to maximize user experience.</p>
            <p>Afterward, several joke candidates are generated and our joke classifier picks the best to display.</p>
          </div>
        </div>

        {/*<img className="container__image" src="https://mtdata.ru/u7/photo53A0/20946911428-0/original.jpg#20946911428"  border="1px"/>*/}
        <div className="button">
          {<img className="button" src="Apple iPad Air 2020 Space Gray Landscape 1.png"/>}
            <div className="container__button">
              <Link to="/generate">
                <img className="button" src="Rectangle 3.png"/>
              </Link>
            </div>
        </div>
        </div>
        {/*<img  src="Apple iPad Air 2020 Space Gray Landscape 1.png"  border="1px"/>*/}

        
       

        <div className="section">
          <h2>Research Team</h2>
          <ul s >
            <li><span><b>Anish Thite</b>: Researcher and Developer</span></li>
            <li><span><b>Irene Lee</b>: Researcher and Developer</span></li>
            <li><span><b>Mohan Dodda</b>: Researcher and Developer</span></li>
            <li><span><b>Xu Zeng</b>: Researcher and Designer</span></li>
            <li><span><b>Diyi Yang</b>:  Advisor</span></li>
          </ul>
        </div>


        {/* <Link to="/bot">
            <button type="button">
                  Click Me!
            </button>
        </Link> */}
      </div>
    );
    }
}

export default About;