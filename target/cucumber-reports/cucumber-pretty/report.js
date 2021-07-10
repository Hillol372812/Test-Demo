$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/EasyTrip.feature");
formatter.feature({
  "line": 1,
  "name": "Login into EasyTrip",
  "description": "",
  "id": "login-into-easytrip",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Click on LogIn button",
  "description": "",
  "id": "login-into-easytrip;click-on-login-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Navigate to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on My Account",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter\t\"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Log in button",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-into-easytrip;click-on-login-button;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 13,
      "id": "login-into-easytrip;click-on-login-button;;1"
    },
    {
      "cells": [
        "Test@gmail.com",
        "Password@123"
      ],
      "line": 14,
      "id": "login-into-easytrip;click-on-login-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Click on LogIn button",
  "description": "",
  "id": "login-into-easytrip;click-on-login-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Navigate to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on My Account",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter\t\"Test@gmail.com\" and \"Password@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Log in button",
  "keyword": "Then "
});
formatter.match({
  "location": "EasyTrip.user_Navigate_to_Login_Page()"
});
formatter.result({
  "duration": 39104914476,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.validate_the_title_of_the_Page()"
});
formatter.result({
  "duration": 3988967601,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_My_Account()"
});
formatter.result({
  "duration": 235350456,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_Sign_in_button()"
});
formatter.result({
  "duration": 336781757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@gmail.com",
      "offset": 7
    },
    {
      "val": "Password@123",
      "offset": 28
    }
  ],
  "location": "EasyTrip.enter_and(String,String)"
});
formatter.result({
  "duration": 1259277846,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_Log_in_button()"
});
formatter.result({
  "duration": 10373507982,
  "status": "passed"
});
});