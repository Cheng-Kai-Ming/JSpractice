document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form")
  const username = document.querySelector(".username")
  const press = document.querySelector("#press")
  press.addEventListener("click", (e) => {
    // e.preventDefault()
    // console.log(username.value)
    if (username.value == "") {
      e.preventDefault()
      console.log("no change")
    }

  })
})
