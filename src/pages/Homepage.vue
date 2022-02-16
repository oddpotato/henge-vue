<template>
<div id="wrapper">
    <div id="title">
        <h1>What if Hinge...but druids?</h1>
    </div>
    <div id="spiel">
        <p>Hello this is my spiel for you all. Wanna go see some <router-link to="/druids">druids</router-link>?</p>
        <p>I have literally no excuse for this other than I was bored, my friends were bored, I need to practice programming.</p>
        <p>Judge me as much as you like.</p>
    </div>
    <div id="bottom-text">
        <p>For more dumb ideas, why not send me an <a href="mailto:info@freeyourbones.com">email?</a></p>
    </div>
</div>
</template>

<script>
export default{
    data() {
    return {
    };
  }
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

h1 {
    color: #E6d646;
    text-align: left;
    font-size: 40px;
}

p {
    color: #E6d646;
    text-align: left;   
}

#title,
#spiel {
    margin-left: 60px;
    backdrop-filter: blur(5px);
    -webkit-box-align: baseline;
}

#bottom-text {
    position: absolute;
    margin-right: 20px;
    backdrop-filter: blur(5px);
    -webkit-box-align: bottom;
    bottom: 0%;
    right: 0;
}

</style>