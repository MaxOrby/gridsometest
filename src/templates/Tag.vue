<template>
    <article>
      <h1>Posts tagged {{ post.tag.title }}</h1>

      <!--ul>
        <li v-for="post in post.tag.belongsTo.edges" :key="post.node.id" >
          <h3><g-link :to="post.node.path">{{ post.node.title }}</g-link></h3>
          {{ post.node.date }}
        </li>
      </ul-->
    </article>
</template>



<script>
export default {
  metaInfo() {
    return {
      title: 'post.tag.title'
    }
  },
}
</script>