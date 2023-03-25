package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchEg {
	public WebDriver driver;

    @Given("launch application")
    public void launch_application() {
   
    }
    
	@Given("enter username and password")
	public void user_enter_username_and_password() {
	   
	}

	@Given("click the login")
	public void user_click_the_login() {
	   
	}
	
	@Given("sees home page")
	public void sees_home_page() {
	   
	}

	@When("User enter the {string} in search bar")
	public void user_enter_the_in_search_bar(String abc) {
		WebElement search1 = driver.findElement(By.xpath("//input[@placeholder='What are you looking for?']"));
		search1.sendKeys(abc);   
	}

	@When("User click search button")
	public void user_click_search_button() {
		driver.findElement(By.xpath("//a[@class='search_btn']")).click();
	   
	}

	@Then("User sees the results based on {string}")
	public void user_sees_the_results_based_on(String string) {
	 
	}

	@When("User click the category {string}")
	public void user_click_the_category(String xyz) {
		WebElement cat = driver.findElement(By.xpath("//a[@title='Cellphone & Accessories']"));
		Actions a=new Actions(driver);
		a.moveToElement(cat).perform();
		
		
		
	    
	}

	@When("User click the sub-category {string}")
	public void user_click_the_sub_category(String bcd) {
		WebElement sub = driver.findElement(By.xpath("//a[@title='iPhone Accessories']"));
		Actions a1=new Actions(driver);
		a1.moveToElement(sub).click().build().perform();
	   
	}

	@When("User sees results based on {string} and {string}")
	public void user_sees_results_based_on_and(String string, String string2) {
	   
	}

}
