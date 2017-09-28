<template>
     <iscroll-view class="scroll-view">
        <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
        </div>
    </iscroll-view>
</template>
<script>
    export default{

    }
</script>
<style>
.scroll-view {
  /* -- Attention: This line is extremely important in chrome 55+! -- */
  touch-action: none;
  /* -- Attention-- */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
 
}
 p{
      height:200px;
  }
</style>