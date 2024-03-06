<template>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous"
      @click.prevent='getAdminProductList(pages.current_page-1)'
      :class="{'disabled': pages.has_pre == false}">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" 
    v-for='item in pages.total_pages' :key="item"
    :class="{'active' : item == pages.current_page}"
    ><a class="page-link" href="#"
    @click.prevent='getAdminProductList(item)'>{{item}}</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next"
       @click.prevent='getAdminProductList(pages.current_page+1)'
        :class="{'disabled': pages.has_next == false}">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

</template>

<script>

export default{
    props:['pages', 'getAdminProductList']
}
</script>
