# Lab8_Starter
Name: Nicholas Masumoto

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

    Automated tests should be in a GitHub Action that is run when code is pushed.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    I would not use a unit test to test the message feature of a messaging application because unit tests are not good for testing components that interact with eachother on a feature level, and since the messaging feature would take components of allowing the user to write a message and then to send a message, unit testing would not be the best.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

    I would use a unit test to test the "max message length" feature of a messaging application because a "max message length" would be an individual component of a larger feature of writing out a message. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

    I expect that if we run our Puppeteer tests with the field "headless" set to true, then the tests will be run with a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

    ```
    await page.goto(http://127.0.0.0.1:5500');
    await page.click('img');
    await page.waitForTimeout(500);
    ```
    This will have us go to the main page first, and then it will simulate a click on the img of the page, which would link to the settings page. This will make it so we start from the settings page before running the test.

