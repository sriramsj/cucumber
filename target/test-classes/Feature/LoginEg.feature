
Feature: To verify the login functionality 

Background:
Given User launches application
 
  Scenario: To verify valid crendentials
   
    When User enter valid username and password
    And Click login button
    Then User sees home page
    
    
  Scenario: To verify invalid credentials
    
    When User enter invalid username and password
    And Click login button
    Then User sees error page


