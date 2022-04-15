import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { User } from "./js/user";

$("form").submit(function (event) {
  event.preventDefault();
  const age = parseInt($("#age").val());
  const planet = $("#planet-select").val();
  const user = new User(age);
  const date1 = new Date(birthday());
  const date2 = new Date("2022-4-15");
  birthday();
  function birthday() {
    let input = document.querySelector('input[type="date"]');
    return input.value;
  }
  $("#planet-age").text(
    user.planetAge("earth", user.accuratePlanetAge(date1, date2)) + " years old"
  );
  $("#life-expectancy").text(user.lifeExpectancy(planet));
});
