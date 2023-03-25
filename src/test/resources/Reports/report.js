$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature/Addtocart.feature");
formatter.feature({
  "name": "To verify the addtocart functionality of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "Project.user_launches_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.remote.http.ConnectionFailedException: Unable to establish websocket connection to http://localhost:65161/devtools/browser/f5730f55-f185-4f0c-a40d-2e94f3cf98e5\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.\u003cinit\u003e(NettyWebSocket.java:102)\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.lambda$create$3(NettyWebSocket.java:128)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.openSocket(NettyClient.java:107)\r\n\tat org.openqa.selenium.devtools.Connection.\u003cinit\u003e(Connection.java:78)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.lambda$new$2(ChromiumDriver.java:116)\r\n\tat java.util.Optional.map(Unknown Source)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:114)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:82)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:50)\r\n\tat org.utilities.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.execution.Project.user_launches_application(Project.java:24)\r\n\tat ✽.User launches application(file:src/test/resources/Feature/Addtocart.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Project.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Project.user_sees_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add product to addtocart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User search one product",
  "keyword": "When "
});
formatter.match({
  "location": "Project.user_search_one_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click search button",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select one product",
  "keyword": "And "
});
formatter.match({
  "location": "Project.select_one_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Project.click_Add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Feature/LoginEg.feature");
formatter.feature({
  "name": "To verify the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "Project.user_launches_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.remote.http.ConnectionFailedException: Unable to establish websocket connection to http://localhost:65178/devtools/browser/e80034f9-641e-4d35-98e8-0c49ae866e11\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.\u003cinit\u003e(NettyWebSocket.java:102)\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.lambda$create$3(NettyWebSocket.java:128)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.openSocket(NettyClient.java:107)\r\n\tat org.openqa.selenium.devtools.Connection.\u003cinit\u003e(Connection.java:78)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.lambda$new$2(ChromiumDriver.java:116)\r\n\tat java.util.Optional.map(Unknown Source)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:114)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:82)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:50)\r\n\tat org.utilities.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.execution.Project.user_launches_application(Project.java:24)\r\n\tat ✽.User launches application(file:src/test/resources/Feature/LoginEg.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To verify valid crendentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Project.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Project.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Project.user_sees_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "Project.user_launches_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.remote.http.ConnectionFailedException: Unable to establish websocket connection to http://localhost:65195/devtools/browser/99097261-19cc-47b0-9906-36f8343b8f28\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.\u003cinit\u003e(NettyWebSocket.java:102)\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.lambda$create$3(NettyWebSocket.java:128)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.openSocket(NettyClient.java:107)\r\n\tat org.openqa.selenium.devtools.Connection.\u003cinit\u003e(Connection.java:78)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.lambda$new$2(ChromiumDriver.java:116)\r\n\tat java.util.Optional.map(Unknown Source)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:114)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:82)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:50)\r\n\tat org.utilities.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.execution.Project.user_launches_application(Project.java:24)\r\n\tat ✽.User launches application(file:src/test/resources/Feature/LoginEg.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To verify invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enter invalid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Project.user_enter_invalid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Project.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees error page",
  "keyword": "Then "
});
formatter.match({
  "location": "Project.user_sees_error_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Feature/SearchEg.feature");
formatter.feature({
  "name": "To verify the search functionality of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To verify the search bar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enter the \"\u003csearchkey\u003e\" in search bar",
  "keyword": "When "
});
formatter.step({
  "name": "User click search button",
  "keyword": "And "
});
formatter.step({
  "name": "User sees the results based on \"\u003csearchkey\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchkey"
      ]
    },
    {
      "cells": [
        "earphones"
      ]
    },
    {
      "cells": [
        "smartwatch"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "Project.user_launches_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.remote.http.ConnectionFailedException: Unable to establish websocket connection to http://localhost:65212/devtools/browser/2e4747c8-8f4e-45df-a27d-ded72e8c57d9\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.\u003cinit\u003e(NettyWebSocket.java:102)\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.lambda$create$3(NettyWebSocket.java:128)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.openSocket(NettyClient.java:107)\r\n\tat org.openqa.selenium.devtools.Connection.\u003cinit\u003e(Connection.java:78)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.lambda$new$2(ChromiumDriver.java:116)\r\n\tat java.util.Optional.map(Unknown Source)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:114)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:82)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:50)\r\n\tat org.utilities.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.execution.Project.user_launches_application(Project.java:24)\r\n\tat ✽.User launches application(file:src/test/resources/Feature/SearchEg.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Project.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees home page",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_sees_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To verify the search bar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enter the \"earphones\" in search bar",
  "keyword": "When "
});
formatter.match({
  "location": "Project.user_enter_the_in_search_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click search button",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees the results based on \"earphones\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Project.user_sees_the_results_based_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "Project.user_launches_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.remote.http.ConnectionFailedException: Unable to establish websocket connection to http://localhost:65229/devtools/browser/dde68991-5211-466c-874a-9fda10275199\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.\u003cinit\u003e(NettyWebSocket.java:102)\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.lambda$create$3(NettyWebSocket.java:128)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.openSocket(NettyClient.java:107)\r\n\tat org.openqa.selenium.devtools.Connection.\u003cinit\u003e(Connection.java:78)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.lambda$new$2(ChromiumDriver.java:116)\r\n\tat java.util.Optional.map(Unknown Source)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:114)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:82)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:50)\r\n\tat org.utilities.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.execution.Project.user_launches_application(Project.java:24)\r\n\tat ✽.User launches application(file:src/test/resources/Feature/SearchEg.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Project.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees home page",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_sees_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To verify the search bar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enter the \"smartwatch\" in search bar",
  "keyword": "When "
});
formatter.match({
  "location": "Project.user_enter_the_in_search_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click search button",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees the results based on \"smartwatch\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Project.user_sees_the_results_based_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "To verify the search using category and subcategory navigation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User click the category \"\u003ccategory\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click the sub-category \"\u003csubcategory\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User sees results based on \"\u003ccategory\u003e\" and \"\u003csubcategory\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "category",
        "subcategory"
      ]
    },
    {
      "cells": [
        "Cellphone \u0026 Accessories",
        "iPhone Accessories"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "Project.user_launches_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.remote.http.ConnectionFailedException: Unable to establish websocket connection to http://localhost:65244/devtools/browser/7ef10ade-5baa-4cfd-a3cd-95456884db2b\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.\u003cinit\u003e(NettyWebSocket.java:102)\r\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.lambda$create$3(NettyWebSocket.java:128)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.openSocket(NettyClient.java:107)\r\n\tat org.openqa.selenium.devtools.Connection.\u003cinit\u003e(Connection.java:78)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.lambda$new$2(ChromiumDriver.java:116)\r\n\tat java.util.Optional.map(Unknown Source)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:114)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:82)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:50)\r\n\tat org.utilities.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.execution.Project.user_launches_application(Project.java:24)\r\n\tat ✽.User launches application(file:src/test/resources/Feature/SearchEg.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Project.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees home page",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_sees_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To verify the search using category and subcategory navigation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User click the category \"Cellphone \u0026 Accessories\"",
  "keyword": "When "
});
formatter.match({
  "location": "Project.user_click_the_category(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the sub-category \"iPhone Accessories\"",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_click_the_sub_category(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees results based on \"Cellphone \u0026 Accessories\" and \"iPhone Accessories\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Project.user_sees_results_based_on_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
});