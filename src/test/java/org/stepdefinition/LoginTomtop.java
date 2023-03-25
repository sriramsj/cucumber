package org.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.utilities.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginTomtop extends BaseClass{
	public WebDriver driver;
	
	
	
	@Given("User launch tomtop application")
	public void user_launch_tomtop_application() {
		WebDriverManager.chromedriver().setup();
		driver =new ChromeDriver();
		driver.get("https://www.tomtop.com/");
		
	
	}

	@When("Choose one product and click")
	public void choose_one_product_and_click() throws InterruptedException, IOException {
		driver.findElement(By.xpath("//i[@class='icon-Close']")).click();
		WebElement search = driver.findElement(By.xpath("(//input[@placeholder='What are you looking for?'])[1]"));
		writeExcel("data", "sheet1");
		writeRow("data", "sheet1", 0);
		writeCell("data", "sheet1", 0, 1, "smartwatch");
		String value = readExcel("data", "sheet1", 0, 1);
		EnterText(search, value);
		driver.findElement(By.xpath("(//a[@type='button'])[1]")).click();
		Thread.sleep(3000);
		WebElement clickprod = driver.findElement(By.xpath("(//img[@class='lazy'])[2]"));
		JavascriptExecutor js=(JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()",clickprod );
		Thread.sleep(3000);
		
		
		
	}

	@When("Click the Add to cart")
	public void click_the_Add_to_cart() throws InterruptedException {
		
		driver.findElement(By.id("ADDTOCART+product+10009+PW0305+6")).click();
	  
	}
	
	



}
