
Feature: To verify the search functionality of the application
 
Background:
Given User launches application
And User enter valid username and password
And Click login button
And User sees home page
  
  Scenario Outline: To verify the search bar
  When User enter the "<searchkey>" in search bar 
  And User click search button
  Then  User sees the results based on "<searchkey>"
  
  Examples:
  | searchkey  |
  | earphones  |
  | smartwatch |
  
  Scenario Outline: To verify the search using category and subcategory navigation
  When User click the category "<category>"
  And User click the sub-category "<subcategory>"
  Then User sees results based on "<category>" and "<subcategory>"
  
  Examples:
  | category                 | subcategory       |
  | Cellphone & Accessories  | iPhone Accessories|