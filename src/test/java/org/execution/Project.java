package org.execution;

import java.time.Duration;

import org.junit.Assert;
import org.objectrepository.Tomtop;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.utilities.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Project extends BaseClass {
	public Tomtop t;

	@Given("User launches application")
	public void user_launches_application() {
		launchBrowser();
		launchUrl("https://www.tomtop.com/");
		applyImplicitWait();
		t = new Tomtop();
		t.getXclick().click();
		t.getSignin().click();

	}

	@When("User enter valid username and password")
	public void user_enter_valid_username_and_password() {
		applyImplicitWait();
		t = new Tomtop();
		EnterText(t.getTxtUsername(), "sriramsfast@gmail.com");
		EnterText(t.getTxtPass(), "sriram321");

	}

	@When("Click login button")
	public void click_login_button() {
		t = new Tomtop();
		t.getTxtLog().click();

	}

	@Then("User sees home page")
	public void user_sees_home_page() {
		applyImplicitWait();
		t=new Tomtop();
		Assert.assertTrue("sriramsfast displayed",t.getSriramsfast().isDisplayed());

	}

	@When("User enter invalid username and password")
	public void user_enter_invalid_username_and_password() {
		t = new Tomtop();
		EnterText(t.getTxtUsername(), "markantony@gmail.com");
		EnterText(t.getTxtPass(), "antony321");

	}

	@Then("User sees error page")
	public void user_sees_error_page() {
		applyImplicitWait();
		t=new Tomtop();
		Assert.assertTrue("incorrect account",t.getErrormsg().isDisplayed());

	}

	@When("User enter the {string} in search bar")
	public void user_enter_the_in_search_bar(String abc) throws InterruptedException {
		applyImplicitWait();
		t = new Tomtop();
		t.EnterText(t.getSearch1(), abc);

	}

	@When("User click search button")
	public void user_click_search_button() {
		t = new Tomtop();
		t.getSearchbtn().click();

	}

	@Then("User sees the results based on {string}")
	public void user_sees_the_results_based_on(String string) {
		applyImplicitWait();
		t=new Tomtop();
		Assert.assertTrue("smartwatch results", t.getSearchresults().isDisplayed());
		

	}

	@When("User click the category {string}")
	public void user_click_the_category(String xyz) {
		t = new Tomtop();
		moveToElementUsingMouse(t.getCat());

	}

	@When("User click the sub-category {string}")
	public void user_click_the_sub_category(String bcd) {
		t = new Tomtop();
		moveToElementUsingMouse(t.getSub());
		clickElement(t.getSub());

	}

	@Then("User sees results based on {string} and {string}")
	public void user_sees_results_based_on_and(String string, String string2) {
		applyImplicitWait();
		t=new Tomtop();
		Assert.assertTrue("iphone accessories found", t.getSubcatresults().isDisplayed());

	}

	@When("User search one product")
	public void user_search_one_product() {
		t = new Tomtop();

		EnterText(t.getSearch2(), "smartwatch");

	}

	@When("Select one product")
	public void select_one_product() {
		applyImplicitWait();
		t = new Tomtop();
		t.getOneprod().click();

	}

	@When("Click Add to cart")
	public void click_Add_to_cart() {
		applyImplicitWait();
		t = new Tomtop();
		t.getAtc().click();
		t.getCheckout().click();
		t.getIncre().click();

	}

}
