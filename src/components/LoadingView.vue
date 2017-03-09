<template>
</template>

<script>
import { Indicator } from 'mint-ui';

export default {

  data(){
   return{
      positionY: 0,
      timer: null,
      }
    },
    methods: {
      show() {
           Indicator.open();
           setTimeout(() => Indicator.close(), 3000);
         },
      dismiss() {
          Indicator.close();
      }
    },
    mounted(){
      this.show();
    },
    beforeDestroy() {
      this.dismiss();
    }
}
</script>
