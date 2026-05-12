# Assignment Part 1: Development Overview

## 1. Introduction

This project is a responsive food delivery website called Extra Foodies. The purpose of the project was to design and develop a complete front-end website using only HTML, CSS, and JavaScript. No frameworks or external component libraries were used, which keeps the project easy to understand and suitable for a student-level assignment. The website represents a food delivery business and includes the main pages a customer would expect, such as Home, About, Menu, Gallery, and Contact.

The development approach focused on building a clean layout, readable content, and simple interactivity. The site includes a navigation bar, hero section, feature cards, menu items, review slider, contact form, and FAQ accordion. The final result is responsive across desktop, tablet, and mobile screen sizes, and the styling was intentionally kept simple after removing advanced visual effects. This helps the project look realistic for an information technology student while still demonstrating useful front-end skills.

**[Insert Screenshot 1: Homepage desktop view here]**

The main design idea was to keep the interface practical rather than overly decorative. That means the page uses simple colors, borders, spacing, and basic card layouts instead of advanced animation or heavily polished styling. This was important because the assignment required a student-appropriate solution. Even though the design is simple, it still shows core development knowledge such as responsive layout, reusable components, and interactive JavaScript behavior.

## 2. Issues Encountered and Fixes

### 2.1 Navigation Menu Issue

One of the first issues was the navigation menu on small screens. On desktop, the links fit in one row, but on mobile screens the menu was too wide and not easy to use. If the navigation was left unchanged, the user would have to zoom or scroll to access links properly. That would have reduced usability and made the site feel unfinished.

The fix was to use a toggle-based navigation menu. On smaller screens, the navigation links are hidden by default and shown only when the user clicks the menu button. JavaScript adds and removes a `show` class on the menu container, and the `aria-expanded` attribute is updated so the button state remains accessible. When the screen becomes wider again, the menu closes automatically. This is a good example of combining HTML structure, CSS visibility control, and JavaScript interaction in a simple but effective way.

From a concept point of view, this issue shows the importance of progressive usability. A website should not just look good on one screen size; it should also adapt to the context in which the user opens it. A menu is one of the most important elements in navigation, so it had to work cleanly on both large and small devices.

**[Insert Screenshot 2: Mobile navigation menu open here]**

### 2.2 Responsive Layout Problems

Another issue was the layout across different screen widths. Some sections looked balanced on desktop but became cramped on tablets or narrow on mobile. This happened because a fixed layout does not automatically adjust to the available screen space. For example, if all cards stay in one row, the content becomes too small. If the layout is too loose, it can leave empty areas that make the page look unfinished.

To solve this, I used a flexible grid system and responsive media queries. The site uses rows and columns that stack or split depending on the screen width. On large screens, sections can appear side by side. On tablets, they reduce to fewer columns. On mobile screens, the content mostly stacks into one column for readability. This is a core responsive design technique because it allows the same HTML structure to behave differently without needing separate pages.

The deeper concept here is that responsive design is not only about visual resizing. It is about preserving hierarchy, readability, and user flow. The most important information should still be visible, and the page should not force the user to fight the layout. In this project, cards, headings, and buttons were spaced so the content stays readable even when the screen size changes.

**[Insert Screenshot 3: Tablet responsive layout here]**

### 2.3 Image Scaling Issue

Images caused another common front-end issue. Some images were originally too large or did not fit neatly inside their containers. On smaller screens, this can cause distortion, layout overflow, or images that take up too much space. Food websites rely heavily on images, so handling them correctly was necessary.

The fix used standard image scaling techniques: `max-width: 100%`, `height: auto`, and `object-fit: cover`. These properties ensure that images stay inside their containers and preserve their proportions. In the menu cards and gallery slider, images were given a consistent size and then cropped cleanly using `object-fit: cover`. That keeps the layout consistent even when images have different aspect ratios.

This issue is important because image handling affects both design and performance. Large or unscaled images can slow down a page and make it difficult to maintain a neat layout. Using proper scaling also prevents visual jumps during page load and makes the website more professional without adding unnecessary complexity.

