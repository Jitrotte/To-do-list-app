function newItem() {
  // creating listitems & getting the input value

  let li = $("<li></li>");
  let inputValue = $("#input").val();

  // appending input value to the listitem
  li.append(inputValue);

  // 1. Checks if no input value, alerts
  // 2. If there is an input value, appends li to the ol.

  if (inputValue === "") {
    alert("You must enter something!");
  } else {
    $("#list").append(li);
  }

  // line-through when listitem is double clicked
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  // deletes listitem on x click
  function deleteListItem() {
    li.addClass("delete");
  }

  // sortable enables a group of DOM elements to be sortable. In this case - the list
  $("#list").sortable();
}

EventTarget.onkeyup = newItem;
