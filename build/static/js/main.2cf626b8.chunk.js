(this.webpackJsonpeddie=this.webpackJsonpeddie||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(57),s=a.n(n),i=(a(67),a(3)),l=a(4),c=a(6),u=a(5),g=a(15),d=a(1),m=(a(17),a(7)),h=a.n(m),p=a(11),b=a.n(p),v=a(12),f=a.n(v),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={loading:!0,result:o.a.createElement(m.Loading,null),trigger:!1},r.searchInputTimeout=setTimeout((function(){r.sendfeedback(e).then((function(e){console.log(e),r.state.result="Thanks for the feedback!",r.props.triggerNextStep()}))}),400),r}return Object(l.a)(a,[{key:"render",value:function(){return this.state.result}},{key:"sendfeedback",value:function(e){var t={joketuple:this.props.history,feedback:e.steps["user-feedback"].message,model:this.props.model};return b.a.create({httpsAgent:new f.a.Agent({rejectUnauthorized:!1,strictSSL:!1})}).post(this.props.feedbackURL,t).then((function(e){return console.log(e.data),this.props.history=[],e.data})).catch((function(e){return console.log(e)}))}}]),a}(o.a.Component),k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={loading:!0,result:o.a.createElement(m.Loading,null),trigger:!1},r.searchInputTimeout=setTimeout((function(){r.sendfeedback(e).then((function(e){console.log(e),r.state.result="Thanks for the feedback!",r.props.triggerNextStep()}))}),400),r}return Object(l.a)(a,[{key:"render",value:function(){return this.state.result}},{key:"sendfeedback",value:function(e){var t={joketuple:this.props.history,feedback:e.steps["user-nojoke"].message,model:this.props.model};return b.a.create({httpsAgent:new f.a.Agent({rejectUnauthorized:!1,strictSSL:!1})}).post(this.props.FEEDBACK_URL,t).then((function(e){return console.log(e.data),this.props.history=[],e.data})).catch((function(e){return console.log(e)}))}}]),a}(o.a.Component),E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={loading:!0,result:o.a.createElement(m.Loading,null),trigger:!1},r.searchInputTimeout=setTimeout((function(){r.sendfeedback(e).then((function(t){console.log(t),"\ud83d\ude0d"===e.steps.goodoptions.message?r.state.result="(~\u02d8\u25be\u02d8)~ That\u2019s great! Glad you liked it!":(console.log(e.steps.goodoptions.message),r.state.result="I\u2019ll try harder next time\u2026 \u1559(\u21c0\u2038\u21bc\u2036)\u1557"),r.props.triggerNextStep()}))}),400),r}return Object(l.a)(a,[{key:"render",value:function(){return this.state.result}},{key:"sendfeedback",value:function(e){var t={type:"generate",joketuple:this.props.history,feedback:e.steps.goodoptions.message,model:this.props.model},a=b.a.create({httpsAgent:new f.a.Agent({rejectUnauthorized:!1,strictSSL:!1})});return console.log("feedback"),console.log(this.props.feedbackurl),a.post(this.props.feedbackurl,t).then((function(e){return console.log(e.data),e.data})).catch((function(e){return console.log(e)}))}}]),a}(o.a.Component),w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={loading:!0,result:o.a.createElement(m.Loading,null),trigger:!1},r.searchInputTimeout=setTimeout((function(){r.sendfeedback(e).then((function(e){console.log(e),r.state.result="Do you have another joke?",r.props.triggerNextStep()}))}),400),r}return Object(l.a)(a,[{key:"render",value:function(){return this.state.result}},{key:"sendfeedback",value:function(e){var t={type:"classifier",joketuple:this.props.history,feedback:e.steps.classifier_eval_options.message},a=b.a.create({httpsAgent:new f.a.Agent({rejectUnauthorized:!1,strictSSL:!1})});return console.log("feedback"),console.log(this.props.feedbackurl),a.post(this.props.feedbackurl,t).then((function(e){return console.log(e.data),e.data})).catch((function(e){return console.log(e)}))}}]),a}(o.a.Component),j=a(23),S=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;Object(i.a)(this,a),(r=t.call(this,e)).stopTimer(),r.CheckIdleTime=r.CheckIdleTime.bind(Object(j.a)(r)),r.state={loading:!0,result:o.a.createElement(m.Loading,null),trigger:!1,trigfunc:r.props.triggerNextStep},console.log(e.previousStep);var n=e.previousStep.message;return"Random"===n?n=function(){var e=O(Object.keys(_));return O(_[e])}():Object.keys(_).includes(n)&&(n=function(e){return O(_[e])}(n)),r.props.history.push(n),r.searchInputTimeout=setTimeout((function(){r.makeprediction().then((function(e){var t;r.props.history.push(e),"Sorry I don't have a joke about that right now"===e?(r.state.result="There was no joke returned. Can you please suggest a joke for us? If you can't think of one please type no",t="user-nojoke"):"Joke is not appropriate"===e?(r.state.result="The keyword you typed in is not appropriate. Please type a more appropriate joke.",t="user-nojoke"):(r.state.result=e,t="quality"),r.startTimer(),console.log("here"),r.props.triggerNextStep({value:t,trigger:t})}))}),400),r}return Object(l.a)(a,[{key:"makeprediction",value:function(){var e={history:this.props.history[this.props.history.length-1]},t=b.a.create({httpsAgent:new f.a.Agent({rejectUnauthorized:!1,strictSSL:!1})});return console.log("IRL"),console.log(this.props.url),t.post(this.props.url,e).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.result}},{key:"startTimer",value:function(){this.interval=window.setInterval(this.CheckIdleTime,1e3)}},{key:"stopTimer",value:function(){window.clearInterval(this.interval)}},{key:"CheckIdleTime",value:function(){this._idleSecondsCounter++,this._idleSecondsCounter>=30&&(this._idleSecondsCounter=0)}}]),a}(o.a.Component);S.defaultProps={steps:void 0,triggerNextStep:void 0};var T=S,_={"Music \ud83c\udfb5":["music","beat","DJ","pop","sing","hip","hop","rap","rock","instrument","heavy","metal","song","band","composer","artist","drum","piano","trumpet","trombone","organ","scale","choir","Elvis","Taylor Swift","BTS","Post Malone"],"Food \ud83c\udf55":["food","eat","walnut","apple","banana","orange","pancake","toast","meat","potato","mayo","soup","bagel","noodle","chip","cereal","candy","cookie","egg","ice","cream","honey","mushroom","hamburger","meal","pie","pizza","sandwich","snack","vegetable","fruit","bacon","corn","coconut","jam","jelly","peanut","cake","salsa","nut","cheese","sugar","butter","steak","burrito","french fry"],"Sports \ud83c\udfc0":["sport","basketball","football","soccer","baseball","score","ball","bat","hoop","box","wrestling","running","Olympics","skating","hockey","cricket","quarterback","stadium","court","fans","softball","NBA","NFL","MLS"],"School \ud83d\udcdd":["school","college","ruler","pencil","homework","test","quiz","science","english","math","calculus","algebra","campus","debt","graduate","sophomore","freshman","junior","senior","university","professor","teacher","instructor","faculty","fraternity","roommate","loan"],"COVID \ud83e\udd22":["social distancing","coronavirus","covid","vaccine","online"]};function O(e){return e[Math.floor(Math.random()*e.length)]}var I=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;Object(i.a)(this,a),(r=t.call(this,e)).stopTimer(),r.CheckIdleTime=r.CheckIdleTime.bind(Object(j.a)(r)),r.state={loading:!0,result:o.a.createElement(m.Loading,null),trigger:!1,trigfunc:r.props.triggerNextStep};var n=e.previousStep.message;return r.props.history.push(n),r.searchInputTimeout=setTimeout((function(){r.makeprediction().then((function(e){r.props.history.push(e),r.state.result=e,r.startTimer(),console.log("here"),r.props.triggerNextStep({value:"classifier_agree",trigger:"classifier_agree"})}))}),400),r}return Object(l.a)(a,[{key:"makeprediction",value:function(){var e={history:this.props.history[this.props.history.length-1]},t=b.a.create({httpsAgent:new f.a.Agent({rejectUnauthorized:!1,strictSSL:!1})});return console.log("IRL"),console.log(this.props.url),t.post(this.props.url,e).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.result}},{key:"startTimer",value:function(){this.interval=window.setInterval(this.CheckIdleTime,1e3)}},{key:"stopTimer",value:function(){window.clearInterval(this.interval)}},{key:"CheckIdleTime",value:function(){this._idleSecondsCounter++,this._idleSecondsCounter>=30&&(this._idleSecondsCounter=0)}}]),a}(o.a.Component);I.defaultProps={steps:void 0,triggerNextStep:void 0};var A=I,x=(a(56),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e,r){return Object(i.a)(this,a),t.call(this,e,r)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:{padding:"0% 5% 5% 5%"}},o.a.createElement("nav",null,o.a.createElement("div",{className:"menu"},o.a.createElement("div",null,o.a.createElement(g.b,{to:"/",style:{textDecoration:"none",color:"#000"}},"Home")),o.a.createElement("div",{className:"push"},o.a.createElement(g.b,{to:"/evaluation_process",style:{textDecoration:"none",color:"#000",padding:"0% 0% 0% 0%"}},"Evaluation Process")),o.a.createElement("div",{style:{textDecoration:"none",padding:"0% 0% 0% 2%"}},"Publication"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("div",{className:"navbar"}),o.a.createElement("div",{className:"title"},o.a.createElement("p",null,"EDDIE "),o.a.createElement("img",{className:"button",src:"profile.png"})),o.a.createElement("div",{className:"section"},o.a.createElement("h2",null,"Overview"),o.a.createElement("p",null,"EDDIE is a chatbot that generates jokes based on a user given keyword.")),o.a.createElement("div",{className:"section"},o.a.createElement("h2",null,"Goal"),o.a.createElement("p",null,"This chatbot was developed with the purpose of increasing the existing amount of available jokes and also help improve the mental health of college students by providing an interactive joke generator.")),o.a.createElement("div",{className:"section"},o.a.createElement("h2",null,"How it works"),o.a.createElement("p",null,"Eddie uses two separate models to make provide the joke: Generator model and Retrieval model. The generator model uses our own algorithm to generate the joke from the keywords. The retrieval model retrieves the best joke that relates closest to the keyword inputted."),o.a.createElement("p",null,"Joke candidates and keywords first go through a toxicity filter in order to maximize user experience."),o.a.createElement("p",null,"Afterward, several joke candidates are generated and our joke classifier picks the best to display."))),o.a.createElement("div",{className:"button"},o.a.createElement("img",{className:"button",src:"Apple iPad Air 2020 Space Gray Landscape 1.png"}),o.a.createElement("div",{className:"container__button"},o.a.createElement(g.b,{to:"/generate"},o.a.createElement("img",{className:"button",src:"Rectangle 3.png"}))))))}}]),a}(o.a.Component)),D=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e,r){return Object(i.a)(this,a),t.call(this,e,r)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:{padding:"0% 5% 5% 5%"}},o.a.createElement("nav",null,o.a.createElement("div",{className:"menu"},o.a.createElement("div",null,o.a.createElement(g.b,{to:"/",style:{textDecoration:"none",color:"#000"}},"Home")),o.a.createElement("div",{className:"push"},o.a.createElement(g.b,{to:"/generate",style:{textDecoration:"none",color:"#000",padding:"0% 0% 0% 0%"}},"Evaluation Process")),o.a.createElement("div",{style:{textDecoration:"none",padding:"0% 0% 0% 2%"}},"Publication"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("div",{className:"navbar"}),o.a.createElement("div",{className:"title"},o.a.createElement("p",null,"Evaluation Process "),o.a.createElement("img",{className:"button",src:"profile.png"})),o.a.createElement("div",{className:"section"},o.a.createElement("h2",null,"Expert Study"),o.a.createElement("h4",null,"Goal \u26f3"),o.a.createElement("p",null,"Evaluate the quality of the joke based on expert knowledge of humor. "),o.a.createElement("h4",null,"Procedure \ud83d\udcdd"),o.a.createElement("p",null,"The study is going to be a moderated one. "),o.a.createElement("p",null,"Since we are interested in evaluating the quality of the joke being generated, we use the generator as the backend of EDDIE."),o.a.createElement("p",null,'1 the "funniness" of the joke '),o.a.createElement("p",null,"2 the complexity of the humor"),o.a.createElement("p",null,"3 the grammatical correctness of the jokes")),o.a.createElement("div",{className:"section"},o.a.createElement("h2",null,"General Study"),o.a.createElement("h4",null,"Goal \u26f3"),o.a.createElement("p",null,"Evaluate how humorous the jokes are and the impact on the mental health."),o.a.createElement("h4",null,"Participants \ud83d\udc65 "),o.a.createElement("p",null,"College Students (Georgia Tech)"),o.a.createElement("p",null,"1 Regular Group: Whether the backend design is a generator or a retrieval model is not known to the participants."),o.a.createElement("p",null,"1.1 Before the study, we provide the following information to the participants: EDDIE is a chatbot that provides jokes. It will ask you to provide a keyword for which it is going to present a related jokes. The jokes may not necessarily be humorous, and how funny the jokes are is up to your discernment.  "),o.a.createElement("p",null,"2 Blind Group: The backend model will not be known to the participant."),o.a.createElement("p",null,"2.1 Before the study, we provide the following information to the participants: EDDIE is a text generation AI. It will ask you to provide a keyword for which it will present related text. Please tell us if you think any of the responses are funny. "),o.a.createElement("h4",null,"Procedure \ud83d\udcdd "),o.a.createElement("p",null,"There are two main groups: Regular and Blind Group. Within each of these groups, there are two subgroups: Generator and Retrieval groups. Knowing that the produced sentences are jokes may influence the subjects to perceive that the sentences are more humorous, so we keep the blind group, for which we do not specify that the sentences are jokes. Also, we want to test the effectiveness of our two main model types so we divide each of the main groups into subgroups. The participants will be in a moderated study where they will be given survey questions to answer."),o.a.createElement("p",null,"1 Regular Group: This group will be provided with an introduction of Eddie and its goals."),o.a.createElement("p",null,"2 Blind Group: This group will not be provided the goals of Eddie. The introduction will describe it as a text generating chatbot."),o.a.createElement("p",null,"3 Generator Group: This group will use use the Generator based model"),o.a.createElement("p",null,"4 Retrieval Group: This group will use the Retrieval based model")),o.a.createElement("div",{className:"section"},o.a.createElement("h2",null,"Storage Procedure "),o.a.createElement("h4",null,"Google forms \ud83d\udcdd "),o.a.createElement("p",null,"We will have participants fill out a google forms sheet during the moderated session in order to gauge feedback. The only personal information we record is the self-described mental state before interacting with the bot and after interacting with the bot. Form results will automatically be collected and stored on a Google Sheets spreadsheet. Only approved researchers will have access to this password-protected spreadsheet. "),o.a.createElement("h4",null,"Google docs \ud83d\udcdd "),o.a.createElement("p",null,"We will write extra notes of our study on a password-protected Google Docs. Only researchers approved in this study will have access to this document."),o.a.createElement("h4",null,"Bot's Meta Data \ud83d\udcdd"),o.a.createElement("p",null,"EDDIE's backend runs on a secure AWS/Georgia Tech server. All usage is logged on that server and will only stay on that server in a local database. Both the database and the server are password-protected")))))}}]),a}(o.a.Component),C="https://raspi.brrrr.live:4242",N=C+"/feedback",z=C+"/classify";Object({NODE_ENV:"production",PUBLIC_URL:"/eddie",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).NODE_TLS_REJECT_UNAUTHORIZED="0";var L=[];o.a.Component;function M(e){var t=C+e;return[{id:"startemoji",message:"Hey there! This is Eddie  (\u2022\u25e1\u2022) /",trigger:"startemoji2"},{id:"startemoji2",message:"Hope you are having a great day! How would you rate your mood today?",trigger:"emoji-buttons"},{id:"emoji-buttons",options:[{value:"\ud83d\ude29",label:"\ud83d\ude29",trigger:"crazy"},{value:"\ud83d\ude31",label:"\ud83d\ude31",trigger:"ohno"},{value:"\ud83d\ude2d",label:"\ud83d\ude2d",trigger:"crying"},{value:"\ud83d\ude41",label:"\ud83d\ude41",trigger:"unhappy"},{value:"\ud83d\ude1e",label:"\ud83d\ude1e",trigger:"worried"},{value:"\ud83d\ude43",label:"\ud83d\ude43",trigger:"upsidedown"},{value:"\ud83d\ude15",label:"\ud83d\ude15",trigger:"uncertain"},{value:"\ud83d\ude0a",label:"\ud83d\ude0a",trigger:"smiley"},{value:"\ud83d\ude06",label:"\ud83d\ude06",trigger:"laughing"}]},{id:"crazy",message:"Oh no! Well my week has been quite rough too. We got this!",trigger:"tellme"},{id:"ohno",message:"Honestly relatable, but we got this!",trigger:"tellme"},{id:"crying",message:"Aww, maybe I can help make you feel better",trigger:"tellme"},{id:"unhappy",message:"Aww, maybe I can help make you feel better",trigger:"tellme"},{id:"worried",message:"I hope I can cheer you up!",trigger:"tellme"},{id:"smiley",message:"Yay!",trigger:"tellme"},{id:"laughing",message:"Glad to hear that!",trigger:"tellme"},{id:"upsidedown",message:"Oh no!",trigger:"tellme"},{id:"uncertain",message:"Hmm.",trigger:"tellme"},{id:"tellme",message:"Tell me what you want to do today (\u3065\uff61\u25d5\u203f\u203f\u25d5\uff61)\u3065",trigger:"task_options"},{id:"task_options",options:[{value:"joke",label:"Generate a sentence from a keyword.",trigger:"jokestart"},{value:"exit",label:"Exit the game",trigger:"exit_game"}]},{id:"jokestart",message:"Alright! Just pick a topic for me! \u30fe(\u2310\u25a0_\u25a0)\u30ce",trigger:"topicoptions"},{id:"topicoptions",options:[{value:"music",label:"Music \ud83c\udfb5",trigger:"message-returner"},{value:"sports",label:"Sports \ud83c\udfc0",trigger:"message-returner"},{value:"school",label:"School \ud83d\udcdd",trigger:"message-returner"},{value:"food",label:"Food \ud83c\udf55",trigger:"message-returner"},{value:"covid",label:"COVID \ud83e\udd22",trigger:"message-returner"},{value:"random",label:"Random",trigger:"message-returner"},{value:"custom",label:"Custom",trigger:"custom"}]},{id:"custom",message:"What\u2019s your keyword?",trigger:"user"},{id:"user",user:!0,trigger:"message-returner"},{id:"message-returner",component:o.a.createElement(T,{history:L,model:e,url:t}),waitAction:!0,asMessage:!0},{id:"quality",message:"Did you like the sentence(s)??  (\u2022\u25e1\u2022) /",trigger:"goodoptions"},{id:"goodoptions",options:[{value:"good",label:"\ud83d\ude0d",trigger:"thanks"},{value:"bad",label:"\ud83d\ude29",trigger:"thanks"}]},{id:"thanks",component:o.a.createElement(E,{history:L,model:e,feedbackurl:N}),asMessage:!0,waitAction:!0,trigger:"anotherjoke"},{id:"anotherjoke",message:"Do you want me to make more stuff?",trigger:"anotherjokeoptions"},{id:"anotherjokeoptions",options:[{value:"jokestart",label:"Sure",trigger:"jokestart"},{value:"no",label:"Nah",trigger:"tellme"}]},{id:"ask_joke",message:"What\u2019s your statement?? \ud83e\udd29",trigger:"user_joke"},{id:"user_joke",user:!0,trigger:"message_classifier"},{id:"message_classifier",component:o.a.createElement(A,{history:L,url:z}),waitAction:!0,asMessage:!0},{id:"classifier_agree",message:"Do you agree with the score?",trigger:"classifier_eval_options"},{id:"classifier_eval_options",options:[{value:"\ud83d\ude24",label:"\ud83d\ude24",trigger:"classifier_feedback"},{value:"\ud83d\ude06",label:"\ud83d\ude06",trigger:"classifier_feedback"}]},{id:"classifier_feedback",component:o.a.createElement(w,{history:L,feedbackurl:N}),asMessage:!0,waitAction:!0,trigger:"want_another"},{id:"want_another",options:[{value:"nah",label:"nah",trigger:"tellme"},{value:"yea",label:"yea",trigger:"ask_joke"}]},{id:"continue new",message:"Please type another keyword and I will write a sentence based on it",trigger:"user"},{id:"user-nojoke",user:!0,trigger:"feedback-nojoke"},{id:"feedback-nojoke",component:o.a.createElement(k,{history:L,model:e,feedbackurl:N}),asMessage:!0,waitAction:!0,trigger:"continue new"},{id:"feedback-badjoke",component:o.a.createElement(y,{history:L,model:e,feedbackurl:N}),asMessage:!0,waitAction:!0,trigger:"continue new"},{id:"feedback-form",message:"Please tell me a something better (hit enter if you can't think of one).",trigger:"user-feedback"},{id:"user-feedback",user:!0,trigger:"feedback-badjoke"},{id:"thanks-message",delay:1500,message:"Thanks!",trigger:"thanks"},{id:"exit_game",component:o.a.createElement("div",null," It's time to say goodbye, hope to see you again. Before you leave, would you mind taking a survey for me? It will be very helpful for me to improve.  ",o.a.createElement("a",{href:"https://www.google.com/"},"Take the Survey")," "),asMessage:!0},{id:"exitlink",component:o.a.createElement("div",null," Link Doesn't work yet ",o.a.createElement("a",{href:"https://www.google.com/"},"Take the Survey:")," "),asMessage:!0}]}function G(e){var t=C+e;return[{id:"startemoji",message:"Hey there! This is Eddie  (\u2022\u25e1\u2022) /",trigger:"startemoji2"},{id:"startemoji2",message:"Hope you are having a great day! How would you rate your mood today?",trigger:"emoji-buttons"},{id:"emoji-buttons",options:[{value:"\ud83d\ude29",label:"\ud83d\ude29",trigger:"crazy"},{value:"\ud83d\ude31",label:"\ud83d\ude31",trigger:"ohno"},{value:"\ud83d\ude2d",label:"\ud83d\ude2d",trigger:"crying"},{value:"\ud83d\ude41",label:"\ud83d\ude41",trigger:"unhappy"},{value:"\ud83d\ude1e",label:"\ud83d\ude1e",trigger:"worried"},{value:"\ud83d\ude43",label:"\ud83d\ude43",trigger:"upsidedown"},{value:"\ud83d\ude15",label:"\ud83d\ude15",trigger:"uncertain"},{value:"\ud83d\ude0a",label:"\ud83d\ude0a",trigger:"smiley"},{value:"\ud83d\ude06",label:"\ud83d\ude06",trigger:"laughing"}]},{id:"crazy",message:"Oh no! Well my week has been quite rough too. We got this!",trigger:"tellme"},{id:"ohno",message:"Honestly relatable, but we got this!",trigger:"tellme"},{id:"crying",message:"Aww, maybe I can help make you feel better",trigger:"tellme"},{id:"unhappy",message:"Aww, maybe I can help make you feel better",trigger:"tellme"},{id:"worried",message:"I hope I can cheer you up with my jokes!",trigger:"tellme"},{id:"smiley",message:"Yay!",trigger:"tellme"},{id:"laughing",message:"Glad to hear that!",trigger:"tellme"},{id:"upsidedown",message:"Oh no!",trigger:"tellme"},{id:"uncertain",message:"Hmm.",trigger:"tellme"},{id:"tellme",message:"Tell me what you want to do today (\u3065\uff61\u25d5\u203f\u203f\u25d5\uff61)\u3065",trigger:"task_options"},{id:"task_options",options:[{value:"joke",label:"Give me a joke \ud83e\udd23",trigger:"jokestart"},{value:"exit",label:"Exit the game",trigger:"exit_game"}]},{id:"jokestart",message:"Alright! Just pick a topic for me! \u30fe(\u2310\u25a0_\u25a0)\u30ce",trigger:"topicoptions"},{id:"topicoptions",options:[{value:"music",label:"Music \ud83c\udfb5",trigger:"message-returner"},{value:"sports",label:"Sports \ud83c\udfc0",trigger:"message-returner"},{value:"school",label:"School \ud83d\udcdd",trigger:"message-returner"},{value:"food",label:"Food \ud83c\udf55",trigger:"message-returner"},{value:"covid",label:"COVID \ud83e\udd22",trigger:"message-returner"},{value:"random",label:"Random",trigger:"message-returner"},{value:"custom",label:"Custom",trigger:"custom"}]},{id:"custom",message:"What\u2019s your keyword?",trigger:"user"},{id:"user",user:!0,trigger:"message-returner"},{id:"message-returner",component:o.a.createElement(T,{history:L,model:e,url:t}),waitAction:!0,asMessage:!0},{id:"quality",message:"Did you like the joke??  (\u2022\u25e1\u2022) /",trigger:"goodoptions"},{id:"goodoptions",options:[{value:"good",label:"\ud83d\ude0d",trigger:"thanks"},{value:"bad",label:"\ud83d\ude29",trigger:"thanks"}]},{id:"thanks",component:o.a.createElement(E,{history:L,model:e,feedbackurl:N}),asMessage:!0,waitAction:!0,trigger:"anotherjoke"},{id:"anotherjoke",message:"Do you want me to make more jokes?",trigger:"anotherjokeoptions"},{id:"anotherjokeoptions",options:[{value:"jokestart",label:"Sure",trigger:"jokestart"},{value:"no",label:"Nah",trigger:"tellme"}]},{id:"ask_joke",message:"What\u2019s your joke?? \ud83e\udd29",trigger:"user_joke"},{id:"user_joke",user:!0,trigger:"message_classifier"},{id:"message_classifier",component:o.a.createElement(A,{history:L,url:z}),waitAction:!0,asMessage:!0},{id:"classifier_agree",message:"Do you agree with the score?",trigger:"classifier_eval_options"},{id:"classifier_eval_options",options:[{value:"\ud83d\ude24",label:"\ud83d\ude24",trigger:"classifier_feedback"},{value:"\ud83d\ude06",label:"\ud83d\ude06",trigger:"classifier_feedback"}]},{id:"classifier_feedback",component:o.a.createElement(w,{history:L,feedbackurl:N}),asMessage:!0,waitAction:!0,trigger:"want_another"},{id:"want_another",options:[{value:"nah",label:"nah",trigger:"tellme"},{value:"yea",label:"yea",trigger:"ask_joke"}]},{id:"continue new",message:"Please type another keyword and I will write a joke based on it",trigger:"user"},{id:"user-nojoke",user:!0,trigger:"feedback-nojoke"},{id:"feedback-nojoke",component:o.a.createElement(k,{history:L,model:e,feedbackurl:N}),asMessage:!0,waitAction:!0,trigger:"continue new"},{id:"feedback-badjoke",component:o.a.createElement(y,{history:L,model:e,feedbackurl:N}),asMessage:!0,waitAction:!0,trigger:"continue new"},{id:"feedback-form",message:"Please tell me a better joke (hit enter if you can't think of one).",trigger:"user-feedback"},{id:"user-feedback",user:!0,trigger:"feedback-badjoke"},{id:"thanks-message",delay:1500,message:"Thanks!",trigger:"thanks"},{id:"exit_game",component:o.a.createElement("div",null," It's time to say goodbye, hope to see you again. Before you leave, would you mind taking a survey for me? It will be very helpful for me to improve.  ",o.a.createElement("a",{href:"https://www.google.com/"},"Take the Survey")," "),asMessage:!0},{id:"exitlink",component:o.a.createElement("div",null," Link Doesn't work yet ",o.a.createElement("a",{href:"https://www.google.com/"},"Take the Survey:")," "),asMessage:!0}]}var F=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/blind/generate"},o.a.createElement("div",null,o.a.createElement(h.a,{width:"100%",botAvatar:"svgtopng/robot 3.png",userAvatar:"svgtopng/happy 2.png",enableMobileAutoFocus:"true",steps:M("/generate_pipeline"),headerComponent:o.a.createElement("div",{class:"header"},o.a.createElement("img",{src:"svgtopng/robot 1.png",align:"left"}),o.a.createElement("h1",{style:{fontSize:"36px",fontFamily:"Suez One"}},"Hi there!"),o.a.createElement("p",{style:{fontSize:"16px",fontFamily:"Open Sans",paddingLeft:"6%"}},"Hi!  I am Eddie. I am a chatbot.")),contentStyle:{height:"86vh"},style:{height:"100%"},botDelay:0,userDelay:50})))),o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/blind/retrieve"},o.a.createElement("div",null,o.a.createElement(h.a,{width:"100%",botAvatar:"svgtopng/robot 3.png",userAvatar:"svgtopng/happy 2.png",enableMobileAutoFocus:"true",steps:M("/retrieve"),headerComponent:o.a.createElement("div",{class:"header"},o.a.createElement("img",{src:"svgtopng/robot 1.png",align:"left"}),o.a.createElement("h1",{style:{fontSize:"36px",fontFamily:"Suez One"}},"Hi there!"),o.a.createElement("p",{style:{fontSize:"16px",fontFamily:"Open Sans",paddingLeft:"6%"}},"This is Eddie, I am a chatbot.")),contentStyle:{height:"86vh"},style:{height:"100%"},botDelay:0,userDelay:50})))),o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/generate"},o.a.createElement("div",null,o.a.createElement(h.a,{width:"100%",botAvatar:"svgtopng/robot 3.png",userAvatar:"svgtopng/happy 2.png",enableMobileAutoFocus:"true",steps:G("/generate_pipeline"),headerComponent:o.a.createElement("div",{class:"header"},o.a.createElement("img",{src:"svgtopng/robot 1.png",align:"left"}),o.a.createElement("h1",{style:{fontSize:"36px",fontFamily:"Suez One"}},"Hi there!"),o.a.createElement("p",{style:{fontSize:"16px",fontFamily:"Open Sans",paddingLeft:"6%"}},"Hi!  I am Eddie. I can make jokes.")),contentStyle:{height:"86vh"},style:{height:"100%"},botDelay:0,userDelay:50})))),o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/retrieve"},o.a.createElement("div",null,o.a.createElement(h.a,{width:"100%",botAvatar:"svgtopng/robot 3.png",userAvatar:"svgtopng/happy 2.png",enableMobileAutoFocus:"true",steps:G("/retrieve"),headerComponent:o.a.createElement("div",{class:"header"},o.a.createElement("img",{src:"svgtopng/robot 1.png",align:"left"}),o.a.createElement("h1",{style:{fontSize:"36px",fontFamily:"Suez One"}},"Hi there!"),o.a.createElement("p",{style:{fontSize:"16px",fontFamily:"Open Sans",paddingLeft:"6%"}},"This is Eddie. I can make jokes.")),contentStyle:{height:"86vh"},style:{height:"100%"},botDelay:0,userDelay:50})))),o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/evaluation_process",component:D})),o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(29);s.a.render(o.a.createElement(H.ThemeProvider,{theme:{background:"#f5f8fb",fontFamily:"Helvetica Neue",headerBgColor:"#136259",headerFontColor:"#fff",headerFontSize:"20px",botBubbleColor:"#ededed",botFontSize:"500px",botFontColor:"#4a4a4a",userBubbleColor:"#bbf2c8",userFontColor:"#4a4a4a"}},o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){e.exports=a(109)},67:function(e,t,a){},89:function(e,t){},91:function(e,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.2cf626b8.chunk.js.map