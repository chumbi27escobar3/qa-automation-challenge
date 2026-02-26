<h1>QA Automation Challenge</h1>

<p>
This repository contains an automated testing solution built with Cypress.
It includes both Web End-to-End testing and API testing following clean architecture principles.
</p>

<h2>Overview</h2>

<ul>
  <li>Web E2E automation against SauceDemo</li>
  <li>API automation against Swagger PetStore (User CRUD)</li>
  <li>Page Object Model (POM) architecture</li>
  <li>Test data management using fixtures</li>
  <li>Dynamic data handling for API isolation</li>
  <li>Mochawesome reporting</li>
</ul>

<h2>Technology Stack</h2>

<ul>
  <li>Cypress</li>
  <li>JavaScript (ES6+)</li>
  <li>Mochawesome Reporter</li>
  <li>Node.js</li>
</ul>

<h2>Prerequisites</h2>

<p>Ensure the following tools are installed:</p>

<ul>
  <li>Node.js (v18 or higher recommended)</li>
  <li>npm</li>
</ul>

<p>Verify installation:</p>

<pre><code>node -v
npm -v
</code></pre>

<h2>Installation</h2>

<h3>1. Clone the repository</h3>

<pre><code>git clone &lt;repository-url&gt;
cd qa-automation-challenge
</code></pre>

<h3>2. Install dependencies</h3>

<pre><code>npm install
</code></pre>

This installs Cypress and all required testing dependencies.

<h2>Project Structure</h2>

<pre><code>cypress/
  e2e/
    web/
      saucedemo/
        login.cy.js
        add_to_cart.cy.js
        saucedemo_checkout.cy.js
    api/
      petstore/
        petstore_users.cy.js
  pages/
    LoginPage.js
    InventoryPage.js
    CartPage.js
    CheckoutPage.js
  fixtures/
    saucedemo.json
  support/
    e2e.js
cypress.config.js
package.json
</code></pre>

<p>
The project follows a modular structure separating Web and API tests, 
with reusable Page Objects for maintainability.
</p>

<h2>Configuration</h2>

<ul>
  <li>Web base URL configured in <code>cypress.config.js</code></li>
  <li>PetStore API base URL configured using environment variables</li>
  <li>Mochawesome configured to generate JSON and HTML reports</li>
</ul>

<h2>Running Tests</h2>

<h3>Run all tests (Headless mode)</h3>

<pre><code>npx cypress run
</code></pre>

This executes:
<ul>
  <li>All Web E2E test cases</li>
  <li>All API test cases</li>
</ul>

<h3>Run in Interactive Mode</h3>

<pre><code>npx cypress open
</code></pre>

Steps:
<ol>
  <li>Select "E2E Testing"</li>
  <li>Select browser</li>
  <li>Run desired spec</li>
</ol>

<h3>Run specific test groups</h3>

<p>Web only:</p>

<pre><code>npx cypress run --spec "cypress/e2e/web/**/*.cy.js"
</code></pre>

<p>API only:</p>

<pre><code>npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
</code></pre>

<h2>Test Coverage</h2>

<h3>Web Automation – SauceDemo</h3>

<ul>
  <li>User login validation</li>
  <li>Add multiple products to cart</li>
  <li>Cart badge verification</li>
  <li>Complete checkout flow</li>
  <li>Order confirmation validation</li>
</ul>

<h3>API Automation – PetStore</h3>

<ul>
  <li>Create user (POST)</li>
  <li>Retrieve user (GET)</li>
  <li>Update user (PUT)</li>
  <li>Delete user (DELETE)</li>
  <li>Negative validation (404 after deletion)</li>
</ul>

<h2>Reporting</h2>

<p>
After execution, Mochawesome generates test reports under:
</p>

<pre><code>cypress/reports/
</code></pre>

<p>
Each execution generates:
</p>

<ul>
  <li>JSON result files per spec</li>
  <li>HTML report files for execution review</li>
</ul>

<p>
To view results:
</p>

<ol>
  <li>Navigate to <code>cypress/reports/</code></li>
  <li>Open any <code>.html</code> report in your browser</li>
</ol>

<h2>Design Decisions</h2>

<ul>
  <li>Page Object Model implemented to ensure scalability and maintainability</li>
  <li>Fixtures used for stable and reusable Web test data</li>
  <li>Dynamic test data generation in API tests to avoid collisions</li>
  <li>Separation of Web and API test layers</li>
  <li>Clear execution instructions for reproducibility</li>
</ul>

<h2>Execution Example</h2>

<pre><code>npx cypress run
</code></pre>

Expected result:
<ul>
  <li>All Web and API specs passing</li>
  <li>Execution summary in terminal</li>
  <li>HTML report generated</li>
</ul>
