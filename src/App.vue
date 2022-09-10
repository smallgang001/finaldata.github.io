<template>
  <body>
    <TooSt></TooSt>
    <Asdd></Asdd>
    <div class="contain">
      <router-view />
    </div>
    <div class="foo">
      <FooTer></FooTer>
    </div>
  </body>
</template>
<style lang="scss">
@import "./assets/all";
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  overflow-x: initial;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  box-sizing: border-box;
  background: #000;
  position: relative;
  width: 100%;

  .contain {
    width: 100%;
  }
  .foo {
    width: 100%;
  }
}
* {
  box-sizing: border-box;
}
</style>

<script>
import EmiTter from "../src/methods/mitt.js";
import TooSt from "../src/components/TooSt.vue";
import Asdd from "../src/components/BioTe.vue";
import FooTer from "../src/components/FooTer.vue";

export default {
  data() {
    return {
      url: "11",
    };
  },
  provide() {
    return {
      EmiTter,
    };
  },
  inject: ["EmiTter"],
  components: {
    TooSt,
    Asdd,
    FooTer,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
