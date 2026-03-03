const content = document.getElementById("content");

function loadPage(page) {
  
  if (page === "login") {
        content.classList.remove("fade-in");
        content.classList.add("fade-out");

        setTimeout(() => {
            content.innerHTML = `
                <div class="login-box">
                    <h3>NCC Cadet Login</h3>
                    <input type="text" id="username" placeholder="Username">
                    <input type="password" id="password" placeholder="Password">
                    <button onclick="login()">Login</button>
                    <p id="error" class="error"></p>
                </div>
            `;
            content.classList.remove("fade-out");
            content.classList.add("fade-in");
        }, 200);

        return;
    }
    
    
if (page === "mission") {
    content.innerHTML = `
        <section>
            <h2>Welcome to AeroVerse</h2>
            <p>
                AeroVerse is your gateway to the fascinating world of aviation. 
                Understand <strong> how planes fly</strong>, explore amazing achievements, 
                and let your curiosity take flight.
            </p>

            <div class="landing-grid" >
                <!-- About AeroVerse -->
                <div class="landing-card">
                    <h3>About AeroVerse</h3>
                    <p>
                        A platform created to make aviation science visual, understandable, 
                        and inspiring for learners of all ages.
                    </p>
                </div>

                <!-- Inspiring Quotes -->
                <div class="landing-card">
                    <h3>Inspiring Quotes</h3>
                    <p>
                        "The engine is the heart of an airplane, but the pilot is its soul. " <br>  </p>
                        <p>
                        "Once you have tasted flight, you will forever walk the earth with your eyes turned skyward." 
                                              – Leonardo da Vinci
                    </p>
                </div>

<section class="landing-section">
  <h2>India’s Aviation & IAF Achievements 🇮🇳</h2>

  <div class="card-grid">

    <div class="card">
      <h3>LCA Tejas Induction</h3>
      <p>
        India successfully developed and inducted the indigenous Light Combat
        Aircraft Tejas into the Indian Air Force, marking a major step toward
        aerospace self-reliance.
      </p>
    </div>

    <div class="card">
      <h3>IAF Balakot Air Strike</h3>
      <p>
        Demonstrated the Indian Air Force’s long-range precision strike
        capability using advanced planning, navigation, and coordination.
      </p>
    </div>

    <div class="card">
      <h3>Gaganyaan Human Spaceflight</h3>
      <p>
        India is preparing to send astronauts to space, showcasing growing
        expertise in crew safety, launch systems, and orbital operations.
      </p>
    </div>

    <div class="card">
      <h3>Operation Sindoor (Humanitarian Air Ops)</h3>
      <p>
        The Indian Air Force has repeatedly executed rapid humanitarian airlift
        and disaster-relief missions, proving its capability beyond combat into
        life-saving operations.
      </p>
    </div>

  </div>
</section>

                <!-- Curious Questions -->

<div class="card question-card" onclick="toggleAnswer(this)">
      <h3>❓ How do fighter jets perform impossible aerial maneuvers?</h3>
      <p class="answer">Fighter jets use thrust-to-weight ratios, advanced aerodynamics, and pilot skill to perform extreme maneuvers safely.</p>
  </div>

  <div class="card question-card" onclick="toggleAnswer(this)">
      <h3>❓ Why do airplanes have different wing shapes?</h3>
      <p class="answer">Wing shapes are optimized for speed, lift, and fuel efficiency. Swept wings for speed, straight wings for lift and stability.</p>
  </div>

  <div class="card question-card" onclick="toggleAnswer(this)">
      <h3>❓ How does weather impact flight planning and safety?</h3>
      <p class="answer">Pilots adjust altitude, route, and speed to account for wind, turbulence, storms, and visibility to ensure safe travel.</p>
  </div>

  <div class="card question-card" onclick="toggleAnswer(this)">
      <h3>❓ Can drones change the future of aviation?</h3>
      <p class="answer">Yes. Drones are revolutionizing cargo delivery, surveillance, and training, influencing both commercial and defense aviation.</p>
  </div>

        </section>
    `;
}

if (page === "aero") {
    content.innerHTML = `
        <section>
            <h2>✈️ Aerodynamics</h2>
            <p>Select a module to begin learning.</p>

            <div class="card-grid">
                <div class="card" onclick="loadModule('module1')">
                    <h3>🔹 Module 1</h3>
                    <p>Fundamentals of Flight</p>
                </div>

                <div class="card" onclick="loadModule('module2')">
                    <h3>🔹 Module 2</h3>
                    <p>Airfoil & Wing Geometry</p>
                </div>

                <div class="card" onclick="loadModule('module3')">
                    <h3>🔹 Module 3</h3>
                    <p>Principles of Lift Generation</p>
                </div>

                <div class="card" onclick="loadModule('module4')">
                    <h3>🔹 Module 4</h3>
                    <p>Stall and Critical Angle</p>
                </div>
            </div>
        </section>
    `;
}
if (page === "aircraft") {
    content.innerHTML = `
        <section>
            <h2>🛩️ Aircraft Parts and Control Surfaces</h2>
            <p>Select a module to begin learning.</p>

            <div class="card-grid">

                <div class="card" onclick="loadAircraftModule('aircraft1')">
                    <h3>🔹 Module 1</h3>
                    <p>Major Parts of an Aircraft</p>
                </div>

                <div class="card" onclick="loadAircraftModule('aircraft2')">
                    <h3>🔹 Module 2</h3>
                    <p>Primary Control Surfaces</p>
                </div>

                <div class="card" onclick="loadAircraftModule('aircraft3')">
                    <h3>🔹 Module 3</h3>
                    <p>Secondary Control Surfaces</p>
                </div>

            </div>
        </section>
    `;
}
    

    // ✈️ Flight Instruments Page
if (page === "flight") {
    content.innerHTML = `
        <section>
            <h2>✈️ Basic Flight Instruments & Navigation</h2>
            <p>Select a module to begin learning.</p>

            <div class="card-grid">

                <div class="card" onclick="loadFlightModule('sixpack')">
                    <h3>🔹 Module 1</h3>
                    <p>Basic Flight Instruments (Six Pack)</p>
                </div>

                <div class="card" onclick="loadFlightModule('compass')">
                    <h3>🔹 Module 2</h3>
                    <p>Magnetic Compass</p>
                </div>

                <div class="card" onclick="loadFlightModule('navigation')">
                    <h3>🔹 Module 3</h3>
                    <p>Basic Navigation Methods</p>
                </div>

            </div>
        </section>
    `;
}

    if (page === "resources") {
    content.innerHTML = `
        <section>
            <h2> Phases of Flight Circuit </h2>
            <p>Select a module to explore.</p>

            <div class="card-grid">

                <div class="card" onclick="loadResourceModule('flightphases')">
                    <h3>🔹 Module</h3>
                    <p>Phases of Flight & Aircraft Performance</p>
                </div>

            </div>
        </section>
    `;
}
}

