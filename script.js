function modal(el) {
    document.getElementById("modal-img").src = el.src;
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-caption").innerHTML = el.alt;
		document.getElementById("modal-title").innerHTML = el.title;
  }
  
