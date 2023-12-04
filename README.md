# Webtrends Optimize Software Engineer exam

## Background
For this role, we are looking to hire a software engineer. This engineer will work across a wide range of technologies, but primarily developing our user interface which is built using React/SCSS for the UI, and an Express JS app built on Node for the server.

In as simple a way as possible, we wish to evaluate your ability to grasp the fundamentals of Node/React applications. We have developed this exam on the belief that modifying an existing application will be simpler than constructing a new application from scratch, and that with specific changes requested, we will be able to assess the quality of your work. 

You should download and run the application provided, and then conduct the exam where you look to modify the application in the manner requested.

For an experienced developer, we do not expect this to take more than 5 minutes of your time, which we hope is a fair investment in our potential working together. For a junior developer with React experience, we feel 15-20 minutes should be adequate.

## Expected Deliverable/s

Please fork this repository, apply your changes as per the task below, and send back your updated repository.

## The task

### 1. Dynamically creating elements 
In app.js, you’ll find a block of field data.

Inside the empty `<form>` tag, dynamically create form elements with:

- A label using the label field provided 
- A type using the type provided 
- When the label is clicked on, it should draw focus to the form field. 

### 2. Components 
This will assess your ability to create data-driven components. 

- Create a component in /src/components called “new”. 
- It should output a simple span, with the text content as the prop “text” 
- Write this component into app.js, after the form. Pass in the value of “hello” for the property name “text” to it. We expect the value to cascade into the child component.

### 3. State Management 
This will assess your ability to set state on the element you’ve created.

- When you click this newly-created Span element, you should update the text from “hello” to “world”. 
- You must achieve this with states. You get to decide where to hold the states.

