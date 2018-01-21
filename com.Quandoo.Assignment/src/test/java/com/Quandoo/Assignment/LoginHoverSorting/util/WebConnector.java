package com.Quandoo.Assignment.LoginHoverSorting.util;

import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.Properties;
import java.util.Stack;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class WebConnector {
	
	Properties OR = null;
	Properties Config= null;
	WebDriver driver = null;
	WebDriver mozilla = null;
	static WebConnector w;
	
	//constructor
	private WebConnector(){
		if (OR ==null){
			
			
			try{
				//initializing the OR property file
				OR= new Properties();
				FileInputStream fs = new FileInputStream (System.getProperty("user.dir")+"/src/test/java/com/Quandoo/Assignment/config/OR.properties");
				OR.load(fs); //loading the file
				
				//initializing the CONFIG property file
				Config= new Properties();
				fs= new FileInputStream (System.getProperty("user.dir")+"/src/test/java/com/Quandoo/Assignment/config/Config.properties");
				Config.load(fs); //loading the file
			
				
				
			}catch (Exception e){
			System.out.println("Error on initializing property file");
			}
		}
		
	}
	
	    //function to open the Browser
		//Initializing the browser if already not open
		public void openBrowser(String browserType){
		if (browserType.equals("Mozilla")&& mozilla==null){
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\Mozilla\\MozillaDriver.exe"); //using mozilla driver
			driver=new FirefoxDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			mozilla =driver;
		}else if(browserType.equals("Mozilla")&& mozilla!=null){
			driver=mozilla;
		}
			
		}
		
    //function to navigate to required URL
	public void navigate(String URL){
		driver.get(Config.getProperty(URL));
		
	}
    //function to Click on any Object
	public void click(String objectName){
		driver.findElement(By.xpath(OR.getProperty(objectName))).click();
	}
	//function to Type text in any field
	public void type(String text,String objectName){
		driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
		
	}
	//function to extract text from the element
	public String Text(String arg1){
		return driver.findElement(By.xpath(OR.getProperty(arg1))).getText();
		
	}
	//function to hover over the element
	public void Hover(String object){
		WebElement Image = driver.findElement(By.xpath(OR.getProperty(object))); 
        Actions action = new Actions(driver);
        action.moveToElement(Image).build().perform();
		
	}
	
	
	
	
	//function to find sortedLastNames
	public ArrayList<String> sortedLastName(){
		ArrayList<String> sortedNames = new ArrayList<String>();
		for(int i=1; i<5; i++){
			
			String lastnamefromPage =driver.findElement(By.xpath(OR.getProperty("lastName"+i))).getText();
			sortedNames.add(lastnamefromPage);
			}
		return sortedNames;
		
	}
	
	//function to compare sortedLastNames and expectedLastNames , the loop breaks if they does'nt match
	public boolean compareLastnames(ArrayList<String> expectedLastName ,ArrayList<String> sortedLastName){
		boolean match = true;
		for(int i=0;i<4;i++){
			if(!expectedLastName.get(i).equals(sortedLastName.get(i))){
				match=false;
				break;
			}
			
		}
		return match;
		
	}
	
		
	/***********Singleton*********/
	//function to initiate the Webdriver once 
	public static WebConnector getinstance(){
		if (w==null){
			w= new WebConnector();
			}
		return w;
		}
	
	    //function to close the browser and quit the browser window
		public void quit() {
		driver.quit();
			
		}

	

}

























	
