export default function disableEnter(){
    document
      .getElementById("btn")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      });
}