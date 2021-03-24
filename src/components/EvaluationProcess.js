import React from "react";
import "./Home.css";
import {
  Link
} from "react-router-dom";



class EvaluationProcess extends React.Component {
  constructor(props, context) {
		super(props, context);
	}
	render() {

	return (
      <div style= {{'padding':'0% 5% 5% 5%' }}>

        <nav>

         <div className="menu">
           <div>
             <Link to="/" style={{ textDecoration: 'none',color: '#000' }}>Home</Link>
           </div>
           <div className="push">
             <Link to="/generate"  style={{ textDecoration: 'none',color: '#000', padding: "0% 0% 0% 0%" }}>Evaluation Process</Link>
           </div>  
           <div style={{ textDecoration: 'none', padding: "0% 0% 0% 2%" }}>
             Publication
           </div>
         </div>

        
        </nav>

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
          <div className = "navbar">

          
          </div>
          <div className="title">
            <p>Evaluation Process </p>
            <img className="button" src="profile.png"/>
            {/*<h5><u>Evaluation Process </u></h5>*/}
          </div>

          <div className="section">
            <h2>Expert Study</h2>
            <h4>Goal ⛳</h4>
            <p>Evaluate the quality of the joke based on expert knowledge of humor. </p>
            <h4>Procedure 📝</h4>
            <p>The study is going to be a moderated one. </p>
            <p>Since we are interested in evaluating the quality of the joke being generated, we use the generator as the backend of EDDIE.</p>
            <p>1 the "funniness" of the joke </p>
            <p>2 the complexity of the humor</p>
            <p>3 the grammatical correctness of the jokes</p>

          </div>


          <div className="section">
            <h2>General Study</h2>
            <h4>Goal ⛳</h4>
            <p>Evaluate how humorous the jokes are and the impact on the mental health.</p>
            <h4>Participants 👥 </h4>
            <p>College Students </p>
            <p>1 Regular Group: Whether the backend design is a generator or a retrieval model is not known to the participants.</p>
            <p>1.1 Before the study, we provide the following information to the participants: EDDIE is a chatbot that provides jokes. It will ask you to provide a keyword for which it is going to present a related jokes. The jokes may not necessarily be humorous, and how funny the jokes are is up to your discernment.  </p>
            <p>2 Blind Group: The backend model will not be known to the participant.</p>
            <p>2.1 Before the study, we provide the following information to the participants: EDDIE is a text generation AI. It will ask you to provide a keyword for which it will present related text. Please tell us if you think any of the responses are funny. </p>
            <h4>Procedure 📝 </h4>
            <p>There are two main groups: Regular and Blind Group. Within each of these groups, there are two subgroups: Generator and Retrieval groups. Knowing that the produced sentences are jokes may influence the subjects to perceive that the sentences are more humorous, so we keep the blind group, for which we do not specify that the sentences are jokes. Also, we want to test the effectiveness of our two main model types so we divide each of the main groups into subgroups. The participants will be in a moderated study where they will be given survey questions to answer.</p>
            <p>1 Regular Group: This group will be provided with an introduction of Eddie and its goals.</p>
            <p>2 Blind Group: This group will not be provided the goals of Eddie. The introduction will describe it as a text generating chatbot.</p>
            <p>3 Generator Group: This group will use use the Generator based model</p>
            <p>4 Retrieval Group: This group will use the Retrieval based model</p>
          </div>

          <div className="section">
            <h2>Storage Procedure </h2>
            <h4>Google forms 📝 </h4>
            <p>We will have participants fill out a google forms sheet during the moderated session in order to gauge feedback. The only personal information we record is the self-described mental state before interacting with the bot and after interacting with the bot. Form results will automatically be collected and stored on a Google Sheets spreadsheet. Only approved researchers will have access to this password-protected spreadsheet. </p>
            <h4>Google docs 📝 </h4>
            <p>We will write extra notes of our study on a password-protected Google Docs. Only researchers approved in this study will have access to this document.</p>
            <h4>Bot's Meta Data 📝</h4>
            <p>EDDIE's backend runs on a secure AWS server. All usage is logged on that server and will only stay on that server in a local database. Both the database and the server are password-protected</p>
          </div>
        </div>

        {/*<img className="container__image" src="https://mtdata.ru/u7/photo53A0/20946911428-0/original.jpg#20946911428"  border="1px"/>*/}




        {/* <Link to="/bot">
            <button type="button">
                  Click Me!
            </button>
        </Link> */}
      </div>
      </div>
    );
    }
}

export default EvaluationProcess;