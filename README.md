## Objectives

* Be able to display nested views using ui-router
* Be able to implement authorization using ui-router
* Be able to redirect to originally requested url after authorization
* Be able to spin up a basic modal using angular-modal-service and bootstrap

## Create a module and plug in ui-router

Right now, all you've got is a basic Angular app. We haven't even created our first
module yet. Let's do that real quick, this shouldn't be new to you.

```
// in app.js

var app = angular.module('not-angry-angular', [])

```

What other step do you need to take to wire this module up to your app? Go do it.

Ok, cool. No big changes or anything, but one step closer to our mission.

Your real mission here (one of them anyway) is to forego Angular's out of the box
router `ngRout` for something a little more sophisticated, as well as more useful, as
your app gets more complex. Since it's your first stab at `AngularUI Router`, we're
going to implement it without all the noise of a complex app so that you get a clear
look at how it works. But first, let's take a minute to explore _why_ you might
choose `UI Router` over `ngRoute`.

#### What is UI-Router?

AngularUI Router is a routing framework for AngularJS. It provides a different
approach than `ngRoute` in that it changes your application views based on the M`state`
of the application and not just the route URL. The Angular ngRoute module is organized
around __URL routes__, while UI-Router is organized around __state__, which may
optionally have routes, as well as other behavior, attached. Ok, but who cares, right?

Well, as an application gets more complex, you might want to nest some of your
views, and it turns out UI-Router does this in a much simpler and more powerful way
than ngRoute. UI-Router has become the sort of "go to" router for Angular.

But don't take my word for it, try it out for yourself! Let's go to the
[docs](https://github.com/angular-ui/ui-router) and get started.

#### Getting wired up

1. Add the [cdn](http://cdnjs.com/libraries/angular-ui-router) to your index file.
2. Add `ui.router` to your module's list of dependencies
3. Instead of using `ng-view` to tell our app where to insert our partials, we're
going to use the `ui-view` directive.
4. In `index.html`, replace the `{{ 1 + 3 }}` with `<div ui-view></div>`.

Check your console and confirm that you don't have any errors.

Right now, the body of your `index.html` file should look something like this:

```
// index.html

<body>
  <nav class="navbar navbar-inverse" role="navigation">
    <ul class="nav navbar-nav">
        <li><a ui-sref="home">Home</a></li>
        <li><a ui-sref="about">About</a></li>
    </ul>
  </nav>
  <div class="container">
    <div ui-view></div>
  </div>
  <script src="http://code.angularjs.org/1.2.13/angular.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>
  <script src="/js/app.js"></script>
</body>

```

Your `app.js` file should look like this:

```
var app = angular.module("not-angry-angular", ['ui.router'])
```

#### Using ui-sref to link to different states

You may have noticed this already, but if you haven't, go checkout the anchor links
in our navigation. This is how we get to use UI-Router's __state__. Using the `ui-sref`
directive allows us to declare what _state_ we want to link to, rather than an explicit url.
In our two links we've assigned the __Home__ link to the __home__ state and the
__About__ link to the __about__ state. It's important to note that the two labels do
not _have_ to have the same name, it just so happens that in this case this is the most obvious,
straight forward approach.

As long as the state declared in the `ui-sref` directive has a corresponding url, an `href`
attribute will be auto-generated and added to the anchor tag. Right now, that's one of
the things we're missing. Let's go take care of it.

#### Bringing it all together using $stateProvider

What we're about to do next looks is almost exactly the same as how you've been
using ngRoute. With that in mind, where would you go to start hooking up some routes?

Instead of injecting `$routeProvider` into our `config` callback, we're going to inject
`$stateProvider`. Additionally, we're going to add a `state` property to our route.

Go to step 5 in the [docs](https://github.com/angular-ui/ui-router#get-started).
Apply what you see there and add the two routes we've already added to our navigation.

Instead of rendering templates though, just render `<h1>You did it! You're home!</h1>`
and `<h1>What about it??</h1>` using the `template` property instead of `templateUrl`.

Also, we don't even need to add a controller yet, so skip it! Only write code you need.
