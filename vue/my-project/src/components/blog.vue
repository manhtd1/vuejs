<template>
  <div id="add-blog">
      <h2>Add new blog</h2>
      <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required>
           
            <label>Blog content:</label>
            <textarea v-model.lazy="blog.content"> </textarea>
        <div id="checkboxes">
            <label>Manh</label>
            <input type="checkbox" value="Manh" v-model='blog.catalogues'>
            <label>Tung</label>
            <input type="checkbox" value="Tung" v-model='blog.catalogues'>
            <label>Nam </label>
            <input type="checkbox" value="Nam" v-model='blog.catalogues'>
            <label>Hung</label>
            <input type="checkbox" value="Hung" v-model='blog.catalogues'>
        </div>
        <label>Author:</label>
        <select v-model="blog.author">
            <option v-for="author in authors" :key="author">{{author}}</option> 
        </select>
        <button @click.prevent="post">Add Blog</button>
      </form>
      <div v-if="submitted">
          <h3>Thanks for adding blog</h3>
      </div>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog Title:{{blog.title}}</p>
            <p>Blog Content:</p>
            <p> {{blog.content}} </p>
            <p> Blog catalogues:</p>
            <ul>
                <li v-for="catalogy in blog.catalogues" :key="catalogy">{{catalogy}}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        catalogues: []
        // author:'',
      },
      authors: ['Trần Đức Mạnh', 'Trần Đức Hùng', 'Trần Đức Anh'],
      submitted: false
    }
  },
  methods: {
    post:function() {
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        }).then(function(data){
            console.log(data)
            this.submitted = true
        })
    }
  }
}
</script>
<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type='text'],
textarea {
  display: block;
  width: 100%;
  padding: 10px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 30px;
}
#checkboxes {
  margin-right: 10px;
  display: inline-block;
}
#checkboxes label {
  display: inline-block;
  padding: 10px;
}
</style>
