// Create closeID variable 
let coverup = document.getElementById("projectref");
let coverup2 = document.getElementById("projectref2");
let coverup3 = document.getElementById("projectref3");
let coverup4 = document.getElementById("projectref4");


// Add onclick event listener to closeID 
coverup.addEventListener("click", function( event ) {
    projectButton(1);
}, false);

// Add onclick event listener to closeID 
coverup.addEventListener("mouseover", function( event ) {
    document.getElementById("project1").style.animation = "down 0.5s both";
    document.getElementById("blackproject").style.animation = "up 1s both";
}, false);
coverup.addEventListener("mouseleave", function( event ) {
    document.getElementById("blackproject").style.animation = "down 0.5s both";
    document.getElementById("project1").style.animation = "up 1s both";
}, false);


// Add onclick event listener to closeID 
coverup2.addEventListener("click", function( event ) {
    projectButton(2);
}, false);

// Add onclick event listener to closeID 
coverup2.addEventListener("mouseover", function( event ) {
    document.getElementById("project2").style.animation = "down 0.5s both";
    document.getElementById("blackproject2").style.animation = "up 1s both";
}, false);
coverup2.addEventListener("mouseleave", function( event ) {
    document.getElementById("blackproject2").style.animation = "down 0.5s both";
    document.getElementById("project2").style.animation = "up 1s both";
}, false);


// Add onclick event listener to closeID 
coverup3.addEventListener("click", function( event ) {
    projectButton(3);
}, false);

// Add onclick event listener to closeID 
coverup3.addEventListener("mouseover", function( event ) {
    document.getElementById("project3").style.animation = "down 0.5s both";
    document.getElementById("blackproject3").style.animation = "up 1s both";
}, false);
coverup3.addEventListener("mouseleave", function( event ) {
    document.getElementById("blackproject3").style.animation = "down 0.5s both";
    document.getElementById("project3").style.animation = "up 1s both";
}, false);


// Add onclick event listener to closeID 
coverup4.addEventListener("click", function( event ) {
    projectButton(4);
}, false);

// Add onclick event listener to closeID 
coverup4.addEventListener("mouseover", function( event ) {
    document.getElementById("project4").style.animation = "down 0.5s both";
    document.getElementById("blackproject4").style.animation = "up 1s both";
}, false);
coverup4.addEventListener("mouseleave", function( event ) {
    document.getElementById("blackproject4").style.animation = "down 0.5s both";
    document.getElementById("project4").style.animation = "up 1s both";
}, false);







