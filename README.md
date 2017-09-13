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
<li>In your component template add the following block:</li>
<i>
<p>
&lt;div style="padding:0;overflow-y: scroll;" 
    ng4AutoAdjustableScrollingDiv 
    [defaultHeight]="the default height of the div (by default it is window.innerHeight)" 
    [offSet]="the number of pixles to be deducted from defaultHeight (default offSet is 200)"&gt;&lt;/div&gt;
</p>
</i><br/>
</u>
<h2>How To Build Module</h2>
In order to build this code just browse to the directory where you've saved it and run "npm run build"

