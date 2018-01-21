package com.Quandoo.Assignment.LoginHoverSorting;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.Quandoo.Assignment.LoginHoverSorting.util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


//StepDefinition Layer

public class Stepdefinition {
	
	//Initializing the WebConnector
	WebConnector selenium = WebConnector.getinstance();
	
	//Common Navigate to login page StepDefinition code
	@Given("^I navigated to \"(.*?)\" on \"(.*?)\"$")
	public void i_navigated_to_on(String url, String browser) throws Throwable {
		
		System.out.println("Opening the browser");
		
		//calling the openBrowser function in WebConnector.java with browser as parameter
		//browser parameter is provided in feature file and passed on to this file
		selenium.openBrowser(browser);    
		
		System.out.println("Opening the url in browser");
		
		//calling the navigate function in WebConnector.java with url as parameter
		//url parameter is provided in feature file and passed on to this file
		selenium.navigate(url);		
	    
	}
	
	//Common StepDefinition code to pass username and password to login page
	@And("^I enter \"(.*?)\" as \"(.*?)\"$")
	public void i_enter_as(String object, String text) throws Throwable {
	   
		System.out.println("Passing the username/password to Login page");
		
		//calling the type function in WebConnector.java with text & object parameter
		//text & object parameters are provided in feature file and passed on to this file
		selenium.type(text, object);
	}
	
	//Common StepDefinition code to click
	@And("^I click on \"(.*?)\"$")
	public void i_click_on(String object) throws Throwable {
		
		System.out.println("Clicking on "+object);

		//calling the click function in WebConnector.java with object parameter
		//object parameter is provided in feature file and passed on to this file
		selenium.click(object);
		}

	//Common StepDefinition code to Verify that the message on login page is as per message provided in feature file
	@Then("^Verify \"(.*?)\" contains \"(.*?)\"$")
	public String Verify_contains (String object,String expectedmessage){
	
	System.out.println("Verifying the text after clicking on Login button, if it is same as expected");

	//calling the Text function in WebConnector.java with object parameter
	//object parameter is provided in feature file and passed on to this file
	//textComing will store the actual message as displayed after clicking on Login Button
	String textComing=selenium.Text(object);
		
	System.out.println("This is actual message-"+textComing);
	System.out.println("This is expected message-"+expectedmessage);
		
	//Verifying if the partial text is displayed in the browser, then the test case will pass
		if (textComing.contains(expectedmessage)){
			System.out.println("Verified that the partial text is displayed in the browser");
			System.out.println("Scenario Pass");
			}
		return textComing;
		}
	
	//Common StepDefinition code to hover the mouse over the 3 avatar pictures
	@And("^I Hover over \"(.*?)\"$")
	public void i_Hover_over(String arg1) throws Throwable {
		
		System.out.println("Mouse is hover over the "+arg1);

		//calling the Hover function in WebConnector.java with arg1 parameter
		//arg1 parameter is provided in feature file and passed on to this file
		selenium.Hover(arg1);
	}
	
	//Common StepDefinition code to verify if the user name is present when mouse is hover over the corresponding Avatar Picture
	@Then("^Text \"(.*?)\" should be present$")
	public void text_should_be_present(String arg1) throws Throwable {
			
		//calling the Text function in WebConnector.java with object parameter
		//arg1 parameter is provided in feature file and passed on to this file
		//Name will store the user name as displayed after mouse hover over Avatar Picture
		String Name=selenium.Text(arg1);
		
		System.out.println("Verifying that correct username is triggered after mouse is taken over avatar picture");

		   //if statement to verify if 
		   if (Name.contains(arg1)){
			   
			System.out.println("Correct username is displayed as " + Name);
	    	    
		   }
	  }   
	   
	//StepDefinition code to verify that lastnames are sorted in ascending order
	@Then("^Verify the lastname are sorted in ascending order\\.$")
	public void Verify_the_lastname_are_sorted_in_ascending_order() throws Throwable {
		
		//Creating an ArrayList of type String to save the Sorted lastnames of table in ascending order
		ArrayList<String> expectedLastName =new ArrayList<String>(Arrays.asList("Bach","Canway","Doe","Smith"));
		
		System.out.println("The expected last names in ascending order are "+expectedLastName);
		
		//Calling the sortedLastName method in WebConnector file
		//Saving the actual lastnames in sortedLastName ArrayList
		ArrayList<String> sortedLastName = selenium.sortedLastName();
		
		System.out.println("The actual last names in ascending order are "+sortedLastName);
		
		System.out.println("Verifying if the actual lastnames- "+sortedLastName+" are similar to expected lastnames- "+expectedLastName);
		
		//Comparing the actual and expected last names ArrayLists for ascending order
		boolean isListSorted = selenium.compareLastnames(expectedLastName, sortedLastName);   
	    if(isListSorted=true)
					
		System.out.println("Last names are sorted in Ascending order");
		else
		System.out.println("Last names are NOT sorted in Ascending order");	
					
	}
	
	//StepDefinition code to verify that data is sorted in descending order
	@Then("^Verify the lastname are sorted in descending order\\.$")
	public void Verify_the_lastname_are_sorted_in_descending_order() throws Throwable {
		
		//Creating an ArrayList of type String to save the Sorted lastnames of table in descending order
		ArrayList<String> expectedLastName =new ArrayList<String>(Arrays.asList("Smith","Doe","Canway","Bach"));
		
		System.out.println("The expected last names in descending order are "+expectedLastName);
		
		//Calling the sortedLastName method in WebConnector file
		//Saving the actual lastnames in sortedLastName ArrayList
		ArrayList<String> sortedLastName = selenium.sortedLastName();
		
		System.out.println("The actual last names in descending order are "+sortedLastName);
		
		System.out.println("Verifying if the actual lastnames- "+sortedLastName+" are similar to expected lastnames- "+expectedLastName);
		
		//Comparing the actual and expected last names ArrayLists for descending order
		
		boolean isListSorted = selenium.compareLastnames(expectedLastName, sortedLastName);
		if(isListSorted=true)
			
		System.out.println("Last names are sorted in Descending order");
		else
		System.out.println("Last names are NOT sorted in Descending order");	
		
		selenium.quit();  //calling the quit function 
		
	} 
	
	


	}
		
	
		
		
		
		
	
	
	


	
		








	


		
		
		
	
	
	


	
		








	

