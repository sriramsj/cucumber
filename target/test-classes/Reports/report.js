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
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_enter_valid_username_and_password()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email\u0027]\"}\n  (Session info: MicrosoftEdge\u003d111.0.1661.51)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [116e9eaed3d7b92d074b7307456c1991, findElement {using\u003dname, value\u003demail}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 111.0.1661.51, ms:edgeOptions: {debuggerAddress: localhost:60857}, msedge: {msedgedriverVersion: 111.0.1661.54 (9e410ec23a36..., userDataDir: C:\\Users\\srira\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60857/devtoo..., se:cdpVersion: 111.0.1661.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 116e9eaed3d7b92d074b7307456c1991\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat org.utilities.BaseClass.EnterText(BaseClass.java:62)\r\n\tat org.execution.Project.user_enter_valid_username_and_password(Project.java:37)\r\n\tat ✽.User enter valid username and password(file:src/test/resources/Feature/Addtocart.feature:6)\r\n",
  "status": "failed"
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
  "status": "passed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email\u0027]\"}\n  (Session info: MicrosoftEdge\u003d111.0.1661.51)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [2cc577da08aaf02593966ed7e0b251bb, findElement {using\u003dname, value\u003demail}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 111.0.1661.51, ms:edgeOptions: {debuggerAddress: localhost:61668}, msedge: {msedgedriverVersion: 111.0.1661.54 (9e410ec23a36..., userDataDir: C:\\Users\\srira\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61668/devtoo..., se:cdpVersion: 111.0.1661.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2cc577da08aaf02593966ed7e0b251bb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat org.utilities.BaseClass.EnterText(BaseClass.java:62)\r\n\tat org.execution.Project.user_enter_valid_username_and_password(Project.java:37)\r\n\tat ✽.User enter valid username and password(file:src/test/resources/Feature/LoginEg.feature:9)\r\n",
  "status": "failed"
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
  "status": "passed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email\u0027]\"}\n  (Session info: MicrosoftEdge\u003d111.0.1661.51)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [bfb38f7ef6e243eb7db8ec5f005a9af5, findElement {using\u003dname, value\u003demail}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 111.0.1661.51, ms:edgeOptions: {debuggerAddress: localhost:62522}, msedge: {msedgedriverVersion: 111.0.1661.54 (9e410ec23a36..., userDataDir: C:\\Users\\srira\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62522/devtoo..., se:cdpVersion: 111.0.1661.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: bfb38f7ef6e243eb7db8ec5f005a9af5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat org.utilities.BaseClass.EnterText(BaseClass.java:62)\r\n\tat org.execution.Project.user_enter_invalid_username_and_password(Project.java:60)\r\n\tat ✽.User enter invalid username and password(file:src/test/resources/Feature/LoginEg.feature:16)\r\n",
  "status": "failed"
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
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "Project.user_enter_valid_username_and_password()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.name: email\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat org.utilities.BaseClass.EnterText(BaseClass.java:62)\r\n\tat org.execution.Project.user_enter_valid_username_and_password(Project.java:37)\r\n\tat ✽.User enter valid username and password(file:src/test/resources/Feature/SearchEg.feature:6)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: MicrosoftEdge\u003d111.0.1661.51)\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [6ce40abbf7075bfc29975663dbc387d4, findElement {using\u003dxpath, value\u003d//i[@class\u003d\u0027icon-Close\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 111.0.1661.51, ms:edgeOptions: {debuggerAddress: localhost:64409}, msedge: {msedgedriverVersion: 111.0.1661.54 (9e410ec23a36..., userDataDir: C:\\Users\\srira\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64409/devtoo..., se:cdpVersion: 111.0.1661.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 6ce40abbf7075bfc29975663dbc387d4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat org.execution.Project.user_launches_application(Project.java:28)\r\n\tat ✽.User launches application(file:src/test/resources/Feature/SearchEg.feature:5)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: MicrosoftEdge\u003d111.0.1661.51)\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [0d4ab3392925468ba7fd21ae86fa041b, findElement {using\u003dxpath, value\u003d//i[@class\u003d\u0027icon-Close\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 111.0.1661.51, ms:edgeOptions: {debuggerAddress: localhost:64517}, msedge: {msedgedriverVersion: 111.0.1661.54 (9e410ec23a36..., userDataDir: C:\\Users\\srira\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64517/devtoo..., se:cdpVersion: 111.0.1661.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 0d4ab3392925468ba7fd21ae86fa041b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat org.execution.Project.user_launches_application(Project.java:28)\r\n\tat ✽.User launches application(file:src/test/resources/Feature/SearchEg.feature:5)\r\n",
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