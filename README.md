<h1>ng4-auto-adjustable-scrolling-div</h1>

This is an angular 4 module that allows for adding a auto adjustable and scrolling div on an existing angular 4 app.

<h2>How To Use Module</h2>
<u>
<li>You need to add a dependency in your package.json to "ng4-auto-adjustable-scrolling-div"</li>
<li>In your app module add Ng4AutoAdjustableScrollingDivModule to the imports:[]</li> 
<li>add an import in your app module
<ul> 
<li>import { Ng4AutoAdjustableScrollingDivModule } from 'ng4-auto-adjustable-scrolling-div';</li>
</ul>
</li>
<li>In your component template add the following directive to your div:</li>
<i>
<p>
&lt;div 
    ng4AutoAdjustableScrollingDiv 
    [defaultHeight]="the default height of the div (by default it is window.innerHeight)" 
    [topPadding]="the top padding for the div content (default value is 0)" 
    [leftPadding]="the left padding for the div content (default value is 0)" 
    [rightPadding]="the right padding for the div content (default value is 0)" 
    [bottomPadding]="the bottom padding for the div content (default value is 0)" 
    [offSet]="this is the offSet from the bottom of the page (default offSet is 200)"&gt;&lt;/div&gt;
<br/>
Example:<br/>
&lt;div 
    ng4AutoAdjustableScrollingDiv 
    [defaultHeight]="600" 
    [topPadding]="10" 
    [leftPadding]="15" 
    [rightPadding]="15" 
    [bottomPadding]="10" 
    [offSet]="120"&gt;&lt;/div&gt;
</p>
</i><br/>
</u>
<h2>How To Build Module</h2>
In order to build this code just browse to the directory where you've saved it and run "npm run build"

