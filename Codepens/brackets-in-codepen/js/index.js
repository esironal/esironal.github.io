document.addEventListener("DOMContentLoaded", function() {
		loadButtons();
		loadAnimations();
});

function loadButtons() {
		var a = document.querySelectorAll("nav a");
		for (var i = 0; i < a.length; i++) {
				a[i].addEventListener("click", function(e) {
						e.preventDefault();
						s(".active").removeAttribute("class", "active");

						if (e.target.getAttribute("href") == null) {
								var url = e.target.parentNode.getAttribute("href");
								e.target.parentNode.setAttribute("class", "active");
						} else {
								var url = e.target.getAttribute("href");
								e.target.setAttribute("class", "active");
						}

						var pageLoad = function() {
								var pages = document.querySelectorAll(".page");

								for (var x = 0; x < pages.length; x++) {
										pages[x].style.display = "none";
								}

								if (url == "") {
										s("#page-1").style.display = "block";
										s("#fileType").innerHTML = "HTML";
										s("#color").style.color = "#d28445";
										lineCount();
								} else if (url == "styles") {
										s("#page-2").style.display = "block";
										s("#fileType").innerHTML = "CSS";
										s("#color").style.color = "#6a9fb5";
										lineCount();
								} else if (url == "main") {
										s("#page-3").style.display = "block";
										s("#fileType").innerHTML = "JavaScript";
										s("#color").style.color = "#f4bf75";
										lineCount();
								} else if (url == "data") {
										s("#page-4").style.display = "block";
										s("#fileType").innerHTML = "JSON";
										s("#color").style.color = "#c3ba65";
										lineCount();
								}
						}
						pageLoad();
				});
		}
}

function loadAnimations() {
		setTimeout(function() {
				s("#c-gray").style.backgroundColor = "#34c849";
		}, 2000);

		var p = document.createElement("p");
		var hello = "Click here and start coding!";
		var count = 0;
		s("#page-1").appendChild(p);

		var w = setInterval(function() {
				if (count == hello.length) {
						clearInterval(w);
						return;
				}
				p.innerHTML = p.innerHTML + hello.charAt(count);
				count++;
		}, 90);
}

function lineCount() {
		var pages = document.querySelectorAll(".page");
		for (var i = 0; i < pages.length; i++) {
				var page = "#page-" + (i + 1);
				if (s(page).style.display == "block") {
						if (s(page).children.length <= 1) {
								s("footer span").innerHTML = s(page).children.length + " " + "Line";
						} else {
								s("footer span").innerHTML = s(page).children.length + " " + "Lines";
						}
				}
		}
}

//querySelector alternative: s();
function s(e) {
		return document.querySelector(e);
}