**[Insert Screenshot 4: Menu cards with scaled images here]**

### 2.4 JavaScript Slider Functionality

The slider was another area where implementation needed adjustment. At first, the slider logic was more advanced than necessary and used movement-based behavior that made the code harder to follow. For a student assignment, it was better to keep the solution readable and easy to explain.

I simplified the slider so that it shows one slide at a time. JavaScript now tracks the current slide index and updates which slide is visible when the user clicks the previous button, next button, or one of the dots. The slider also marks the current dot as active. This makes the functionality clear and easy to maintain.

The concept behind this feature is state management. The script keeps track of one important value: the current slide number. Whenever the user interacts with the controls, that state changes and the display is updated. This is a simple example of how JavaScript can manage interface state without any framework. It also shows that interactive features do not need to be complicated to be useful.

**[Insert Screenshot 5: Slider with navigation dots here]**

### 2.5 Form Validation Errors

The contact form needed validation so the user could not submit blank or invalid data. Without validation, the form would accept mistakes such as an empty name field, an email address without an `@`, or a message that is too short. That would reduce trust and allow poor-quality submissions.

To fix this, I added JavaScript validation for each required field. The script checks the full name, email address, subject, and message. The email uses a simple regular expression pattern to verify that it follows a basic format. The message must be at least 10 characters long, which helps prevent useless submissions. If a field fails validation, the code adds an invalid state and shows a message beside the relevant field.

The deeper concept here is user feedback. Good validation should not only block incorrect data, but also help the user understand what went wrong. That is why the form displays clear messages such as entering a valid email or writing a longer message. When the form is valid, it resets and shows a success message. This makes the interaction feel complete even though the form is not connected to a backend server.

**[Insert Screenshot 6: Contact form with validation message here]**

## 3. Testing and Responsiveness

### 3.1 Desktop Testing

Desktop testing was used to confirm that the website works properly on larger screens. On desktop, the navigation is displayed horizontally, the content sections have enough room, and the card-based layouts appear in columns. This is important because desktop users typically expect strong alignment and easy scanning of content.

During testing, I checked whether the hero section, menu cards, footer, slider, and contact page maintained consistent spacing. I also confirmed that the header remains fixed and the navigation looks stable while scrolling. Desktop testing is useful because it shows whether the design feels complete when the browser has enough width to display all major elements.

**[Insert Screenshot 7: Desktop homepage final view here]**

### 3.2 Tablet Testing

Tablet testing was important because tablets sit between desktop and mobile in terms of available space. A good responsive website should not only work in extreme sizes but also in this middle range. On tablets, the columns should reduce neatly, text should remain readable, and buttons should stay large enough to tap.

I tested how the layout behaves when the width becomes smaller than a desktop but larger than a phone. The responsive CSS rules helped the cards, menus, and sections adapt without breaking. Some areas move from three columns to two columns, and others stack vertically. This keeps the page balanced and reduces the chance of crowded content.

**[Insert Screenshot 8: Tablet menu or about page here]**

### 3.3 Mobile Testing

Mobile testing is especially important because the majority of usability problems show up on small screens. On mobile, the navigation must collapse properly, images must resize, and the layout must avoid horizontal scrolling. Buttons should also remain easy to tap with a thumb.

The mobile version of the site was checked to ensure the hamburger menu works, the page hero still reads clearly, and the cards stack into one column where required. The slider controls were also checked to ensure they remain visible and usable. This testing confirmed that the site is practical on a small device and does not depend only on desktop presentation.

**[Insert Screenshot 9: Mobile homepage or contact page here]**

### 3.4 Cross-Browser Testing

Cross-browser testing was done to make sure the website behaves consistently in standard browsers that support modern HTML, CSS, and JavaScript. Because the project uses plain front-end technologies, compatibility should be strong across modern environments.

The main things checked during this stage were layout consistency, button styling, navigation behavior, form validation, and slider interaction. A cross-browser check is important because different browsers can sometimes interpret spacing, fonts, or default form styles differently. By using straightforward CSS and vanilla JavaScript, the site remains relatively stable and easy to maintain.

