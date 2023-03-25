package org.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utilities.BaseClass;

public class Tomtop extends BaseClass {

	public Tomtop() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(name = "email")
	private WebElement txtUsername;

	@FindBy(name = "pw")
	private WebElement txtPass;

	@FindBy(xpath = "//input[@class='bm_btn caution signIn_btn']")
	private WebElement txtLog;

	@FindBy(xpath = "//i[@class='icon-Close']")
	private WebElement xclick;

	@FindBy(id = "account_info")
	private WebElement signin;

	@FindBy(xpath = "//input[@style='width: 363px;']")
	private WebElement search1;
	
	@FindBy (xpath="//a[@class='search_btn']")
	private WebElement searchbtn;

	public WebElement getSearchbtn() {
		return searchbtn;
	}

	@FindBy(xpath = "//a[@title='Cellphone & Accessories']")
	private WebElement cat;

	@FindBy(xpath = "//a[@title='iPhone Accessories']")
	private WebElement sub;

	@FindBy(xpath = "//input[@style='width: 363px;']")
	private WebElement search2;
	
	@FindBy(xpath="//a[@title='1.3']")
	private WebElement oneprod;

	public WebElement getOneprod() {
		return oneprod;
	}

	@FindBy(id = "ADDTOCART+product+10009+J4426+6")
	private WebElement atc;

	@FindBy(xpath = "//a[text()='View Cart & Check out']")
	private WebElement checkout;

	@FindBy(xpath = "//span[@class='wares_qty_add qty']")
	private WebElement incre;
	
	@FindBy(xpath="//a[text()='sriramsfast']")
	private WebElement sriramsfast;
	
	@FindBy(xpath="//p[text()='Your email or password is incorrect. Please try again']")
	private WebElement errormsg;
	
	@FindBy(xpath="(//li[@property='itemListElement'][2])")
	private WebElement searchresults;
	
	@FindBy(xpath="//h1[text()='iPhone Accessories']")
	private WebElement subcatresults;

	public WebElement getSubcatresults() {
		return subcatresults;
	}

	public WebElement getSearchresults() {
		return searchresults;
	}

	public WebElement getErrormsg() {
		return errormsg;
	}

	public WebElement getSriramsfast() {
		return sriramsfast;
	}

	public WebElement getXclick() {
		return xclick;
	}

	public WebElement getSignin() {
		return signin;
	}

	public WebElement getSearch1() {
		return search1;
	}

	public WebElement getCat() {
		return cat;
	}

	public WebElement getSub() {
		return sub;
	}

	public WebElement getSearch2() {
		return search2;
	}

	public WebElement getAtc() {
		return atc;
	}

	public WebElement getCheckout() {
		return checkout;
	}

	public WebElement getIncre() {
		return incre;
	}

	public WebElement getTxtUsername() {
		return txtUsername;
	}

	public WebElement getTxtPass() {
		return txtPass;
	}

	public WebElement getTxtLog() {
		return txtLog;
	}

}
