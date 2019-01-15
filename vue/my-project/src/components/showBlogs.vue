<template>
  <div id="show-blogs">
    <h1>All Blogs</h1>
    <input type='text' v-model='search' placeholder="search box">
        <button @click="get">get all data</button>
    <div v-for="(blog,index) in  filteredBlogs" :key="index" class='single-blog'>
    <h2 v-rainbow>Blog Title: {{blog.title}}</h2>
    <h2 v-rainbow>Blog Content:</h2><p> {{blog.content}}</p>
    <h2 v-rainbow>Blog author: {{blog.author}}</h2>
    <p>{{blog.body}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {
    get: function() {
      this.$http
        .get('https://vue-http-da373.firebaseio.com/data.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          const newArr = []
          for (let key in data) {
            newArr.push(data[key])
          }
          this.blogs = newArr
        })
    },
    deletee: function(){
      this.$http.delete
    }
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search)
      })
    }
  }
  //   created() {
  //       this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
  //           console.log(data);
  //           this.blogs = data.body.slice(0,20);
  //       })
  //   },
}
</script>
<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
