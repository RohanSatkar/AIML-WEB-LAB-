// ===============================
// 1️⃣ Neon Button Click Event
// ===============================

document.getElementById("clickBtn").addEventListener("click", function () {

    let message = document.getElementById("clickMessage");

    message.innerHTML = "⚡ Neon Mode Activated!";
    message.style.color = "#00f5ff";
    message.style.textShadow = "0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 40px #00f5ff";

    // Small animation effect
    message.style.transition = "0.3s ease-in-out";
});


// ===============================
// 2️⃣ Neon Hover Box Effects
// ===============================

let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {

    hoverBox.innerHTML = "🔥 System Online";
    hoverBox.style.backgroundColor = "#ff00ff";
    hoverBox.style.color = "black";
    hoverBox.style.boxShadow = "0 0 20px #ff00ff, 0 0 40px #ff00ff";
});

hoverBox.addEventListener("mouseout", function () {

    hoverBox.innerHTML = "Hover Over Me";
    hoverBox.style.backgroundColor = "transparent";
    hoverBox.style.color = "#ff00ff";
    hoverBox.style.boxShadow = "none";
});


// ===============================
// 3️⃣ Live Typing Neon Greeting
// ===============================

document.getElementById("nameInput").addEventListener("keyup", function () {

    let name = this.value.trim();
    let output = document.getElementById("nameOutput");

    if (name === "") {
        output.innerHTML = "";
    } else {
        output.innerHTML = "👋 Welcome, " + name + "!";
        output.style.color = "#00ffcc";
        output.style.textShadow = "0 0 10px #00ffcc, 0 0 20px #00ffcc";
    }
});


// ===============================
// 4️⃣ Neon Email Form Validation
// ===============================

document.getElementById("myForm").addEventListener("submit", function (event) {

    event.preventDefault(); // Stop page reload

    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("formMessage");

    if (email === "") {
        message.innerHTML = "⚠ Please enter your email!";
        message.style.color = "orange";
        message.style.textShadow = "0 0 10px orange";
    }
    else if (email.includes("@") && email.includes(".")) {

        message.innerHTML = "✅ Form Submitted Successfully!";
        message.style.color = "#00ff00";
        message.style.textShadow = "0 0 10px #00ff00, 0 0 20px #00ff00";

        // Clear input after success
        document.getElementById("email").value = "";
    }
    else {
        message.innerHTML = "❌ Invalid Email Format!";
        message.style.color = "red";
        message.style.textShadow = "0 0 10px red";
    }
});


// ===============================
// 5️⃣ Small Extra Glow Effect on Page Load
// ===============================

window.addEventListener("load", function () {

    document.querySelector("h1").style.textShadow =
        "0 0 15px #00f5ff, 0 0 30px #00f5ff";

});
