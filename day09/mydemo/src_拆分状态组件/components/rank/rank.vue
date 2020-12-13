<template>
  <div>
    <h1>排行榜页面</h1>
    <h2>{{ rankName }}</h2>
    <ul>
      <li v-for="item in bannerList" :key="item.imageUrl">
        <img :src="item.imageUrl" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      rankName: "rank/getStateName",
      bannerList: "home/getBanner"
    })
  },
  mounted(){
      //页面一加载就重新调取接口
      this.getBannerAction()
  },
  methods:{
      ...mapActions({
          getBannerAction:'home/getBannerAction'
      })
  }
};
</script>

<style lang="" scoped></style>
