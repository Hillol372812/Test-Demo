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
  "duration": 35728088225,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.validate_the_title_of_the_Page()"
});
formatter.result({
  "duration": 4177354505,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_My_Account()"
});
formatter.result({
  "duration": 273251458,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_Sign_in_button()"
});
formatter.result({
  "duration": 242629451,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d92.0.4515.107)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027PC\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.107, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\Hillol\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59981}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e13d034f2185bd1512fa7b3efcade955\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDefinitions.EasyTrip.click_on_Sign_in_button(EasyTrip.java:52)\r\n\tat ✽.Then Click on Sign in button(src/main/java/Features/EasyTrip.feature:8)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "EasyTrip.click_on_Log_in_button()"
});
formatter.result({
  "status": "skipped"
});
});