<template>
<div id="wrapper">
    <div id="title">
        <h1>Nothing to see here chief</h1>
    </div>

</div>    
</template>

<script>

export default{

}
</script>

<style scoped>

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

  #wrapper {
  opacity: 0.92;
  background: url("../assets/stonehenge2.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  }


#title{
    backdrop-filter: blur(5px);
    -webkit-box-align: center;
    -moz-box-align: center;
}

h1 {
    color: #E6d646;
    text-align: left;
    font-size: 40px;
}

</style>