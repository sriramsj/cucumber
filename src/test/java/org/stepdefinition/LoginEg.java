package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginEg {
	public WebDriver driver;
	@Given("User launches application")
	public void user_launches_application() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://www.tomtop.com/");
		driver.findElement(By.xpath("//i[@class='icon-Close']")).click();
		driver.findElement(By.id("account_info")).click();
	    
	}

	@When("User enter valid username and password")
	public void user_enter_valid_username_and_password() {
		driver.findElement(By.name("email")).sendKeys("sriramsfast@gmail.com");
		driver.findElement(By.name("pw")).sendKeys("sriram321");
		
		
	    
	}

	@When("Click login button")
	public void click_login_button() {
		driver.findElement(By.xpath("//input[@class='bm_btn caution signIn_btn']")).click();
	
	}

	@When("User sees home page")
	public void user_sees_home_page() {

	}

	@When("User enter invalid username and password")
	public void user_enter_invalid_username_and_password() {
		driver.findElement(By.name("email")).sendKeys("markantony@gmail.com");
		driver.findElement(By.name("pw")).sendKeys("antony321");
		
	   
	}
	

	@When("User sees error page")
	public void user_sees_error_page() {
		
	}


}
