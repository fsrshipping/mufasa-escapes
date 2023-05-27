(function() {
	const buttons = document.querySelectorAll(".store__btn");
	const items = document.querySelectorAll(".item");
	const searchBox = document.getElementById("searchbar");
	
	buttons.forEach(function(button) {
		button.addEventListener("click", function(e) {
			const filter = e.target.dataset.filter;
		
			items.forEach(function(item) {
				if (filter === "all") {
					item.style.display = "block";
				} else {
					if (item.classList.contains(filter)) {
						item.style.display = "block";
					} else {
						item.style.display = "none";
					}
				}
			})
		})
	})
})();

(function() {
	const searchBar = document.getElementById("searchbar");
	const storeItems = document.querySelectorAll(".item");
	
	searchBar.addEventListener("keyup", function(e) {
		const term = e.target.value.toLowerCase();
		storeItems.forEach(function(item) {
			const cat = item.dataset.item;
			if (cat.indexOf(term) != -1) {
				item.style.display = "block";
			} else {
				item.style.display = "none";
			}
		})
	})
})();

const exploreButton = document.getElementById("explore");
const modal = document.getElementById("modal");
const closemodal = document.getElementById("closemodal")

exploreButton.addEventListener("click", openModal);

function openModal() {
    modal.classList.add("modal-open");
}

closemodal.addEventListener("click", closeModal);

function closeModal() {
    modal.classList.remove("modal-open");
}
