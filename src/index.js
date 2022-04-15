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
  $("#planet-age").text(user.planetAge(planet, user.dayAge));
  $("#life-expectancy").text(user.lifeExpectancy(planet));
});
