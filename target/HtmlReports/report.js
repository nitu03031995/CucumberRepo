$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "Feature of login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check for login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.LoginSteps.user_launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.LoginSteps.user_enter_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "land on the home page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginSteps.land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
});