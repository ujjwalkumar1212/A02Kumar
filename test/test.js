// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

// QUnit.test("Here's a test that should always pass", function (assert) {
//     assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
// });

QUnit.test('Testing Valid Coupon function with several sets of inputs for Invalid Sceanrios', function (assert) {
    assert.equal(validateCoupon("abcd"),false, 'Check for invalid string');
    assert.equal(validateCoupon("abcd123"),false, 'Check for invalid string');
    assert.equal(validateCoupon("123abc"),false, 'Check for invalid string');
    
});

QUnit.test('Testing Valid Coupon function with several sets of inputs for Valid Sceanrios', function (assert) {
    assert.equal(validateCoupon("first user"),true, 'Check for valid string');
    assert.equal(validateCoupon("FIRST USER"),true, 'Check for valid string');
    assert.equal(validateCoupon("First User"),true, 'Check for valid string');
    assert.equal(validateCoupon("FIRST user"),true, 'Check for valid string');
    assert.equal(validateCoupon("first USER"),true, 'Check for valid string');
});


QUnit.test('Testing Valid Coupon function with several sets of inputs for Exception Sceanrios', function (assert) {
    assert.throws(function(){ return validateCoupon(5);}, 'Check for positive number');
    assert.throws(function(){ return validateCoupon(-125);}, 'Check for negative number');
    assert.throws(function(){ return validateCoupon(0);}, 'Check for zero number');
    assert.throws(function(){ return validateCoupon(null);}, 'Check for null string');
    assert.throws(function(){ return validateCoupon(undefined);}, 'Check for undefined string');
    assert.throws(function(){ return validateCoupon("");}, 'Check for empty string');
    assert.throws(function(){ return validateCoupon([]);}, 'Check for array string');
    assert.throws(function(){ return validateCoupon({});}, 'Check for object string');
});

