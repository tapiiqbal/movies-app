import "regenerator-runtime";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "bootstrap";

import "./assets/css/bootstrap.min.css";
import "./assets/font-awesome/css/font-awesome.css";
import "./assets/css/plugins/sweetalert/sweetalert.css"
import "./assets/css/animate.css";
import "./assets/css/style.css";
import "./assets/css/plugins/slick/slick.css";
import "./assets/css/plugins/slick/slick-theme.css";

import "./assets/js/jquery-3.1.1.min.js";
import "./assets/js/popper.min.js";
import "./assets/js/bootstrap.js";
import "./assets/js/plugins/metisMenu/jquery.metisMenu.js";
import "./assets/js/plugins/pace/pace.min.js";
import "./assets/js/plugins/jquery-ui/jquery-ui.min.js";
import "./assets/js/plugins/sweetalert/sweetalert.min.js";
import "./assets/js/plugins/validate/jquery.validate.min.js";
import "./assets/js/plugins/slick/slick.min.js";
import "./component/footer-bar";
import "./assets/img/download_movies.png";
import "./view/dashboard.js";
import "./view/login.js";
import main from "./view/main.js";
document.addEventListener("DOMContentLoaded", main);