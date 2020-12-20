# composition-api

> It’s also worth mentioning that the setup method does not have access “this”,

> setup has two optional arguments. The first is props which is reactive and can be watched, as such:

> The second argument is context, that has access to a bunch of useful data:

> It turns out that when Vue finds a ref in a template it automatically exposes the inner value, so you should never need to call .value inside the template.

## The Reactive Syntax
> there is an additional way to wrap these primitives in an object. Specifically using the reactive syntax.

## Lifiycle
> This is because beforeCreate() is called right before setup() and created() is called right after setup()

- onRenderTracked - called when a reactive dependency is first being accessed in the render function, during render. This dependency will now be tracked. This is helpful to see which dependencies are being tracked, for debugging.

- onRenderTriggered - Called when a new render is triggered, allowing you to inspect what dependency triggered a component to re-render.


