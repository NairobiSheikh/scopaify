/* Scopaify – main.js
   - Fills the package dropdowns, handles the buttons, validates and submits both forms.
   - GOOGLE_FORM_URL and the entry.* IDs below connect the forms to your Google Form.
   - If Google can't be reached, an email draft to hello@scopaify.com opens instead. */
(function () {
  var opts = [
    ["", "Choose your package"],
    ["Launch - $1,750", "Launch - $1,750"],
    ["Grow - $3,250 (Most Popular)", "Grow - $3,250 (Most Popular)"],
    ["Dominate - $5,500", "Dominate - $5,500"],
    ["Not sure yet - Help me choose", "Not sure yet - Help me choose"],
  ];
  var sels = document.querySelectorAll("select");
  sels.forEach(function (s) {
    opts.forEach(function (o) {
      var e = document.createElement("option");
      e.value = o[0];
      e.textContent = o[1];
      s.appendChild(e);
    });
  });
  document.querySelectorAll("[data-hero]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var f = document.getElementById("heroForm");
      f.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion:reduce)").matches
          ? "auto"
          : "smooth",
        block: "center",
      });
      setTimeout(function () {
        document.getElementById("n1").focus({ preventScroll: true });
      }, 400);
    });
  });
  document.querySelectorAll("[data-pkg]").forEach(function (a) {
    a.addEventListener("click", function () {
      sels.forEach(function (s) {
        s.value = a.dataset.pkg;
      });
    });
  });
  ["heroForm", "form2"].forEach(function (id) {
    var fm = document.getElementById(id);
    fm.noValidate = true;
    fm.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = e.target;
      if (!f.checkValidity()) {
        f.classList.add("tried");
        var bad = f.querySelector(":invalid");
        if (bad) bad.focus();
        return;
      }
      f.classList.remove("tried");
      var d = new FormData(f);
      var body =
        "Name: " +
        d.get("name") +
        "\nCompany: " +
        d.get("company") +
        "\nEmail: " +
        d.get("email") +
        "\nPhone: " +
        d.get("phone") +
        "\nPackage: " +
        d.get("package");
      var ok = f.querySelector(".ok"),
        btn = f.querySelector("button[type=submit]");
      btn.disabled = true;
      var mail = function () {
        location.href =
          "mailto:hello@scopaify.com?subject=" +
          encodeURIComponent(
            "Inquiry: " + d.get("company") + " (" + d.get("package") + ")",
          ) +
          "&body=" +
          encodeURIComponent(body);
        ok.textContent =
          "Your email draft is open. Please press send and we’ll text or call you within 24 hours.";
        ok.style.display = "block";
        btn.disabled = false;
      };
      var gd = new URLSearchParams();
      gd.append("entry.783677615", d.get("name"));
      gd.append("entry.1533936755", d.get("company"));
      gd.append("entry.1655224522", d.get("email"));
      gd.append("entry.162271363", d.get("phone"));
      gd.append("entry.24668684", d.get("package"));
      fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSc-1ba4xqii4LBGojKWiS3cZWChIaiGtlWWEvcaqJkV0jjeDw/formResponse",
        { method: "POST", mode: "no-cors", body: gd },
      )
        .then(function () {
          ok.textContent =
            "Thanks! Welcome to the Scopaify Growth System. We’ll text or call you within 24 hours.";
          ok.style.display = "block";
          f.reset();
          btn.disabled = false;
        })
        .catch(mail);
    });
  });
})();

/* Mobile menu: opens/closes the header navigation on small screens. */
(function () {
  var b = document.querySelector(".menu"),
    n = document.getElementById("nav");
  if (!b || !n) return;
  function set(o) {
    n.classList.toggle("open", o);
    b.setAttribute("aria-expanded", String(o));
    b.setAttribute("aria-label", o ? "Close menu" : "Open menu");
  }
  b.addEventListener("click", function () {
    set(!n.classList.contains("open"));
  });
  n.addEventListener("click", function (e) {
    if (e.target.closest("a")) set(false);
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest("header")) set(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") set(false);
  });
  matchMedia("(min-width:961px)").addEventListener("change", function () {
    set(false);
  });
})();
