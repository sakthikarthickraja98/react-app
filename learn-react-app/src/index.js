import React from "react";
import ReactDom from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

var element = <button class="btn btn-danger">Hello react app</button>
ReactDom.render(element,document.getElementById("root"));
