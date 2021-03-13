package StepDefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class LoginSteps {


@Given("^user launch the website$")
public void user_launch_the_website() {
    System.out.println("Launch website");
    //throw new io.cucumber.java.PendingException();
}

@When("user enter credentials")
public void user_enter_credentials() {
    System.out.println("enter credentials");
    
}

@And("land on the home page")
public void land_on_the_home_page() {
	System.out.println("home page");
   
}


}
