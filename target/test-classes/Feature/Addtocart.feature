
Feature: To verify the addtocart functionality of the application
 
Background:
Given User launches application
And User enter valid username and password
And Click login button
Then User sees home page

Scenario: Add product to addtocart
When User search one product
And User click search button
And Select one product
And Click Add to cart
