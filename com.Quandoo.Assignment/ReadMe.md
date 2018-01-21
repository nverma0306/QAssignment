# Assignment

### Prerequisite

Technology stack used is
* Selenium Webdriver Version 3.6.0
* Cucumber-jvm version 1.2.5
* junit version 4.12

### Tools:
* Eclipse Mars as an editor
* Maven is used for dependency management and as build tool

### Programming Langauge: 
Java is used. Java should be installed on machine(I am using version "1.8.0_161”)


# Browser:
Mozilla browser should be installed(I am using Version 57.0.4)

# Tests Covered
* Login Success
* Login failure 1
* Login failure 2
* Hovers
* Sortable data table

### Project Architecture
> The project has 3 layers. The first layer is feature file layer. The second layer is Step Definition layer. And the third layer is Selenium layer.

>So, when the project is executed as "maven test", the test runner executes, which starts the execution from the feature file. The Scenario steps from feature file(Test.feature) are read.
Corresponding to steps in feature file, Stepdefinitions are read from stepdefinition file(Stepdefinition.java)
In stepDefinition file we call different utility functions which are defined in WebConnector.java file
These utility functions executes and gives the response back to Stepdefinition file and this completes the execution corresponding to scenario step in feature file
And, then the next line in feature file is read and this continues until all the scenarios are executed.

### Project File Structure & description

1. **source code**
    a. **src/test/java** has 
    - **package “com.Quandoo.Assignment.config”**, inside this package I have properties file:
        - **Config.properties:** This contains all the URLs to login page, hover page and tables page
        - **OR.properties:** This contains all the path of the elements on the pages.

    - **package “com.Quandoo.Assignment.LoginHoverSorting"**, inside this package I have 
        - **Stepdefinition.java file:** This file has StepDefinitions of feature file
        - **TestRunner.java file:** This have runner configuration of cucumber

	 - **package "com.Quandoo.Assignment.LoginHoverSorting.util"**, inside this package I have 
        - **WebConnector.java file:** This is the selenium layer. Inside this utility functions are created, which are called from StepDefinition file
		Inside this, I am also initialising the properties files and loading them.
		
    b. **src/test/resources** has
	  - **package “com.Quandoo.Assignment.LoginHoverSorting”**, inside this package I have the feature file
        - **Test.feature:** Inside this feature file all 5 test scenarios are written 
            - Login Success
            - Login failure 1
            - Login failure 2
            - Hovers
            - Sortable data table


2. **pom.xml**
	inside this we have all the dependencies along with projects name for selenium, junit & cucumber. 
	It also has build information along with maven plugins

3. **Mozilla**
    MozillaDriver.exe
    Mozilla Driver exe is kept inside this folder
4. **ReadMe.md** file
	Documentation about the project.
5. **output** folder
    This folder contains generated reports.

### How to run : 
Maven install - This will download all the project related dependency jars and will execute all the tests.
