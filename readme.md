# ungic-sass-helpers

**ungic-sass-helpers** is a library that provides a set of functions and mixins from the core of the [UNGIC](https://ungic.com/) framework, adapted for use with **Dart SASS 3.0**.

This package is based on the [`ungic.component.core`](https://ungic.com/guide/api/sass.html#ungic-component-ungic-component-core) module, with adjustments to ensure compatibility with Dart SASS syntax and features.

## Installation

To use the library in your project, follow these steps:

1. Install the package via your package manager (if available) or download the source files.
2. Import `ungic-sass-helpers` into your main SASS file:

```scss
@use 'ungic-sass-helpers' with (
  $config: (
    cid: "app",
  )
)
```

3. Use the functions and mixins in your stylesheets.

```scss
@use 'ungic-sass-helpers' as *;

@include this {
    background-color: red;
    .btn {
        @include prev('.hide-btn') {
            @debug &
        }
    }
}
```

### Documentation

[See the full documentation](https://ungic.com/guide/api/sass.html#ungic-component-ungic-component-core) for more information on the functions and mixins available in the library.

### Author

[unbywyd](https://unbywyd.com)