$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/Quandoo/Assignment/LoginHoverSorting/Test.feature");
formatter.feature({
  "line": 1,
  "name": "Quandoo Assignment",
  "description": "\r\nIn order to showcase the skills\r\nthe automation assignment is being done",
  "id": "quandoo-assignment",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Login Success",
  "description": "",
  "id": "quandoo-assignment;login-success",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I navigated to \"LoginPage\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter \"loginusername\" as \"tomsmith\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"loginpassword\" as \"SuperSecretPassword!\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify \"message\" contains \"You logged into a secure area!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LoginPage",
      "offset": 16
    },
    {
      "val": "Mozilla",
      "offset": 31
    }
  ],
  "location": "Stepdefinition.i_navigated_to_on(String,String)"
});
formatter.result({
  "duration": 18347996785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "tomsmith",
      "offset": 28
    }
  ],
  "location": "Stepdefinition.i_enter_as(String,String)"
});
formatter.result({
  "duration": 52805201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 28
    }
  ],
  "location": "Stepdefinition.i_enter_as(String,String)"
});
formatter.result({
  "duration": 31920449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "Stepdefinition.i_click_on(String)"
});
formatter.result({
  "duration": 1213253849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message",
      "offset": 8
    },
    {
      "val": "You logged into a secure area!",
      "offset": 27
    }
  ],
  "location": "Stepdefinition.Verify_contains(String,String)"
});
formatter.result({
  "duration": 32075070,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login failure 1",
  "description": "",
  "id": "quandoo-assignment;login-failure-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I navigated to \"LoginPage\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter \"loginusername\" as \"anything\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"loginpassword\" as \"SuperSecretPassword!\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify \"message\" contains \"Your username is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LoginPage",
      "offset": 16
    },
    {
      "val": "Mozilla",
      "offset": 31
    }
  ],
  "location": "Stepdefinition.i_navigated_to_on(String,String)"
});
formatter.result({
  "duration": 705993599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "anything",
      "offset": 28
    }
  ],
  "location": "Stepdefinition.i_enter_as(String,String)"
});
formatter.result({
  "duration": 96204788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 28
    }
  ],
  "location": "Stepdefinition.i_enter_as(String,String)"
});
formatter.result({
  "duration": 50343667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "Stepdefinition.i_click_on(String)"
});
formatter.result({
  "duration": 1098535041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message",
      "offset": 8
    },
    {
      "val": "Your username is invalid!",
      "offset": 27
    }
  ],
  "location": "Stepdefinition.Verify_contains(String,String)"
});
formatter.result({
  "duration": 54666121,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login failure 2",
  "description": "",
  "id": "quandoo-assignment;login-failure-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I navigated to \"LoginPage\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter \"loginusername\" as \"tomsmith\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter \"loginpassword\" as \"anything\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify \"message\" contains \"Your password is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LoginPage",
      "offset": 16
    },
    {
      "val": "Mozilla",
      "offset": 31
    }
  ],
  "location": "Stepdefinition.i_navigated_to_on(String,String)"
});
formatter.result({
  "duration": 568697961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "tomsmith",
      "offset": 28
    }
  ],
  "location": "Stepdefinition.i_enter_as(String,String)"
});
formatter.result({
  "duration": 39646385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "anything",
      "offset": 28
    }
  ],
  "location": "Stepdefinition.i_enter_as(String,String)"
});
formatter.result({
  "duration": 18933029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "Stepdefinition.i_click_on(String)"
});
formatter.result({
  "duration": 1049332432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message",
      "offset": 8
    },
    {
      "val": "Your password is invalid!",
      "offset": 27
    }
  ],
  "location": "Stepdefinition.Verify_contains(String,String)"
});
formatter.result({
  "duration": 38161441,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Hovers",
  "description": "",
  "id": "quandoo-assignment;hovers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I navigated to \"HoverPage\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I Hover over \"\u003cImage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Text \"\u003cUsername\u003e\" should be present",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "quandoo-assignment;hovers;",
  "rows": [
    {
      "cells": [
        "Image",
        "Username"
      ],
      "line": 37,
      "id": "quandoo-assignment;hovers;;1"
    },
    {
      "cells": [
        "Image1",
        "user1"
      ],
      "line": 38,
      "id": "quandoo-assignment;hovers;;2"
    },
    {
      "cells": [
        "Image2",
        "user2"
      ],
      "line": 39,
      "id": "quandoo-assignment;hovers;;3"
    },
    {
      "cells": [
        "Image3",
        "user3"
      ],
      "line": 40,
      "id": "quandoo-assignment;hovers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Hovers",
  "description": "",
  "id": "quandoo-assignment;hovers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I navigated to \"HoverPage\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I Hover over \"Image1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Text \"user1\" should be present",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HoverPage",
      "offset": 16
    },
    {
      "val": "Mozilla",
      "offset": 31
    }
  ],
  "location": "Stepdefinition.i_navigated_to_on(String,String)"
});
formatter.result({
  "duration": 993426426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image1",
      "offset": 14
    }
  ],
  "location": "Stepdefinition.i_Hover_over(String)"
});
formatter.result({
  "duration": 190487392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 6
    }
  ],
  "location": "Stepdefinition.text_should_be_present(String)"
});
formatter.result({
  "duration": 31575470,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Hovers",
  "description": "",
  "id": "quandoo-assignment;hovers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I navigated to \"HoverPage\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I Hover over \"Image2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Text \"user2\" should be present",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HoverPage",
      "offset": 16
    },
    {
      "val": "Mozilla",
      "offset": 31
    }
  ],
  "location": "Stepdefinition.i_navigated_to_on(String,String)"
});
formatter.result({
  "duration": 946438834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image2",
      "offset": 14
    }
  ],
  "location": "Stepdefinition.i_Hover_over(String)"
});
formatter.result({
  "duration": 167222791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 6
    }
  ],
  "location": "Stepdefinition.text_should_be_present(String)"
});
formatter.result({
  "duration": 24505214,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Hovers",
  "description": "",
  "id": "quandoo-assignment;hovers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I navigated to \"HoverPage\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I Hover over \"Image3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Text \"user3\" should be present",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HoverPage",
      "offset": 16
    },
    {
      "val": "Mozilla",
      "offset": 31
    }
  ],
  "location": "Stepdefinition.i_navigated_to_on(String,String)"
});
formatter.result({
  "duration": 695971325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image3",
      "offset": 14
    }
  ],
  "location": "Stepdefinition.i_Hover_over(String)"
});
formatter.result({
  "duration": 156043049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 6
    }
  ],
  "location": "Stepdefinition.text_should_be_present(String)"
});
formatter.result({
  "duration": 16766514,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Sortable data table",
  "description": "",
  "id": "quandoo-assignment;sortable-data-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I navigated to \"DataTables\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I click on \"lastName\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Verify the lastname are sorted in ascending order.",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I click on \"lastName\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify the lastname are sorted in descending order.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DataTables",
      "offset": 16
    },
    {
      "val": "Mozilla",
      "offset": 32
    }
  ],
  "location": "Stepdefinition.i_navigated_to_on(String,String)"
});
formatter.result({
  "duration": 1086930820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 12
    }
  ],
  "location": "Stepdefinition.i_click_on(String)"
});
formatter.result({
  "duration": 235734041,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.Verify_the_lastname_are_sorted_in_ascending_order()"
});
formatter.result({
  "duration": 50143827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 12
    }
  ],
  "location": "Stepdefinition.i_click_on(String)"
});
formatter.result({
  "duration": 232631778,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.Verify_the_lastname_are_sorted_in_descending_order()"
});
formatter.result({
  "duration": 847937708,
  "status": "passed"
});
});