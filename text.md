ThemeBot 
A fully configurable theming application for any CSS framework 

How does it work? 
ThemeBot allow you to easily create a user-friendly theming application that 
allows your users to customize the theme of any CSS framework. This opens the
door for bootstrapping new looks within the same framework. Users can count on
your theming app to quickly skin their new projects and hit the ground
running, and the best part is that ThemeBot requires virtually no extra
development time on your part. So you can provide your users with what
they want, without having to re-invent the wheel.


Why?
Developers interacting with CSS frameworks need a quick way to customize
the look and feel of their new app. ThemeBot provides developers what
they need to quickly implement an application specifically configured to
their frameworks

How?
ThemeBot provides some basic UI controls common among theming
application so users can preview what their theme looks like as they go.
It also provides the necessary CSS parsing to provide valid, minified
and compressed CSS that are production-ready

Features
Color picker - fully customizable
Number spinners - Can't live without them in an app that tweaks pixels
and ems
Slider - thrown in for good measure - can be tied to any numerical input
Draggable colors - Key piece of UI for quick color allocation
Combobox - customized to specific CSS property value-lists or Font
Family lists built by developer or tapped into some free font service

Possibilities
ThemeBot was designed for use with large-scale CSS frameworks. But who
says it has to be built for multiple users? How about just one? Your
client. ThemeBot works great for client work. A couple extra minutes
generating some LESS, and a few lines of JS, and your clients can skin
their own site to their hearts content

Demo
See an example of ThemeBot at work. I'm using the CSS framework Skeleton
applied to a simple blog site. Quickly theme our
demo blog site to get an idea of what ThemeBot can do!

Documentation

Thanks for checking out ThemeBot. Here you'll find a veritable
schmorgesborg of information on what ThemeBot can do and how you can
modify it to do exactly what you want. Nav is on the left to jump ahead.


Parsing

ThemeBot does parsing in very simple way. It looks for a comment within
the CSS, that you specify the syntax of. ThemeBot's default placeholder
marker syntax looks like this:

```css
body p {
  line-height: 1.3em /*{global-body-paragraph}*/;
}
```

===
TIP: make sure that the value of each property is surrounded by
whitespace. ThemeBot will skip over any marker without whitespace
between the colon and the marker.
===

ThemeBot runs the parser when the app is instantiated, and continuously
updates the values of the CSS file. When a [download](#) request is
made, all ThemeBot has to do is serve up the already compiled file.
(Along with a few more [options](#) available for configuration).

Widgets

ThemeBot was made to widgets. Widgets for color, gradients, numbers,
fonts. You name it, ThemeBot has a widget for it. On the off-chance
there's something ThemeBot can't already do, you can roll your own
widgets. Make sure to submit a [pull-request](#) so that everyone else
can enjoy your widgets too.

Widgets boil down to a few basic ingredients.

1. Markup - ThemeBot needs to be able to generate it's widgets' markup on the
   fly. 
2. Behavior - This is where all the widget-ty goodness get's wired up 
3. Write Out - A function that can export the widget's inherit CSS value
   back into the theme file

Here's some source code:

```javascript
ThemeBot.CustomWidget = ThemeBot.Widget.extend({
  template: '<input type="<@- data_type @>" value="<@-value @>">',
  init: function() {
    //custom behavior code goes here
  },
  writeOut: function() {
    return this.value
  }
});
```

Download

ThemeBot's parsing stays up-to-date on all your style changes, so when
the time comes to download there's no extraction of data.

ThemeBot simply passes the entire CSS file to the download process,
which is customizable in the following ways:

1. Compression - Zip file or gZip
2. Minification - Provide any combination of unminified and minified
   versions of the theme
3. Demo file - Provide a default html file to show the user the
   download process worked
   
Example:

```javascript
  // ...somewhere in your ThemeBot Instance Declaration
  downloadOptions: {
    minification: 'both',
    compression: 'gzip',
    demo_path: 'demo.html'
  }
```

