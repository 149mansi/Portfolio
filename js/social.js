document.addEventListener("DOMContentLoaded", function () {
    const shareButtons = document.querySelectorAll(".share-button");
  
    shareButtons.forEach(button => {
      button.addEventListener("click", function () {
        const platform = this.dataset.platform;
        const pageUrl = encodeURIComponent(window.location.href);
        const pageTitle = encodeURIComponent(document.title);
        
        let shareUrl = "";
        
        switch (platform) {
          case "facebook":
            shareUrl = `https://www.linkedin.com/in/mansi-utane-69908228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app{pageUrl}`;
            break;
          case "twitter":
            shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
            break;
          case "linkedin":
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
            break;
          default:
            break;
        }
        
        if (shareUrl) {
          window.open(shareUrl, "_blank");
        }
      });
    });
  });
  