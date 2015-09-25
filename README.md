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
going to use `ui-view`. So go add that where you want your partials to display.

Right now, your index file should look something like this:

```

```
