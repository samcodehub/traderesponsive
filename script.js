// whatsapp function
function openWhatsApp() {
  var phoneNumber = "	+16463894284";
  var message = "Hello, I'm interested in your trading strategy.";

  var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(phoneNumber) + "&text=" + encodeURIComponent(message);

  window.open(url);
}
// whatsapp function ends here








var acc = document.getElementsByClassName("accordion");
var i;
var currentAccordion = null;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (currentAccordion && currentAccordion !== this) {
      currentAccordion.classList.remove("active");
      var currentPanel = currentAccordion.nextElementSibling;
      currentPanel.style.maxHeight = null;
    }
    
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    if (this.classList.contains("active")) {
      currentAccordion = this;
    } else {
      currentAccordion = null;
    }
  });
}







//##################################################################################
// Initialize Firebase for subscription


const firebaseConfig = {
  apiKey: "AIzaSyB40bg30bGvX6opFDy89uGvjEXw9Iq0kgU",
  authDomain: "tradeflow-f7edb.firebaseapp.com",
  databaseURL: "https://tradeflow-f7edb-default-rtdb.firebaseio.com",
  projectId: "tradeflow-f7edb",
  storageBucket: "tradeflow-f7edb.appspot.com",
  messagingSenderId: "643277041164",
  appId: "1:643277041164:web:c5000695a65d93fe938829"
};

const firebaseApp = firebase.initializeApp(firebaseConfig, "footer");
const subscriptionRef = firebaseApp.database().ref("subscription");

document.getElementById("form-subscribe").addEventListener("submit", submitSubscriptionForm);

function submitSubscriptionForm(e) {
  e.preventDefault();

  const emailid = getInputVal("emailid");

  if (!validateEmail(emailid)) {
      alert("Please enter a valid email address.");
      return;
  }

  saveSubscription(emailid);

  // reset the form
  document.getElementById("form-subscribe").reset();
}

const saveSubscription = (emailid) => {
  const newSubscriptionRef = subscriptionRef.push();

  newSubscriptionRef.set({
      emailid: emailid,
  }).then(() => {
      // enable alert
      document.querySelector(".alert").style.display = "block";

      // remove the alert
      setTimeout(() => {
          document.querySelector(".alert").style.display = "none";
      }, 5000);
  });
};

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Function to validate email
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(String(email).toLowerCase());
}
//##################################################################################











