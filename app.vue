<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
  :root {
  --title-font: 'Playfair Display', serif;
  --content-font: Raleway, sans-serif;
  --art-font: 'La Belle Aurore', sans-serif;
  --royal-blue: #002366;
  --navy-blue: #00004d;
  --metallic-gold: #d4af37;
  --rich-black: #010b13;
  --royal-gold: #ffbd1b;
  --royal-white: #fdfef6;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background-image: radial-gradient(#002366 10%, #00004D 90%);
    height: 100vh;
    width: 100%;
  }
</style>
