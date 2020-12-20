# composition-api

> It’s also worth mentioning that the setup method does not have access “this”,

> setup has two optional arguments. The first is props which is reactive and can be watched, as such:

> The second argument is context, that has access to a bunch of useful data:

> It turns out that when Vue finds a ref in a template it automatically exposes the inner value, so you should never need to call .value inside the template.


