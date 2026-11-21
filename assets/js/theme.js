(() => {
    const root = document.documentElement;
    const toggle = document.querySelector(".theme-toggle");
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const storageKey = "theme";
    let preference;
    try {
        preference = localStorage.getItem(storageKey);
    } catch {
        // The preview also works when browser storage is unavailable.
    }

    function applyTheme() {
        const systemTheme = system.matches ? "dark" : "light";
        const theme = preference === "light" || preference === "dark" ? preference : systemTheme;
        root.dataset.theme = theme;
        toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }

    toggle.addEventListener("click", () => {
        preference = root.dataset.theme === "dark" ? "light" : "dark";
        applyTheme();
        try {
            localStorage.setItem(storageKey, preference);
        } catch {
            // Keep the selected theme for the current page.
        }
    });

    system.addEventListener("change", applyTheme);
    applyTheme();
})();
