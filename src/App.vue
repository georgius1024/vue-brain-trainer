<template lang="pug">
  div
    router-view
</template>

<script lang="ts">
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min.js';
import 'uikit/dist/css/uikit.min.css';
UIkit.use(Icons);

export default {
  name: 'App',
  data () {
    return {
    };
  }
};
</script>
