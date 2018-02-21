// jest-allure-reporter - testsuite.js
class Testsuite {
    constructor(testSuiteResults, jsonResults) {
      //required Classes
      const testCase = require('./testcase.js');


      this.testSuiteResults = testSuiteResults;
      this.startTime = testSuiteResults.perfStats.start;
      this.stopTime = testSuiteResults.perfStats.end;
      this.name = testSuiteResults.testFilePath.replace(/\//g, '');
      this.testcases = [];
      this.testSuiteResults.testResults.forEach( testcase => {
        this.testcases.push(new testCase(testcase, jsonResults));
      });

    }

    writeToFileAsAllureInput(){
        const allure = require('./allure.js');
        allure.generateAllureXMLOutput(this);
    }

} 

module.exports = Testsuite;