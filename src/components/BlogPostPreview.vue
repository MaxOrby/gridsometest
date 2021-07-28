<template>

<div class="wrapper row3">
  <section class="hoc container clear"> 
    
    <div class="sectiontitle">
      <h6 class="heading">Pellentesque consectetuer</h6>
      <p>Felis vitae sapien gravida interdum curabitur eu quam nec est</p>
    </div>
      <div id="latest" class="group">

       
       
       <article class="one_third" v-for="post in posts" :key="post.node.id">
        
        <a class="imgover" href="#">

       <!--<g-image :src="post.node.feature" /-->
        <g-image v-if="post.node.feature"
          :alt="post.node.title"
          :src="post.node.feature" />
        
        <g-image v-else
         src="~/assets/images/demo/348x261.png"
         alt="test" />
        
        </a>
        <div class="excerpt">
          <time :datetime="post.node.date"><i class="far fa-calendar-alt"></i>{{ post.node.date }}</time>
          <h6 class="heading">{{post.node.title}}</h6>
          <ul class="meta">
            <li><i class="fas fa-user rgtspace-5"></i> &nbsp;<a href="#">Admin</a> </li>
           
            <li v-if="post.node.tags">
                &nbsp;<i class="fas fa-tags rgtspace-5"></i>
                    <g-link
                        v-for="tag in post.node.tags"
                        :to="tag.path"
                        :key="tag.id">
                        #{{ tag.title }}
                    </g-link>
            </li>

            


          </ul>
          <p>{{post.node.excerpt}}</p>
          <footer> <g-link :to="post.node.path" class="btn">Full Story</g-link></footer>
        </div>
      </article>
 </div>

   </section>
</div>

</template>

<script>
export default {
  props: ['posts']
}
</script>

