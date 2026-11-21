(() => {
    const progress = document.querySelector(".reading-progress");
    const page = document.scrollingElement;

    function updateProgress() {
        const distance = page.scrollHeight - page.clientHeight;
        progress.value = distance > 0 ? page.scrollTop / distance : 0;
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("pageshow", updateProgress);
    if ("ResizeObserver" in window) {
        new ResizeObserver(updateProgress).observe(document.body);
    }
    updateProgress();
})();
