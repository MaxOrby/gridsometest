<template>
  <Layout>
    <div class="wrapper row3">
       <main class="hoc container clear"> 
          <h1>Blog</h1>

          <BlogPostList :posts="$page.posts.edges"/>
          
       </main>
    </div>
  </Layout>
</template>

<script>
import BlogPostList from '~/components/BlogPostList.vue';


export default {
     components: {
   BlogPostList
  },
  metaInfo: {
    title: 'Blog page'
  }
}
</script>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        date (format: "MMMM D, YYYY")
        path
      }
    }
  }

}

</page-query>