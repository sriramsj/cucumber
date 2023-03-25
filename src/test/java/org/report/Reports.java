package org.report;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.junit.AfterClass;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Reports {
	@AfterClass
	public static void generateJvm(String jsonFilePath) {
		File f=new File(System.getProperty("user.dir")+"\\src\\test\\resources\\Reports\\JvmReports");
		Configuration con=new Configuration(f,"Tomtop");
		con.addClassifications("Browser Name", "Chrome");
		con.addClassifications("Sprint", "10");
		
		List<String> li=new ArrayList<String>();
		li.add(jsonFilePath);
		ReportBuilder r=new ReportBuilder(li, con);
		r.generateReports();

	}
	

}