function projectButton(option) {
    document.getElementById("content2").style.animation = "big 1s both";
    if (option == 1)
      document.getElementById("content2").innerHTML = "<div class='container-fluid holderproject' id='project-page'>                <div class='container'>            <div class='section-title' >                <h2>Project 4</h2>                <p>Holder Profile Generator</p>            </div>            <div class='row' style='margin-top: 50px;'>                <div class='col-lg-6 videoDiv'>                    <img class='myVideo2' src='/Images/nxholder.png'>                </div>                    <div class='col-lg-6'>                    <div class='row project'>                        <h2>Project Description</h2>                    </div>                    <div class='row project-description' id='project-description'>                        <p>NX has a built in database for holder profiles. A UI was created which asks the user to select a holder and the front face of the holder. The program collects all the edges starting from the front face of the holder and calculates the length of each section, diameter, and taper. All of these calculations along with a library reference, sequence number for each section, and other required data are put into a specific format to form the holder profile. These custom profiles can be stored in the database so they can be imported to an active session whenever. The UI has a built in feature which allows the user to move the holder to the absolute coordinate system and align it with the X axis.</p>                    </div>                    <div class='row projectT'>                        <p class='techbox'>Visual Basic</p>                        <p class='techbox'>NX Open Framework</p>                        <p class='techbox'>NX Block Styler</p>                        <p class='techbox'>NX12 Open VB Wizard</p>                        <p class='techbox'>Microsoft Visual Studio</p>                    </div>                </div>            </div>        </div><div id='close' class='close'><i class='fas fa-lg fa-angle-down center-icon'></i></div>    </div>"
    else if (option == 2)
      document.getElementById("content2").innerHTML = "<div class='container-fluid warboardpage' id='project-page'>                <div class='container'>            <div class='section-title' >                <h2>Project 1</h2>                <p>TEI Warboard Report</p>            </div>            <div class='row'>                <div class=''>                    <img class='myVideo' src='/Images/Warboard Report Two.png'>                </div>            </div>            <div class='row informationRow'>                <div class='col-lg-6 '>                    <div class='row project'>                        <h2>Project Description</h2>                    </div>                    <div class='row project-description' id='project-description' >                        <p>TEI warboard is a feature that was built on to TEI's data warehouse. This new component allows project managers to log all information pertaining to a job including part, shipping, and customer information. After logging all required information, the project manager can navigate to the warboard menu where all jobs specific to the warboard will be listed. Once they select a job in the list, all necessary data will be pulled from the database and a report will be generated with all that data.</p>                    </div>                    <div class='row projectT'>                        <p class='techbox'>Visual Basic</p>                        <p class='techbox'>Javascript</p>                        <p class='techbox'>HTML5/CSS3</p>                        <p class='techbox'>Bootstrap</p>                        <p class='techbox'>.NET Framework</p>                        <p class='techbox'>Microsoft SQL Server</p>                        <p class='techbox'>Microsoft Visual Studio</p>                    </div>                </div>                <div class='col-lg-6'>                    <div class='row project'>                        <h2 class='listh2'>Project Objectives</h2>                    </div>                    <div class='row project-description'>                        <ul>                            <li>Gather all information about jobs/parts that are displayed on the warboard</li>                            <li>Design relational database in Visio</li>                            <li>Make a workflow diagram for functions and data</li>                            <li>Design a wireframe for the warboard component in the TEI data warehouse</li>                            <li>Add new database elements to the existing database in Microsft SQL Server Management Studio</li>                            <li>Start coding and implement previous objectives</li>                            <li>Publish and depoly the data warehouse on IIS </li>                          </ul>                      </div>                </div>            </div>        </div>        <div id='close' class='close'><i class='fas fa-lg fa-angle-down center-icon'></i></div>    </div>"
    else if (option == 3)
      document.getElementById("content2").innerHTML = "<div class='container-fluid holderproject' id='project-page'>                <div class='container'>            <div class='section-title' >                <h2>Project 2</h2>                <p>One Stop Book Shop</p>            </div>                        <div class='row' style='margin-top: 50px;'>                <div class='col-lg-6 videoDiv'>                    <img class='myVideo2' src='/Images/bookshopweb.png'>                    <div class='bookShopButtons'>                        <button type='button' class='btn btn-dark btn-md buttons liveDemobtn' >                          <a  href='https://onestopbookshop.herokuapp.com/' target='_blank' class='homeButtons' style='color: white;'>Live Demo</a>                        </button>                                                <button type='button' class='btn btn-dark btn-md buttons viewCodebtn'>                          <a href='https://github.com/ryanr1507/Book-Shop' target='_blank' class='homeButtons' style='color: white;'>View Code</i></a>                        </button>                        </div>                </div>                    <div class='col-lg-6'>                    <div class='row project'>                        <h2>Project Description</h2>                    </div>                    <div class='row project-description' id='project-description'>                        <p>This is a Node.js/Express application that utilizes Stripe, a payment system  that allows valid credit card transactions. The main functionality of this project is to create a customer and charge their card. All transactions are done in test mode so the program won't accept real credit card payments until it's activated. For now, only a default card given by Stripe will work.     </p>                    </div>                    <div class='row projectT'>                        <p class='techbox'>Javascript</p>                        <p class='techbox'>Node.js</p>                        <p class='techbox'>Express</p>                        <p class='techbox'>Express-handlebars</p>                        <p class='techbox'>Stripe</p>                        <p class='techbox'>HTML5/CSS3</p>                        <p class='techbox'>Bootstrap</p>                        <p class='techbox'>Visual Studio Code</p>                    </div>                    <br>                    <div class='row project'>                        <h2>Want to try it out?</h2>                    </div>                    <div class='row project-description'>                        <ul>                            <li>Click 'PURCHASE NOW!' </li>                            <li>Type any random, syntactically valid email address</li>                            <li>Use Strips's test card: 4242 4242 4242 4242</li>                            <li>Use a random 3 digit CVC code/li>                            <li>Type in a random expiration date</li>                            <li>Click 'Pay $25.00'</li>                            <li>And success! You've bought a copy of the only book you'll ever need</li>                          </ul>                      </div>                </div>            </div>        </div><div id='close' class='close'><i class='fas fa-lg fa-angle-down center-icon'></i></div>    </div>"
    else if (option == 4)
      document.getElementById("content2").innerHTML = "<div class='container-fluid' id='project-page'>                <div class='container'>            <div class='section-title' >                <h2>Project 3</h2>                <p>Inspection Report Parser</p>            </div>            <div class='row' style='margin-top: 50px;'>                <div class='col-lg-6 videoDiv'>                    <img class='myVideo2 rtfpicture' src='/Images/RTF_Parser.png'>                </div>                    <div class='col-lg-6'>                    <div class='row project'>                        <h2>Project Description</h2>                    </div>                    <div class='row project-description' id='project-description'>                        <p>Inspection reports are generated by a CMM (coordiniate measuring machine) in an RTF format. A coordinate measuring machine is used to measure the dimensions and characteristics of an object. In this program the user can import an inspection report that holds all of this data and organize it in an excel spreadsheet. This RTF file holds different types of features including surface profiles, arcs, planes, lines, and circles. Values such as actual values, nominal values, low tolerance, high tolerance, deviation, and error are recroded for these features. </p>                    </div>                    <div class='row projectT'>                        <p class='techbox'>Visual Basic</p>                        <p class='techbox'>Visual Basic for Applications</p>                        <p class='techbox'>VBA Userform</p>                        <p class='techbox'>Microsoft Excel</p>                    </div>                    <br>                    <div class='row project'>                        <h2>Why is this important?</h2>                    </div>                    <div class='row project-description' id='project-description'>                        <p>This program is important because it allows the user to have an organized spreadsheet of all the data that’s presented in the inspection report. They can change, edit, or delete any data they want. The formulas and rules that are embedded in the spreadsheet by the program will perform automatic calculations and conversations. In conclusion, this will save the engineers many hours of tedious work. Without this program they have to perform every calculation and manually change every value. </p>                    </div>                </div>            </div>        </div><div id='close' class='close'><i class='fas fa-lg fa-angle-down center-icon'></i></div>    </div>"
      
    document.getElementById('body').classList.add("yoverflow");
      // Create closeID variable 
    let closeID = document.getElementById("close");

    // Add onclick event listener to closeID 
    closeID.addEventListener("click", function( event ) {
      document.getElementById('body').classList.remove("yoverflow");
      document.getElementById("project-page").style.animation = "down 0.5s both";
      document.getElementById("content2").style.animation = "small 1s both 0.5s";
    }, false); 
  };