<template>
  <Layout>






  <div id="pageintro" class="hoc clear"> 
    <!-- ################################################################################################ -->
    <article>
      <h3 class="heading">Gravida ligula pulvinar</h3>
      <p>Sem eu tincidunt magna nulla eu turpis mauris eget ante fusce pharetra sodales arcu sed rutrum ipsum a ipsum.</p>
      <footer>
        <form class="group" method="post" action="#">
          <fieldset>
            <legend>Sign-Up:</legend>
            <input type="email" value="" placeholder="Email Here&hellip;">
            <button class="fas fa-sign-in-alt" type="submit" title="Submit"><em>Submit</em></button>
          </fieldset>
        </form>
      </footer>
    </article>
    <!-- ################################################################################################ -->
  </div>




<div class="wrapper row2">
  <section id="references" class="hoc container clear"> 
    <!-- ################################################################################################ -->
    <div class="sectiontitle">
      <h6 class="heading">Aliquet vestibulum</h6>
      <p>Eget magna eget sem imperdiet tincidunt vestibulum fringilla nulla</p>
    </div>
    <nav class="ref-sort">
      <ul>
        <li class="current"><a href="#">Ultricies</a></li>
        <li><a href="#">Curabitur</a></li>
        <li><a href="#">Porttitor</a></li>
        <li><a href="#">Pulvinar</a></li>
      </ul>
    </nav>
    <ul class="nospace group ref-img">
      <li class="one_third"><a class="imgover" href="#"><g-image src="~/assets/images/demo/348x261.png" width="348" height="261" alt="test"/></a></li>
      <li class="one_third"><a class="imgover" href="#"><g-image src="~/assets/images/demo/348x261.png" width="348" height="261" alt="test"/></a></li>
      <li class="one_third"><a class="imgover" href="#"><g-image src="~/assets/images/demo/348x261.png" width="348" height="261" alt="test"/></a></li>
      <li class="one_third"><a class="imgover" href="#"><g-image src="~/assets/images/demo/348x261.png" width="348" height="261" alt="test"/></a></li>
      <li class="one_third"><a class="imgover" href="#"><g-image src="~/assets/images/demo/348x261.png" width="348" height="261" alt="test"/></a></li>
      <li class="one_third"><a class="imgover" href="#"><g-image src="~/assets/images/demo/348x261.png" width="348" height="261" alt="test"/></a></li>
    </ul>
    <footer class="block center"><a class="btn" href="#">View more here</a></footer>
    <!-- ################################################################################################ -->
  </section>
</div>

   <BlogPostPreview :posts="$page.posts.edges"/>
     
 <div class="wrapper bgded overlay">
  <section id="testimonials" class="hoc container clear"> 
    <!-- ################################################################################################ -->
    <div class="sectiontitle">
      <h6 class="heading">Donec condimentum</h6>
      <p>Adipiscing justo nulla mollis iaculis tortor in mauris integer</p>
    </div>
    <div class="group">
      <article class="one_half first">
        <g-image src="~/assets/images/demo/80x80.png" width="80" height="80" alt="test"/>
        <blockquote>Pretium duis viverra malesuada mi proin iaculis mauris eu sodales cursus sapien erat pharetra justo vitae volutpat eros magna et magna mauris hendrerit pellentesque.</blockquote>
        <h6 class="heading font-x1">A. Doe</h6>
        <em>Et ipsum mattis ipsum</em></article>
      <article class="one_half">
        <g-image src="~/assets/images/demo/80x80.png" width="80" height="80" alt="test"/>
        <blockquote>Pellentesque pretium proin molestie erat in rhoncus posuere nibh quam consectetuer lectus ac vulputate ligula lorem ut dolor duis tempus mauris nunc et ligula ut.</blockquote>
        <h6 class="heading font-x1">B. Doe</h6>
        <em>Tortor suscipit convallis</em></article>
    </div>
    <!-- ################################################################################################ -->
  </section>
</div>








  
<div class="wrapper row3">
  <article class="hoc cta clear"> 
    <!-- ################################################################################################ -->
    <h6 class="three_quarter first">Sed ullamcorper arcu eu ante ut sollicitudin sem sit amet</h6>
    <footer class="one_quarter"><a class="btn" href="#">Ipsum fusce non pede</a></footer>
    <!-- ################################################################################################ -->
  </article>
</div>










  </Layout>
</template>

<script>


import BlogPostPreview from '~/components/BlogPostPreview.vue';


export default {
  name: 'home',

 components: {
   BlogPostPreview
  },

  metaInfo: {
    title: 'home',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'home-class'
    },
  
  }
}

</script>


<page-query>
query {
  posts: allBlogPost (limit: 3) {
    edges {
      node {
        id
        title
        date (format: "MMMM D, YYYY")
        path
        excerpt
        feature 
        image
         tags {
            title
            path 
          }
      }
     
    }
  },


}

</page-query>