## 4. JavaScript Interactive Features

### 4.1 Navigation Toggle

The navigation toggle is one of the main JavaScript features in the project. It allows the menu to open and close on smaller screens. When the button is clicked, the code toggles the menu visibility and updates the button state. When a navigation link is clicked, the menu closes automatically. This makes the mobile experience smoother and prevents the menu from staying open unnecessarily.

From a technical angle, this feature demonstrates DOM selection, class manipulation, and simple event handling. It is a strong example of how JavaScript can control page state without requiring external libraries. It also improves accessibility by keeping the menu state synchronized with the `aria-expanded` attribute.

**[Insert Screenshot 10: Navigation toggle button open state here]**

### 4.2 Image Slider

The image slider is an interactive section that gives the page more engagement. The JavaScript code selects the slides, previous button, next button, and dot controls. It then stores a current index and uses it to decide which slide should be visible. Only one slide is shown at a time, which keeps the interface simple and easy to understand.

The dot buttons are created dynamically in JavaScript based on how many slides exist. That means the slider does not need hard-coded controls for each image. This is a useful concept because it makes the code more reusable. If another slide is added later, the dots are generated automatically. The slider is therefore a good example of data-driven UI logic.

**[Insert Screenshot 11: Slider dots and active slide here]**

### 4.3 Form Validation

The contact form validation is based on a clear sequence of checks. First, the script gathers the current values from the form fields. Then it checks whether the name exists, whether the email matches the expected pattern, whether a subject has been selected, and whether the message is long enough. If there is a problem, the code highlights the field and shows a short explanation.

This feature is valuable because it reduces errors before a form submission attempt. It also shows how front-end validation can improve the quality of data even without a server-side system. In a full application, these checks would normally be repeated on the server, but for this assignment the front-end validation is enough to demonstrate the concept.

**[Insert Screenshot 12: Valid and invalid form states here]**

### 4.4 Accordion / Interactive Components

The FAQ section uses an accordion so that only one answer is open at a time. When the user clicks a question, the script closes any other open panels and then opens the selected one. This keeps the page tidy and helps users focus on one answer at a time.

The accordion is a good example of controlled visibility. The code uses button state, hidden panels, and event listeners to manage how information is shown. It is simple, but it demonstrates a common user interface pattern that appears on many professional websites. In this project, the accordion makes the contact page more useful because users can quickly find answers without reading a long page of text.

**[Insert Screenshot 13: FAQ accordion open state here]**

## 5. CSS and JavaScript Concepts Used

The CSS in this project focuses on layout, spacing, color, and consistency. Important concepts include the box model, flexbox, grid, responsive breakpoints, and reusable utility classes. The box model is visible in the way cards, buttons, and panels use padding, borders, and margins. Flexbox is used for navigation, footer alignment, and item placement. Grid is used for the hero stats and responsive card layouts. Media queries allow the site to adjust for different screen sizes, which is the core of responsive design.

The JavaScript focuses on DOM interaction, event listeners, conditional logic, and form handling. The navigation toggle demonstrates how to change classes based on user input. The slider shows how to maintain and update state. The form validation demonstrates how to inspect values, apply patterns, and give feedback. The accordion shows how to manage several related components so only the correct panel stays open.

This combination of CSS and JavaScript is important because it shows how structure, presentation, and behavior work together. HTML provides the content, CSS shapes the layout, and JavaScript adds interaction. Keeping the code simple also makes it easier to explain in an assignment setting.

## Conclusion

This project demonstrates how a clean and responsive food delivery website can be built using only basic web technologies. It shows problem solving in layout design, image handling, navigation behavior, form validation, and interactive components. The final website is simple enough to look like a student project, but it still contains enough structure and interactivity to show real development effort.

The report also shows that good front-end development is not only about making a site look attractive. It is also about making the site usable, responsive, and understandable. By keeping the design clean and removing advanced effects, the project became more suitable for an academic submission while still maintaining good functionality.