export default {
    props: {
        title:''
      },
    emits: ['enlarge-text'],
  template: `
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
   `
  }