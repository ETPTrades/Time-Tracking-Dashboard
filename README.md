# Time Tracking Dashboard

![Design preview for the Time tracking dashboard coding challenge](./images/Screenshot%202026-11-17%20at%205.49.47 PM%20copy.png)

## The Challenge

This project was designed to test my responsive web design skills, as well as practicing, populating the user interface dynamically with data from the provided JSON file. Once completed, the end users of this application should be able to:

- view the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

# Project Description

- The time tracking dashboard should be able to display the appropriate data depending on which timeframe the user clicks. Each container consists of a different category, such as work, play,study,etc...If, for example a user were to click on the weekly button, each container would display the current hours for that week, and for that specific category, as well as the hours from the past week. The same goes for the monthly button; the data would show the appropriate current hours for that month, as well as the total hours for the previous month.

## AI Coding Assistants

For this project I decided to go about it free-hand; building each element and feature myself from the ground up. The only AI assisstance that was used was the built-in chat bot in VSCode to help me find answers to my questions when I hit a roadblock. I went about using this tool as more of an assisstant, validating my thought process on a specific problem, or simply guiding me to the answer, without taking me all the way. By using this approach I was able to learn a great deal while still finishing the work in a timely manner.

## Building the Project

_Workflow:_

1: Initialize the Project Repo - Before I did anything I initialized my project to a local repo so that down the line, I'm already set up to push my progress to my remote repo

2: Study the Design - This is where I take a few minutes to look over the design files; the mobile, tablet, and desktop designs to get an idea of how I would approach putting it all together from top to bottom. Often times, the layout changes depending on which screen size the user is viewing the app on, and when that happens it can appear like the HTML structure has shifted order. In cases like this I really do like to keep the structure the same, and just use CSS Grid to place items elswhere if need be.

3: Fonts, Colors, Variables - I would consider downloading fonts and creating variables for my colors part of the structure of the web page, so I'm always sure to visit [Google Webfonts Helper](https://gwfh.mranftl.com/fonts) to download the appropriate fonts, as well as font weights, and import those files into my project folder. When it comes to colors, creating color variables makes it easier to apply those colors to specific elements instead of giving them an HSL, hex, or RGB value every single time you need to style them.

4: The HTML Structure - The next step is simply to create the structure of the webpage. This means gettin all of the elements, containers, and images in the proper order, or flow that follows the design as closely as possible. This is the barebones stage; no styling, no colors, just the page skeleton(using the downloaded fonts).

5: Mobile First Approach - Now that all of the HTML is on the page, the colors and fonts have been created and imported, it's finally time to start putting it together. I prefer to use the mobile-first approach simply because the majority of people prefer to browse the web and use apps directly from their mobile devices. Therefore I make it a point to give the mobile layout priority over the rest.

6: Style - Now, we begin adding styles and layout modes to properly place all of the elements, such as CSS Grid and Flex-Box. We start adding colors, spacing, and sub-layouts if necessary to really bring the webpage to life.

7: Responsiveness / Media Queries - Once the mobile layout is looking like the design, it's time to incorporate the responsiveness so that elements grow and shrink appropriately without any overflow, or unexpected behavior; this includes the fonts as well. After that, we move on to the media queries. This is where I apply different layout rules to change the design to a more optimal layout for larget screen sizes such as tablet and desktop. More often than not I'm using CSS Grid in this step. I choose to use Grid because if the order of elements on the page change at wider screen widths, I can re-arrange the elements without actually having to modify the HTML structure itself.

## Deploying the Project

For these practice projects I prefer to use GitHub Pages for its simplicity. Feel free to check it out here! - [GitHub Pages](https://pages.github.com/)
