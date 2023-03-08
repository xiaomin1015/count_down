# Count_down: a React single page application

## Discription

This web Application is design to provide people with anxiety with helpful tips and ways to seek professional help.

To write things down is a practical way I learnt from a therapist and have been using for years when I get worried. In addiction, the web application provide user with both free hotline information and also ways to book a professional consulting(not acctually implemented) so that they know they don't have to summit that mountain alone.
Hope this application would give people real help when they suffer from anxiety.  

### `Install`

This project uses node and npm, Go check them by: 
npm install; npm run build; npx serve -s build

### `structure`

Although it's a single page application, it have 6 diffrent "views", user can access 5 of them using the navigation, while another page is 'privacy' that can be switched to via button in footer.

In addiction to switching different 'views' via navigation, some views has button that lead user to next 'views'. In this way, the flow of user reading is coherent.

### `Views in this Application`
In `Actionable_tips` view, there is a carousel to show picture with picture slide containing picture, indicator to indicate which picture is showing, left and right arrow to directe into previous and next picture.

In `Count_down page`, user can write down three things that worry them most, Which is one of the main designed feature of this application. The three things will be writed into state of the whole applcation, which means when user switch between diffrent views, the thing he/her written will last untill he/her reload page.

After user just add three things, the input area will dispare and show the message to direct user into next view. 

In `not alone` view, there are three boxes show how many people with similar anxiouty with them corresponds to three aontent thet just wirtten. I used fake data by randomly generated number. This random number are also states of the whole application, and pasted to this view. So that user wouldn't see the number changing when he/her switch from different views. 

And there is a scale animation in the blue massage below the three boxes.

In `professional help` view, there is a local-menu, user can switch from `hotline` and `consulting` components.

hotline component is designed to be a accordion, where user can open and close the detail content for each item.

consulting component is a form, where user can input theie personal contact information so that an therapist will reach to him/her.



### `feature`
<ul>
<li>Self-implemented Two complexity UI</li>
    <ul>
    <li>accordion</li>
    <li>carousel</li>
    </ul>
<li>a loading indicator used in carousel when loading picture </li>
<li>a scale CSS animation used in Not Alone view </li>
<li>adaptive design to implement mobile-friendly UI layouts</li>
<li>validation check for form</li>
<li>semantic HTML design and added ARIA attributes</li>
<li>pass WAVE Evaluation for color contrast</li>
<li>In-line css and External CSS used </li>
</ul>
