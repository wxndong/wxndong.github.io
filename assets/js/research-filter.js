(() => {
    const filter = document.querySelector(".research-filter");
    const papers = document.querySelectorAll("#research-papers .paper");
    const buttons = filter.querySelectorAll("[data-research-view]");

    for (const button of buttons) {
        button.addEventListener("click", () => {
            const showAll = button.dataset.researchView === "all";
            for (const paper of papers) {
                paper.hidden = !showAll && !paper.hasAttribute("data-selected");
            }
            for (const mode of buttons) {
                mode.setAttribute("aria-pressed", String(mode === button));
            }
        });
    }

    filter.hidden = false;
})();
