function generateNumber() {
    const minCeiled = Math.ceil(document.querySelector(".input-one").value)
    const maxFloored = Math.floor(document.querySelector(".input-two").value)
    const result = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    const endResult = document.querySelector(".result")
    endResult.innerHTML = result

}