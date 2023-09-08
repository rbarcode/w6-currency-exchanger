# Currency Exchanger

#### By Richard Barbour II

#### Currency converter using ExchangeRate-API's API to access exchange rates.


## Technologies Used

* HTML
* CSS
* JS
* Node.js (16.13.1)
* npm (8.1.2)
* API for ExchangeRate-API



## Description

This site allows the user to convert a small set of currencies (USD, EUR, GBP, KYD, MNT, TJS) among each other using ExchangeRate-API's Pair Conversion API endpoint. The site also displays a unique error message if the user attempts to convert North Korean Wons, which is unsupported by ExchangeRate-API.

## Setup/Installation Requirements

1. Navigate to https://github.com/rbarcode/w6-currency-exchanger in an internet browser.
2. Click on the green “<> Code” on the far right-hand side of the page's main column.
3. On the “Local” tab of the mini-window that opens underneath the “<>Code” button, copy the HTTPS link in the gray bar to your clipboard.
4. In GitBash (or a terminal shell of your choice), navigate to the directory where you wish to download the project and enter the following prompt (replacing the italicized word with the appropriate link): git clone *url-of-the-repository-copied-in-the-previous-step*
5. Your chosen directory will now contain a folder titled w6-currency-exchanger.
6. Navigate into the folder. This is the project's root directory.
7. Navigate to https://www.exchangerate-api.com/ in an internet browser and sign up for a free API key from ExchangeRate-API by inputting your email and clicking the "Get Free Key" button.
8. After creating a password and account, you'll gain access to your account's dashboard which includes your API key.
9. Activate your account by clicking on the link sent to the email address you provided at sign up. (Note: You will not be able to access the ExchangeRate-API's data with an inactive account.)
10. Create a .env file in the root directory of the project from Step 6 (you can do so by entering the following prompt in your terminal: touch .env) and add your API key to the .env file using the following convention (and replace the square brackets and the text within with your actual API key): API_KEY=[YOUR-API-KEY]
11. After ensuring you have the JavaScript runtime environment Node.js installed on your computer, run the following command from your terminal in the project's root directory: npm install  
12. Node.js' (16.13.1) packet manager, (8.1.2) npm, will fetch the packages listed in the project's package.json file and any dependencies (including webpack, ESLint and Jest) and install all of the source code in a "node_modules" directory which it creates in the project's root directory. The "scripts" key in the package.json file contains the various actions you can perform with the project's files.
13. To build the project in development mode with webpack, run the following command from your terminal in the project's root directory (and webpack will create a new directory called "dist" in your root directory and populate it with a JS file called "bundle.js" and HTML file called "index.html"): npm run build  
14. To build project and then open the webpack development server, which will launch a browser and live re-bundle and reload the project when changes are made to the code in the "src" directory, run the following command from your terminal in the project's root directory: npm run start  
15. To lint all JS files in the "src" directory using ESLint, run the following command from your terminal in the project's root directory: npm run lint  
16. To run tests on the JS files in the "\_\_tests\_\_" directory using Jest, run the following command from your terminal in the project's root directory: npm run test

## Known Bugs

No known bugs.

## License

MIT License

Copyright (c) 2023 Richard Barbour II

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.