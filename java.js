    function goToGallery() {
      document.querySelector("#gallery").scrollIntoView({ behavior: "smooth" });
    }

    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".gallery-item img").forEach(img => {
      img.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      });
    });

    closeBtn.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };