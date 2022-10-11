const { isLeapYear } = require("../leap-year");

// https://codingdojo.org/kata/LeapYears/

// User Story:

// As a user, I want to know if a year is a leap year,
// So that I can plan for an extra day on February 29th during those years.

// Acceptance Criteria:

// All years divisible by 400 ARE leap years (so, for example, 2000 was indeed a leap year),
// All years divisible by 100 but not by 400 are NOT leap years (so, for example, 1700, 1800, and 1900 were NOT leap years,
// NOR will 2100 be a leap year),
// All years divisible by 4 but not by 100 ARE leap years (e.g., 2008, 2012, 2016),
// All years not divisible by 4 are NOT leap years (e.g. 2017, 2018, 2019).

describe("Leap years tests", () => {
  it("All years divisible by 400 ARE leap years", () => {
    expect(isLeapYear(400)).toEqual(true);
    expect(isLeapYear(800)).toEqual(true);
    expect(isLeapYear(1200)).toEqual(true);
    expect(isLeapYear(1600)).toEqual(true);
    expect(isLeapYear(2000)).toEqual(true);
  });

  it("All years divisible by 100 but not by 400 are NOT leap years", () => {
    expect(isLeapYear(1700)).toEqual(false);
    expect(isLeapYear(1800)).toEqual(false);
    expect(isLeapYear(1900)).toEqual(false);
    expect(isLeapYear(2100)).toEqual(false);
  });

  it("All years divisible by 4 but not by 100 ARE leap years", () => {
    expect(isLeapYear(4)).toEqual(true);
    expect(isLeapYear(8)).toEqual(true);
    expect(isLeapYear(12)).toEqual(true);
    expect(isLeapYear(20)).toEqual(true);
    expect(isLeapYear(100)).toEqual(false);
    expect(isLeapYear(200)).toEqual(false);
  });

  it("All years not divisible by 4 are NOT leap years", () => {
    expect(isLeapYear(16)).toEqual(true);
    expect(isLeapYear(17)).toEqual(false);
    expect(isLeapYear(18)).toEqual(false);
    expect(isLeapYear(19)).toEqual(false);
  });

  it("Returns false if given a negative number", () => {
    expect(isLeapYear(-4)).toEqual(false);
    expect(isLeapYear(-8)).toEqual(false);
    expect(isLeapYear(-12)).toEqual(false);
    expect(isLeapYear(-13)).toEqual(false);
    expect(isLeapYear(-14)).toEqual(false);
    expect(isLeapYear(-15)).toEqual(false);
  });
});
