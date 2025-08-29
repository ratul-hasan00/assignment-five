<!-- Q/A One  -->
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: The difference between getElementById, getElementsByClassName -

     *getElementById - It finds out HTML element with his "id" attribute and gives us only one element as an output.

     *getElementsByClassName - It finds out HTML element with his specific "class" name and gives us HTML collection like an array as an output.

    The difference between querySelector, querySelectorAll -

    *querySelector - It finds out matching element using css selector and gives us only one element as an output.By using css selector it only gives us the first element.

    *querySelectorAll - It also finds out matching element using css selector and gives us the elements as an output but it is different from querySelector. querySelectorAll gives us all matching elements using css selector and finding class name .Gives us the elements collection as an output like an array.

<!-- Q/A Two  -->
2.How do you create and insert a new element into the DOM?

ans: To create a new element in DOM we use "document.createElement()" . Inside the bracket we put a tag name.
     To insert a new element we use "appendChild()". Inside the bracket we put the parent div class ,id name.

<!-- Q/A Three  -->
3.What is Event Bubbling and how does it work?
ans: With the DOM element, if any event("click") occurs and we click the element-(button,h1,p) whom we targeted using addEventListener it shows us or goes up the upper elements,like child div whom we targeted ,then parent div ,then grandparent div ,step by step it it goes up to his parent element.This whole process is called Event Bubbling.

<!-- Q/A Four  -->
4.What is Event Delegation in JavaScript? Why is it useful?

ans: Event Delegation is a technique where we put an eventListener to the parent element and manage the child elements. Event Delegation is useful in many ways . Such as- it saves our time, shorten our code , to add a child element we can easily add it using event delegation through parent element etc.

<!-- Q/A Five  -->
5.What is the difference between preventDefault() and stopPropagation() methods?

ans: The difference between preventDefault() and stopPropagation() methods-
        *preventDefault() - It stops event default behavior inside the browser,if we add an anchor link to a browser and add facebook link inside the anchor tag and and use event click to go facebook clicking anchor it will go to the facebook link .But if we use preventDefault() and then we click the anchor it will not access the link and will show us alert.

        *stopPropagation() - It stops event bubble capturing. normally if we click child element it shows us not only child but also parent ,grandparent elements .But if we use stopPropagation() it stops bubbling and not go anywhere upper than child element.Shows us only the child element.
