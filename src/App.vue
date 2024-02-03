<template>
  <RouterView />
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd,
ol,
ul,
fieldset,
legend,
button,
input,
select,
textarea {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

/* Remove border outline on focused elements */
:focus {
  outline: 0;
}
</style>
