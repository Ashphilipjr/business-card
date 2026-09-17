const pageUrl = window.location.href;

const qr = document.getElementById("qr");

qr.src =
  "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=0&data=" +
  encodeURIComponent(pageUrl);


const shareBtn = document.getElementById("shareBtn");
const shareStatus = document.getElementById("shareStatus");


shareBtn.addEventListener("click", async () => {

  const shareData = {
    title: "Ashwin Ninan Philip | Digital Business Card",

    text:
      "Ashwin Ninan Philip — Quality Controller, Ni Met Recycling FZ LLC",

    url: pageUrl
  };


  try {

    if (navigator.share) {

      await navigator.share(shareData);

      shareStatus.textContent =
        "Shared successfully.";

    } else {

      await navigator.clipboard.writeText(pageUrl);

      shareStatus.textContent =
        "Card link copied to clipboard.";

    }

  } catch (e) {

    if (e.name !== "AbortError") {

      shareStatus.textContent =
        "Copy the page link from your browser to share it.";

    }

  }

});
