# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  Unhandled promise rejections occur when a promise is rejected, but there's no `.catch()` block to handle the error. This can lead to unexpected application crashes and makes debugging difficult.

## The Problem

The `bug.js` file contains a simple HTTP server. However, it lacks proper error handling for asynchronous operations.  If any part of the request handling fails, the application will crash with an 'Unhandled Promise Rejection' error.

## The Solution

The `bugSolution.js` file shows how to solve this problem by using a `.catch()` block to handle potential errors, ensuring that the application does not crash unexpectedly.  The solution gracefully handles rejections and logs the error message.

## How to run the examples

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` to observe the unhandled promise rejection.
4. Run `node bugSolution.js` to see the improved error handling.