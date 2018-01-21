package com.Quandoo.Assignment.LoginHoverSorting;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"html:output/cucumber-html-report",
	       "json:output/cucumber.json",
	       "junit:output/cucumber-results.xml"
	      })
public class TestRunner {

}
