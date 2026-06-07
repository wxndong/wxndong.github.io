(function() {
    var root = document.documentElement;
    var button = document.querySelector(".theme-toggle");
    var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function currentTheme() {
        return root.getAttribute("data-theme") || (mediaQuery.matches ? "dark" : "light");
    }

    function applyTheme(theme, persist) {
        root.setAttribute("data-theme", theme);
        if (persist) {
            localStorage.setItem("theme", theme);
        }
        if (button) {
            button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
            button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
        }
    }

    applyTheme(currentTheme(), false);

    if (button) {
        button.addEventListener("click", function() {
            applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
        });
    }

    mediaQuery.addEventListener("change", function(event) {
        if (!localStorage.getItem("theme")) {
            applyTheme(event.matches ? "dark" : "light", false);
        }
    });
})();
