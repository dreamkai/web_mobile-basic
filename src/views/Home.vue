<template>
  <div class="home">
   <img src="@/assets/logo.png" alt="">
   <div class="text van-ellipsis" >哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或</div>
   <van-image width="100" height="100" :src="$source.logo" />
   <van-button type="primary" v-waves >主要按钮</van-button>
  </div>
</template>

<script>
import { Button,Image as VanImage } from 'vant';
import Source from '@/utils/source'
import {login} from '@/api/login.js'
import waves from '@/directive/waves'
export default {
  name: 'Home',
  components: {
    [Button.name]: Button,
    [VanImage.name]:VanImage
  },
 directives: { waves },
  created() {
    console.log(Source)
     const data = {
       username:'hahaha',
       password:111
     }
     login(data).then(res =>{
      console.log(res)
     })
  },
}
</script>

<style lang="scss" scoped>
  .text{
    font-size: 14px;
  }
</style>
