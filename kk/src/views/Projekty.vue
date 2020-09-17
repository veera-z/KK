<template>
  <div class="projekty">
      <div class="projekty__2">
        <div class="projekty__distribuce">
            <h4>DISTRIBUCE</h4>
            <ul class="">
                <li>Karel, já a ty (2019)</li>
                <li>Osobní život díry (2019)</li>
            </ul>
        </div>
        <div class="projekty__produkce">
            <h4>PRODUKCE</h4>
            <ul class="">
                <li>Letní kino Kinská</li>
                <li>Knižní lázně</li>
                <li>Knihex</li>
                
            </ul>
        </div>
        
      </div>
      <div class="projekty__img">
            <img src="../assets/KinskyKino_logo_01.svg" alt="Klara Khine production" width="200">
            <img src="../assets/knizni_lazne.jpg" alt="Klara Khine production" width="200">
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.projekty {
    margin: 30px;
}

img {
    display: block;
   
    margin: 30px auto 0 auto;
}

@media (min-width: 600px) {
  .projekty__2 {
      display: flex;
      justify-content: space-around ;
      
    
  }
  
  /* .projekty__img img {
      justify-content: center;
  } */
  /* img {
      margin: 20px;
      
  } */
}

</style>