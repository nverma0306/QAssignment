Feature: Quandoo Assignment

In order to showcase the skills
the automation assignment is being done

Scenario: Login Success
Given I navigated to "LoginPage" on "Mozilla"
And I enter "loginusername" as "tomsmith"
And I enter "loginpassword" as "SuperSecretPassword!"
And I click on "loginButton"
Then Verify "message" contains "You logged into a secure area!"


Scenario: Login failure 1
Given I navigated to "LoginPage" on "Mozilla"
And I enter "loginusername" as "anything"
And I enter "loginpassword" as "SuperSecretPassword!"
And I click on "loginButton"
Then Verify "message" contains "Your username is invalid!"


Scenario: Login failure 2
Given I navigated to "LoginPage" on "Mozilla"
And I enter "loginusername" as "tomsmith"
And I enter "loginpassword" as "anything"
And I click on "loginButton"
Then Verify "message" contains "Your password is invalid!"

Scenario Outline: Hovers
Given I navigated to "HoverPage" on "Mozilla"
And I Hover over "<Image>"
Then Text "<Username>" should be present


Examples:

| Image  | Username |
| Image1 | user1    |
| Image2 | user2    |
| Image3 | user3    |

Scenario: Sortable data table
Given I navigated to "DataTables" on "Mozilla"
When I click on "lastName" 
Then Verify the lastname are sorted in ascending order.
When I click on "lastName"
Then Verify the lastname are sorted in descending order.

