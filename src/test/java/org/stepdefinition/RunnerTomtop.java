package org.stepdefinition;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Feature\\LoginTomtop.feature",glue="org.stepdefinition")

public class RunnerTomtop {

}
