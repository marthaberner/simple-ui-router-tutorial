## Objectives


* Be able to wire up UI-Router
* Be able to display nested views using ui-router
* Be able to implement authentication using ui-router

##### Stretch objectives if you get through the first 3

* Be able to redirect to originally requested url after authorization
Here is a [blog post](http://www.jonahnisenson.com/angular-js-ui-router-redirect-after-login-to-requested-url/)
you can checkout for help. Try and modify the version in the blog and implement
something simpler here.
* Be able to spin up a basic modal using (unrelated but fun!) [angular-modal-service](http://www.dwmkerr.com/the-only-angularjs-modal-service-youll-ever-need/) and bootstrap

#### What is UI-Router?

UI-Router is a routing framework for AngularJS. It provides a different
approach than `ngRoute` in that it changes your application views based on the `state`
of the application and not just the route URL. The Angular ngRoute module is organized
around __URL routes__, while UI-Router is organized around __state__, which may
optionally have routes, as well as other behavior, attached. Ok, but who cares, right?

Well, as an application gets more complex, you might want to nest some of your
views, and it turns out UI-Router does this in a much simpler and more powerful way
than ngRoute. UI-Router has become the sort of "go to" router for Angular devs.

But don't take my word for it, try it out for yourself!

## Create a module and add ui-router as a dependency

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

#### Getting Wired Up

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

What we're about to do next looks almost exactly the same as how you've been
using ngRoute. With that in mind, where would you go to start hooking up some routes?

Instead of injecting `$routeProvider` into our `config` callback, we're going to inject
`$stateProvider`. Additionally, we're going to add a `state` property to our route.

Go to step 5 in the [docs](https://github.com/angular-ui/ui-router#get-started).
Apply what you see there and add two routes to match our navigation menu.

Instead of rendering templates though, just render `<h1>You did it! You're home!</h1>`
and `<h1>What about it??</h1>` using the `template` property instead of `templateUrl`.

Also, we don't even need to add a controller yet, so skip it! Only write code you need.

#### Nesting Views

Let's add some partials to the mix and dive in a little deeper.

```
mkdir partials
touch partials/about.html
touch partials/home.html
touch partials/list.html
```
Now, using `templateUrl` update your routes so they render a partial instead
of just the simple html string.

##### Using dot notation to define a nested state and render nested templates

We can use UI Router's state attribute to define nested states. For example, what
if we want to have a links on our About page that display different information?
Turns out it's really easy. It's all here in step 5 in the [docs](https://github.com/angular-ui/ui-router#get-started). These routes and states
can be as simple or complex as you need them to be. I'll give you the simple version here and you
can read the docs to explore more complex scenarios.

1. Add a `Harry Potter Characters` navigation link or button to your About page
using `ui-sref`. Here your state will be nested, so you can use the dot notation
to say so. __example:__ `.potter`

2. Add this nested state to your route and render `list.html` when a user visits
that state.
 - Don't just copy and paste. Take a minute to actually read the code below and understand what's going on

```
.state('about.potter', {
  url: "/potter",
  templateUrl: 'partials/list.html',
  controller: function($scope) {
        $scope.list = [
        "Draco Malfoy",
        "Ernie Macmillan",
        "Irma Pince",
        "Rufus Scrimgeour"
        ];
      }
  })

```
See what I did there? I was able to declare a variable on my list $scope called
`list` and set it's value to an array of values. I could also set the controller
value to some named controller if I needed to, but I don't need to so I'm keeping
simple.

What we're going to do here is render the same `list.html` template for both
of our states, but display different lists depending on which button is clicked.

Now, in `list.html` use `ng-repeat` to iterate through the list and display the names.

Ok, go check your view and confirm that everything is working as it should. The
user should be able to click a link or button and see the list of values displayed.
Click around your app and confirm that the other routes are still working.

Ok, now go do that again, but add a new link or button that displays a different
list but still renders the same `list.html` template.

You can use this list if you want: `["Frodo Baggins", "Peregrin Took", "Sauron", "Gollum", "Aragorn"]`

You got this!

---

By now, your user should be able to click two different buttons from the about page
that each display a different list of values. In this case, Harry Potter
characters or Lord of the Rings characters. Your urls should be `/#/about/potter`
and `/#/about/rings` (or whatever you named your states) respectively.

#### Using UI Router's Authentication Property

Sometimes, we want to restrict certain routes to certain users. While slightly
more complicated than nested routing, UI Router makes this pretty painless as well.
Let's add authentication to our __About__ page.

##### 1. Let's start by adding the `authenticate` property to our `about` route.

```
.state('about', {
  url: '/about',
  templateUrl: 'partials/about.html',
  authenticate: true
})
```

##### 2. Create a simple authentication service

Let's add a simple authentication service to our app. In this case, we're just
going to create a simple function that picks a number between 0 and 10 and if the
number is 3 or 7 the person is authenticated. Imagine though, in a real
scenario, your service would do something like check if the user is logged in etc.

```
mkdir js/services
touch js/services/authentication.js
```

Then add the following to `authentication.js`
(Don't forget to include your new `js` file in `index.html`!)

```
app.factory('AuthService', function () {
  return {
    isAuthenticated: function () {
      var num = Math.floor((Math.random() * 10) + 1);
      return num === 3 || num === 7;
    }
  }
})
```

###### We're not going to get into services vs factories here, but you'll see code like this all over the place.

##### 3. Tying it together using UI Router

We could wrap this next part up in a tidy directive, but let's just put it right in
our `app.js` to keep it simple.

See if you can figure out this last part on your own by checking out the very last
bit in this [blog post](https://medium.com/@mattlanham/authentication-with-angularjs-4e927af3a15f).
All you need is the last part, you're 80% there!

###### Pst! If you're super stuck, checkout the solution branch!
