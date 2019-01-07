<template>
  <div id="show-blogs">
    <h1>All Blogs</h1>
    <div v-for="blog in blogs" :key="blog" class='single-blog'>

    <h2>{{blog.title}}</h2>
    <p>{{blog.body}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        blogs:[],
    }
  },
  methods: {},
  created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
          console.log(data);
          this.blogs = data.body.slice(0,20);
      })
  },
}
</script>
<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
