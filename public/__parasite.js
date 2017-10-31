setTimeout(function() {
  var test = document.getElementById('test');
  test.id = "test_modified";
  test.textContent = "Button modified";
}, 3000);
document.addEventListener("DOMContentLoaded", function() {
  var test = document.getElementById('test');
  test.addEventListener("click", function() {
    alert("test");
  });
})
