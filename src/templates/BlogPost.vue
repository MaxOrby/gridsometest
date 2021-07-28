<template>
  <Layout>
      <div class="wrapper row3">
       <main class="hoc container clear"> 
    <article>
      <header>
      <h2>{{$page.post.title}}</h2>
      <p>Published on {{$page.post.date}}</p>

      <p><i>{{$page.post.timeToRead}}min to read</i></p>
      </header>

      <main class="content" v-html="$page.post.content"></main>
    </article>

        </main>
    </div>
  </Layout>
</template>

<style>
article > header {
  text-align: center;
}

.content {
  margin-top: 48px;
}
</style>

<page-query>
query Post ($path: String!) {
   post: blogPost (path: $path) {
    id
    title
    date (format: "MMMM D, YYYY")
    timeToRead
    content
  }
}
</page-query>