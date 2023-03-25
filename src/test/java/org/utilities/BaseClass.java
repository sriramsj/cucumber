package org.utilities;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	
	public static WebDriver driver;
	public static Actions a;
	public static Select s;
	public static Robot r;

	/* 1.Launch the browser */
	public static void launchBrowser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}

	/* 2.Launch the url */
	public static void launchUrl(String url) {
		driver.get(url);
	}

	/* 3.Maximize the browser */
	public static void windowMaximize() {
		driver.manage().window().maximize();
	}

	/* 4.Pass the values */
	public static void EnterText(WebElement element, String text) {
		element.sendKeys(text);
	}

	/* 5.Delete all cookies */
	public static void deleteAllCookies() {
		driver.manage().deleteAllCookies();
	}

	/* 6.Apply implicit wait */
	public static void applyImplicitWait() {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	}

	/* 7.Refresh a page */
	public static void pageRefresh() {
		driver.navigate().refresh();
	}

	/* 8.Click a element */
	public static void clickElement(WebElement element) {
		element.click();
	}

	/* 9.Drag and drop a element */
	public static void dragAndDropTheElement(WebElement source, WebElement target) {

	}

	/* 10.Double click a element */
	public static void doubleClickUsingMouse(WebElement element) {
		a = new Actions(driver);
		a.doubleClick(element).perform();
	}

	/* 11.Get title */
	public static String getPageTitle() {
		String title = driver.getTitle();
		return title;
	}

	/* 12.Get current url */
	public static String getCurrentUrl() {
		String currenturl = driver.getCurrentUrl();
		return currenturl;
	}

	/* 13.Dropdown using text */
	public static void dropDownUsingText(WebElement element, String text) {
		s = new Select(element);
		s.selectByVisibleText(text);
	}

	/* 14.Dropdown using index */
	public static void dropDownUsingIndex(WebElement element, int index) {
		s = new Select(element);
		s.deselectByIndex(index);
	}

	/* 15.Quit a browser */
	public static void quitBrowser() {
		driver.quit();
	}

	/* 16.Close a browser */
	public static void closeBrowser() {
		driver.close();
	}

	/* 17.Move to element */
	public static void moveToElementUsingMouse(WebElement element) {
		a = new Actions(driver);
		a.moveToElement(element).perform();
	}

	/* 18.Context click */
	public static void contextClickUsingMouse(WebElement element) {
		a = new Actions(driver);
		a.contextClick().perform();
	}

	/* 19.Keypress and Keyrelease */
	public static void keyPressAndKeyRelease() throws AWTException {
		r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
	}

	/* 20.KeyDown and keyup */
	public static void keyDownAndKeyUp(String txt) {
		a = new Actions(driver);
		a.keyDown(Keys.SHIFT).perform();
		a.sendKeys(txt).perform();
		a.keyUp(Keys.SHIFT).perform();
	}

	/* 21.Accept the alert */
	public static void acceptTheAlert() {
		Alert aler = driver.switchTo().alert();
		aler.accept();
	}

	/* 22.Dismiss the alert */
	public static void dismissTheAlert() {
		Alert aler = driver.switchTo().alert();
		aler.dismiss();
	}

	/* 23.Sendkeys in alert */
	public static void sendKeysInAlert(String txt) {
		Alert aler = driver.switchTo().alert();
		aler.sendKeys(txt);
	}

	/* 24.Get text in alert */
	public static void getTextInAlert() {
		Alert aler = driver.switchTo().alert();
		String txt = aler.getText();
		System.out.println(txt);

	}

	/* 25.Select value by index */
	public static void selectValueUsingByIndex(WebElement element, int index) {
		s = new Select(element);
		s.selectByIndex(index);
	}

	/* 26.Select value by value */
	public static void selectValueUsingByValue(WebElement element, String txt) {
		s = new Select(element);
		s.selectByValue(txt);
	}

	/* 27.Select value by text */
	public static void selectValueUsingByText(WebElement element, String txt) {
		s = new Select(element);
		s.selectByVisibleText(txt);
	}

	/* 28.Deselect value by text */

	public static void deselectValueUsingByText(WebElement element, String text) {
		s = new Select(element);
		s.selectByVisibleText(text);
		;
	}

	/* 29.Deselect value by value */

	public static void deselectValueUsingByValue(WebElement element, String txt) {
		s = new Select(element);
		s.selectByValue(txt);
	}

	/* 30.Deselect value by index */

	public static void deselectValueUsingByIndex(WebElement element, int index) {
		s = new Select(element);
		s.selectByIndex(index);
	}

	/* 31.IsMultiple */

	public static void selectMultiple(WebElement element) {
		s = new Select(element);
		boolean multiple = s.isMultiple();
		System.out.println("Given  selector is multi" + multiple);
	}

	/* 32.TakesScreenshot */

	public static void takesScreenshotInWebpage() throws IOException {

		TakesScreenshot tk = (TakesScreenshot) driver;
		File src = tk.getScreenshotAs(OutputType.FILE);
		File des = new File(" ");
		FileUtils.copyFile(src, des);

	}

	/* 33.JavascriptExecutor - SendKeys */
	public static void javascriptArgument(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('value',value we pass)", element);

	}

	/* 34.JavascriptExecutor - Get the Attribute */
	public static void javascriptAttribute(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("return arguments[0].getAttribute('value')", element);

	}

	/* 35.JavascriptExecutor - Click */
	public static void javascriptClick(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", element);

	}

	/* 36.Javascript - Scroll */
	public static void javascriptScroll(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView()", element);

	}

	/* 37.WebDriver wait */
	private static void webDriverWaitTheWebElement() {
		WebDriverWait w = new WebDriverWait(driver, Duration.ofSeconds(10));
	}

	/* 38.Isenabled */
	public static void isEnabledWebElement(WebElement element) {

		boolean enabled = element.isEnabled();
		System.out.println(enabled);

	}

	/* 39.Isdisplayed */
	public static void isDisplayedWebElement(WebElement element) {

		boolean displayed = element.isDisplayed();
		System.out.println(displayed);

	}

	/* 40.Isselected */
	public static void isSelectedWebElement(WebElement element) {

		boolean selected = element.isSelected();
		System.out.println(selected);

	}

	/* 41.To url by navigate */
	public static void navigationUrl(String url) {
		driver.navigate().to(url);

	}

	/* 42.Back by navigation */
	public static void navigationBack() {
		driver.navigate().back();
	}

	/* 43.Forward */
	public static void navigationForward() {
		driver.navigate().forward();
	}


	
	/* Excel integration with selenium */
	public static String readExcel(String filename, String sheetname, int row, int cell) throws IOException {

		File f = new File("C:\\Users\\srira\\eclipse-workspace\\Framework\\Excel\\" + filename + ".xlsx");
		FileInputStream fis = new FileInputStream(f);
		Workbook w = new XSSFWorkbook(fis);
		Sheet s = w.getSheet(sheetname);
		Row r = s.getRow(row);
		Cell c = r.getCell(cell);
		int type = c.getCellType();
		String text = "";
		if (type == 1) {
			text = c.getStringCellValue();
		} else if (DateUtil.isCellDateFormatted(c)) {
			Date d = c.getDateCellValue();
			SimpleDateFormat sm = new SimpleDateFormat("dd-MM-yyyy");
			text = sm.format(d);
		} else {
			double dd = c.getNumericCellValue();
			long l = (long) dd;
			text = String.valueOf(l);
		}
		return text;

	}

	/* Write Excel */
	public static void writeExcel(String filename, String sheetname) throws IOException {

		File f = new File("C:\\Users\\srira\\eclipse-workspace\\Framework\\Excel\\" + filename + ".xlsx");
		Workbook w = new XSSFWorkbook();
		Sheet s = w.createSheet(sheetname);
		FileOutputStream fos = new FileOutputStream(f);
		w.write(fos);

	}

	/* Write Row */
	public static void writeRow(String filename, String sheetname, int row) throws IOException {

		File f = new File("C:\\Users\\srira\\eclipse-workspace\\Framework\\Excel\\" + filename + ".xlsx");
		FileInputStream fis = new FileInputStream(f);
		Workbook w = new XSSFWorkbook(fis);
		Sheet s = w.getSheet(sheetname);
		s.createRow(row);
		FileOutputStream fos = new FileOutputStream(f);
		w.write(fos);

	}

	/* Write Cell */
	public static void writeCell(String filename, String sheetname, int row, int cell, String value)
			throws IOException {
		File f = new File("C:\\Users\\srira\\eclipse-workspace\\Framework\\Excel\\" + filename + ".xlsx");
		FileInputStream fis = new FileInputStream(f);
		Workbook w = new XSSFWorkbook(fis);
		Sheet s = w.getSheet(sheetname);
		Row r = s.getRow(row);
		Cell c = r.createCell(cell);
		c.setCellValue(value);
		FileOutputStream fos = new FileOutputStream(f);
		w.write(fos);

	}

	/* Another method for write */
	public static void excelWrite(String file, int row, int cell, String data, String sheet)
			throws FileNotFoundException, IOException {
		File f = new File(file);
		Workbook w;
		Sheet s;
		Row r;

		if (row == 0 && cell == 0) {
			w = new XSSFWorkbook();
			s = w.createSheet(sheet);
			r = s.createRow(row);
		} else if (row != 0 && cell == 0) {
			w = new XSSFWorkbook(new FileInputStream(f));
			s = w.getSheet(sheet);
			r = s.createRow(row);
		} else {
			w = new XSSFWorkbook(new FileInputStream(f));
			s = w.getSheet(sheet);
			r = s.getRow(row);
		}
		Cell c = r.createCell(cell);
		c.setCellValue(data);

		FileOutputStream fos = new FileOutputStream(f);
		w.write(fos);

	}

	/* Excel Adactin Data's */
	public static void adactinExcel(String filename) throws FileNotFoundException, IOException {
		String file = "C:\\Users\\srira\\eclipse-workspace\\Framework\\Excel\\" +filename+ ".xlsx";
		String sheet = "sheet1";
		String[] headings = { "Username", "Password", "Location", "Hotels", "RoomType", "NoOfRooms", "Checkin",
				"Checkout", "Adult", "Child", "Firstname", "Lastname", "Address", "CreditcardNo", "CardType",
				"Expmonth", "Expyear", "Cvv" };

		String[] data = { "sriram03", "ram321", "Paris", "Hotel Sunshine", "Super Deluxe", "1 - One", "26/01/2023",
				"27/01/2023", "2 - Two", "0 - None", "Sriram", "Sj", "Chennai", "5432123498764321", "VISA", "March",
				"2021", "321" };

		for (int i = 0; i < 18; i++) {
			excelWrite(file, 0, i, headings[i], sheet);
			excelWrite(file, 1, i, data[i], sheet);
		}

	}

}
