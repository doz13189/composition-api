# composition-api

## Vue 2 の問題点
- As your components get larger readability gets difficult.  
コード量が増えると読みづらい
- The current code reuse patterns all come with drawbacks.  
コード再利用する方法は何個かあるけど...
- Vue 2 has limited TypeScript support out of the box.  
Vue 2 の TypeSciript のサポートは思ってるのとは違う

## sample code (composition api)

```vue
<script>
import { reactive, computed } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>
```

## sample code (option api)

```vue
<script>
import { reactive, computed } from 'vue'

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
        this.count++
    }
  }
}
</script>
```


## ピックアップ
https://www.vuemastery.com/courses/vue-3-essentials/why-the-composition-api
https://composition-api.vuejs.org/#basic-example

> It’s also worth mentioning that the setup method does not have access “this”,

`this`ではアクセスできない


> setup has two optional arguments. The first is props which is reactive and can be watched, as such:

`setup()`は引数に`props`をとる。

> The second argument is context, that has access to a bunch of useful data:

`setup()`は引数に`context`をとる。


> It turns out that when Vue finds a ref in a template it automatically exposes the inner value, so you should never need to call .value inside the template.

`ref`で変数をラップすると`value`はデフォルトで公開されるから、`template`で使うときは`.value`をつけなくても`value`にアクセスできる。


## The Reactive Syntax
> there is an additional way to wrap these primitives in an object. Specifically using the reactive syntax.

## Lifiycle
> This is because beforeCreate() is called right before setup() and created() is called right after setup()

- onRenderTracked - called when a reactive dependency is first being accessed in the render function, during render. This dependency will now be tracked. This is helpful to see which dependencies are being tracked, for debugging.

- onRenderTriggered - Called when a new render is triggered, allowing you to inspect what dependency triggered a component to re-render.


