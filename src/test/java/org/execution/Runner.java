package org.execution;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.report.Reports;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Feature",glue="org.execution",plugin= {"html:src\\test\\resources\\Reports",
		"json:src\\test\\resources\\Reports\\jsonreport.json","junit:src\\test\\resources\\Reports\\junitreport.xml"})

public class Runner {
	@AfterClass
	public static void reportGeneration() {
		Reports.generateJvm("C:\\Users\\srira\\eclipse-workspace\\CucumberFramework\\src\\test\\resources\\Reports\\jsonreport.json");
		

	}

}