loadPage("mission");

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function navigate(page) {
    const menu = document.getElementById("menu");
    menu.style.display = "none";

    content.classList.add("fade-out");
    
    setTimeout(initScrollReveal, 100);
    
    setTimeout(() => {
        loadPage(page);
        content.classList.remove("fade-out");
        content.classList.add("fade-in");

        setTimeout(() => {
            content.classList.remove("fade-in");
        }, 400);

    }, 300);
}

function toggleForce(button) {
    const content = button.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
function toggleAnswer(card) {
    const answer = card.querySelector(".answer");
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
}
function toggleForce(button) {
    const allContents = document.querySelectorAll(".force-content");

    allContents.forEach(item => {
        if (item !== button.nextElementSibling) {
            item.style.maxHeight = null;
        }
    });

    const content = button.nextElementSibling;

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
function toggleAnswer(card) {
    const answer = card.querySelector(".answer");
    if (answer.classList.contains("show")) {
        answer.classList.remove("show");
    } else {
        answer.classList.add("show");
    }
}
function loadModule(module) {

    if (module === "module1") {
        content.innerHTML = `
            <section>
                <button class="menu-btn" onclick="navigate('aero')">← Back to Modules</button>

                <h2>🔹 Module 1: Fundamentals of Flight</h2>

                <div class="sub-section">
                    <h3>✈️ Introduction to Aerodynamics</h3>
                    <p>
                        Aerodynamics is the study of how air interacts with moving objects,
                        especially aircraft. It explains lift, drag, thrust, and flight stability.
                    </p>
                </div>

                <div class="sub-section">
                    <h3>🌍 Importance of Aerodynamics in Aviation</h3>
                    <ul>
                        <li>Helps aircraft generate lift and remain airborne.</li>
                        <li>Reduces fuel consumption by minimizing drag.</li>
                        <li>Improves aircraft stability and control.</li>
                        <li>Ensures safe takeoff and landing.</li>
                    </ul>
                </div>

                <h3>✈️ Forces Acting on Aircraft</h3>

                <button class="force-btn" onclick="toggleForce(this)">Lift</button>
                <div class="force-content">
                    <p><strong>Lift:</strong> Upward force generated by wings.</p>
                </div>

                <button class="force-btn" onclick="toggleForce(this)">Weight</button>
                <div class="force-content">
                    <p><strong>Weight:</strong> Gravity pulling aircraft downward.</p>
                </div>

                <button class="force-btn" onclick="toggleForce(this)">Thrust</button>
                <div class="force-content">
                    <p><strong>Thrust:</strong> Forward force from engines.</p>
                </div>

                <button class="force-btn" onclick="toggleForce(this)">Drag</button>
                <div class="force-content">
                    <p><strong>Drag:</strong> Air resistance opposing motion.</p>
                </div>

                <div class="sub-section">
                    <h3>⚖️ Newton’s Laws of Motion</h3>
                    <p><strong>First Law:</strong> Law of inertia.</p>
                    <p><strong>Second Law:</strong> F = ma.</p>
                    <p><strong>Third Law:</strong> Action–reaction.</p>
                </div>

                <div class="sub-section">
                    <h3>🌪️ Types of Drag</h3>
                    <ul>
                        <li><strong>Parasite Drag</strong></li>
                        <li><strong>Induced Drag</strong></li>
                        <li><strong>Profile Drag</strong></li>
                    </ul>
                </div>
            </section>
        `;
    }

    if (module === "module2" ) {
        content.innerHTML = `
        <section>
            <button class="menu-btn" onclick="navigate('aero')">← Back to Modules</button>

            <h2>🔹 Module 2: Airfoil and Wing Geometry</h2>

            <div class="sub-section">
                <h3>Airfoil Terminology</h3>
                <ul>
                    <li><strong>Chord Line:</strong> Straight line joining leading and trailing edge.</li>
                    <li><strong>Camber:</strong> Curvature of the airfoil surface.</li>
                    <li><strong>Leading Edge:</strong> Front part of the wing that meets air first.</li>
                    <li><strong>Trailing Edge:</strong> Rear part where airflow leaves the wing.</li>
                    <li><strong>Thickness Ratio:</strong> Ratio of maximum thickness to chord length.</li>
                </ul>
            </div>

            <div class="sub-section">
                <h3>Angle Definitions</h3>
                <ul>
                    <li><strong>Angle of Attack:</strong> Angle between chord line and relative wind.</li>
                    <li><strong>Angle of Incidence:</strong> Fixed angle between wing chord and fuselage.</li>
                    <li><strong>Relative Wind:</strong> Direction of airflow opposite to flight path.</li>
                    <li><strong>Flight Path Angle:</strong> Angle between flight path and horizontal.</li>
                </ul>
            </div>

            <div class="sub-section">
                <h3>Relationship Between AoA and Lift</h3>
                <p>
                    As angle of attack increases, lift increases up to the critical angle.
                    Beyond this point, airflow separates and lift drops sharply.
                </p>
            </div>
        </section>
    `;
}

    if (module === "module3") {
       content.innerHTML = `
        <section>
            <button class="menu-btn" onclick="navigate('aero')">← Back to Modules</button>

            <h2>🔹 Module 3: Principles of Lift Generation</h2>

            <div class="sub-section">
                <h3>Bernoulli’s Principle</h3>
                <p>
                    Faster airflow over the wing creates lower pressure,
                    contributing to lift generation.
                </p>
            </div>

            <div class="sub-section">
                <h3>Pressure–Velocity Relationship</h3>
                <p>
                    As velocity of airflow increases, static pressure decreases.
                    This pressure difference helps produce lift.
                </p>
            </div>

            <div class="sub-section">
                <h3>Newton’s Third Law in Lift</h3>
                <p>
                    Wings deflect air downward. In reaction, the aircraft experiences
                    an upward force (lift).
                </p>
            </div>

            <div class="sub-section">
                <h3>Downwash and Momentum Change</h3>
                <p>
                    The wing accelerates air downward, creating downwash and
                    changing momentum of airflow.
                </p>
            </div>

            <div class="sub-section">
                <h3>Circulation Theory (Intro)</h3>
                <p>
                    Lift is also explained by circulation of airflow around the wing,
                    creating pressure differences between upper and lower surfaces.
                </p>
            </div>

            <div class="sub-section">
                <h3>Common Misconceptions About Lift</h3>
                <ul>
                    <li>Lift is NOT only because air travels longer over the top.</li>
                    <li>Aircraft can fly inverted with proper angle of attack.</li>
                    <li>Both Bernoulli and Newton explanations work together.</li>
                </ul>
            </div>
        </section>
    `;
}
if (module === "module4") {
    content.innerHTML = `
        <section>
            <button class="menu-btn" onclick="navigate('aero')">← Back to Modules</button>

            <h2>🔹 Module 4: Stall and Critical Angle</h2>

            <div class="sub-section">
                <h3>Definition of Stall</h3>
                <p>
                    A stall occurs when the wing exceeds the critical angle of attack,
                    causing airflow separation and sudden loss of lift.
                </p>
            </div>

            <div class="sub-section">
                <h3>Flow Separation</h3>
                <p>
                    At high angle of attack, smooth airflow breaks away from the wing surface,
                    drastically reducing lift.
                </p>
            </div>

            <div class="sub-section">
                <h3>Critical Angle of Attack</h3>
                <p>
                    The maximum angle at which the wing can maintain attached airflow.
                    Beyond this, stall occurs regardless of speed.
                </p>
            </div>

            <div class="sub-section">
                <h3>Types of Stall</h3>
                <ul>
                    <li><strong>Power-off Stall</strong></li>
                    <li><strong>Power-on Stall</strong></li>
                    <li><strong>Accelerated Stall</strong></li>
                    <li><strong>Tip Stall</strong></li>
                </ul>
            </div>

            <div class="sub-section">
                <h3>Basic Stall Recovery Principles</h3>
                <ul>
                    <li>Reduce angle of attack immediately.</li>
                    <li>Apply smooth power.</li>
                    <li>Level the wings.</li>
                    <li>Recover to safe climb.</li>
                </ul>
            </div>
        </section>
    `;
}
}
function loadAircraftModule(module) {

    if (module === "aircraft1") {
        content.innerHTML = `
            <section>
              <button class="menu-btn" onclick="navigate('aircraft')">← Back to Modules</button>
                <h2>🧭 Module 1: Major Parts of an Aircraft</h2>

                <div class="card-grid">

                    <div class="card">
                        <h3>Fuselage</h3>
                        <p>The central body of the aircraft.</p>
                    </div>

                    <div class="card">
                        <h3>Wings</h3>
                        <p>Primary lifting surfaces that generate lift.</p>
                    </div>

                    <div class="card">
                        <h3>Empennage</h3>
                        <p>Tail section providing stability and control.</p>
                    </div>

                    <div class="card">
                        <h3>Landing Gear</h3>
                        <p>Used for takeoff, landing, and taxi.</p>
                    </div>

                    <div class="card">
                        <h3>Powerplant</h3>
                        <p>Engine system producing thrust.</p>
                    </div>

                </div>
            </section>
        `;
    }

    if (module === "aircraft2") {
        content.innerHTML = `
            <section>
             <button class="menu-btn" onclick="navigate('aircraft')">← Back to Modules</button>
                <h2>🎮 Module 2: Primary Control Surfaces</h2>

                <div class="card-grid">

                    <div class="card">
                        <h3>Ailerons</h3>
                        <p>Control roll about the longitudinal axis.</p>
                    </div>

                    <div class="card">
                        <h3>Elevator</h3>
                        <p>Controls pitch (nose up and down).</p>
                    </div>

                    <div class="card">
                        <h3>Rudder</h3>
                        <p>Controls yaw (nose left and right).</p>
                    </div>

                </div>
            </section>
        `;
    }

    if (module === "aircraft3") {
        content.innerHTML = `
            <section>
            <button class="menu-btn" onclick="navigate('aircraft')">← Back to Modules</button>
                <h2>🛬 Module 3: Secondary Control Surfaces</h2>

                <div class="card-grid">

                    <div class="card">
                        <h3>Flaps</h3>
                        <p>Increase lift and drag during takeoff and landing.</p>
                    </div>

                    <div class="card">
                        <h3>Slats</h3>
                        <p>Delay stall and improve low-speed lift.</p>
                    </div>

                    <div class="card">
                        <h3>Spoilers</h3>
                        <p>Reduce lift and increase drag.</p>
                    </div>

                </div>
            </section>
        `;
    }
}
function loadFlightModule(module) {
    const content = document.getElementById("content");

    // 🔹 Module 1 — Six Pack
    if (module === "sixpack") {
        content.innerHTML = `
            <section>
                <button class="back-btn" onclick="loadPage('flight')">
                    ⬅ Back to Modules
                </button>
                <h2>🧩 Basic Flight  Instruments</h2>
                  <div class="card-grid">

                    
                <ul> 
                    <div class="card">
                    <li><b>Airspeed Indicator:</b> Shows aircraft speed through air.</li>
                      </div>
                     <div class="card">
                    <li><b>Altimeter:</b> Shows altitude above mean sea level.</li></div>
                     <div class="card">
                    <li><b>Attitude Indicator:</b> Shows pitch and bank.</li></div>
                     <div class="card">
                    <li><b>Turn Coordinator:</b> Shows rate of turn.</li></div>
                     <div class="card">
                    <li><b>Heading Indicator:</b> Shows aircraft direction.</li></div>
                     <div class="card">
                    <li><b>Vertical Speed Indicator:</b> Shows climb or descent rate.</li></div>
                </ul>
            </section>
        `;
    }

    // 🔹 Module 2 — Compass
    if (module === "compass") {
        content.innerHTML = `
            <section>
             <button class="back-btn" onclick="loadPage('flight')">
                    ⬅ Back to Modules
                </button>
                
                <h2>🧭 Magnetic Compass</h2>

                <p>The magnetic compass shows the aircraft's magnetic heading. It is simple,
                reliable, and works without electricity but has errors like variation,
                deviation, and dip error.</p>

               
            </section>
        `;
    }

    // 🔹 Module 3 — Navigation
    if (module === "navigation") {
        content.innerHTML = `
            <section>
             <button class="menu-btn" onclick="navigate('flight')">← Back to Modules</button>
             
                <h2>🗺️ Basic Navigation Methods</h2>

                <ul>
                    <li><b>Pilotage:</b> Navigation using ground landmarks.</li>
                    <li><b>Dead Reckoning:</b> Uses heading, speed, and time.</li>
                    <li><b>Radio Navigation:</b> Uses VOR and ADF signals.</li>
                    <li><b>GPS Navigation:</b> Uses satellite positioning.</li>
                </ul>

                
            </section>
        `;
    }
}
function loadResourceModule(module) {
    const content = document.getElementById("content");

    // 🔙 Back button
    const backBtn = `
        <button class="back-btn" onclick="loadPage('resources')">
            ⬅ Back to Modules
        </button>
    `;

    if (module === "flightphases") {
        content.innerHTML = `
            ${backBtn}

            <section>

              
                <h2>✈️ Phases of Flight and Aircraft Performance</h2>

                <div class="module-card">
                    <h3>🧭 Module Overview</h3>
                    <p>
                        This module explains the different phases of an aircraft’s flight
                        from takeoff to landing and introduces key performance parameters.
                    </p>
                </div>

                <h3>🔹 Phases of Flight</h3>

                <div class="card-grid">

                    <div class="card">
                        <h3>Taxi</h3>
                        <p>Aircraft movement on ground under its own power.</p>
                        <ul>
                            <li>Before takeoff and after landing</li>
                            <li>Uses nose wheel steering and rudder</li>
                            <li>Requires low speed control</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3>Takeoff</h3>
                        <ul>
                            <li>Takeoff roll</li>
                            <li>Rotation</li>
                            <li>Liftoff</li>
                            <li>Initial climb</li>
                        </ul>
                        <p><em>Most performance calculations obsess over this phase.</em></p>
                    </div>

                    <div class="card">
                        <h3>Climb</h3>
                        <ul>
                            <li>Rate of climb</li>
                            <li>Climb angle</li>
                            <li>Engine power</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3>Cruise</h3>
                        <p>Level flight at constant altitude and speed.</p>
                        <ul>
                            <li>Maximum fuel efficiency</li>
                            <li>Longest duration</li>
                            <li>Stable condition</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3>Descent</h3>
                        <ul>
                            <li>Controlled altitude reduction</li>
                            <li>Speed management</li>
                            <li>Passenger comfort</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3>Landing</h3>
                        <ul>
                            <li>Approach</li>
                            <li>Flare</li>
                            <li>Touchdown</li>
                            <li>Rollout</li>
                        </ul>
                    </div>

                </div>

                <h3>🔹 Basic Aircraft Performance Parameters</h3>

                <div class="card-grid">

                    <div class="card"><h3>Range</h3><p>Maximum distance aircraft can fly.</p></div>
                    <div class="card"><h3>Endurance</h3><p>Maximum time airborne.</p></div>
                    <div class="card"><h3>Service Ceiling</h3><p>Maximum usable altitude.</p></div>
                    <div class="card"><h3>Rate of Climb</h3><p>Vertical climb speed.</p></div>
                    <div class="card"><h3>Wing Loading</h3><p>Weight per unit wing area.</p></div>
                    <div class="card"><h3>Power Loading</h3><p>Weight per unit power.</p></div>

                </div>

            </section>
        `;
    }
}
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}
// =====================================
// ✨ SCROLL REVEAL OBSERVER
// =====================================

function initReveal() {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    reveals.forEach(el => observer.observe(el));
}
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
}
const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    // Simple hard-coded authentication for demo
    if (username === "cadet" && password === "1234") {
        // Redirect to cadet.html
        window.location.href = "cadet.html";
    } else {
        error.textContent = "Invalid username or password!";
    }
}