<template>
  <div>
    <h1>音乐播放器</h1>
    <div>
      <audio ref='audio'
        src="http://m801.music.126.net/20201105115730/4da926c06cc87db327b46d7702325b1f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/4442982486/5a1e/5dcc/2f4b/845cf27b2e24949ba6a1690bc40b9a1c.m4a"
        
      ></audio>
    </div>
    <img @click="play" v-show="isShow"
      src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2165309720,733242852&fm=26&gp=0.jpg"
      alt=""
    />
    <img @click="pause" v-show="!isShow"
      src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2299115860,4230410767&fm=26&gp=0.jpg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
        isShow:true
    };
  },
  methods: {
      //播放事件
      play(){
          console.log(this.$refs.audio)
          //改变isShow的状态
          this.isShow = !this.isShow
          //操控audio标签的播放方法
          this.$refs.audio.play()
      },
      //暂停事件
      pause(){
          this.isShow = !this.isShow
          //操控audio标签的暂停方法
          this.$refs.audio.pause()
      }
  },
};
</script>

<style lang="" scoped>
img{
    width: 120px;
}
</style>
