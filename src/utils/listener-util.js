document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver((mutations) => {
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => input.addEventListener("input", (e) => {
            input.dispatchEvent(new Event("change"));
        }))

        const textareas = document.querySelectorAll("textarea");
        textareas.forEach(textarea => {
            textarea.addEventListener("input", (e) => {
                textarea.dispatchEvent(new Event("change"));
            })
        });
    })

    observer.observe(document.body, { childList: true, subtree: true})

})