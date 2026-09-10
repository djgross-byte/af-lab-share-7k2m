(function () {
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page === "unlock.html") return;
  if (sessionStorage.getItem("aiFluencyAuth") !== "1") {
    location.replace("unlock.html");
  }
})();
