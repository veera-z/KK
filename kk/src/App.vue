<template>
  <div id="app">
    <body>
      
        <div class="header">
          <div class="logo">
            <img src="./assets/logo_d-KK20.svg" alt="Klara Khine production">
          </div>
          <div class="line"></div>
          <ul class="menu">
                      
              <li @click="activeBtn = 'aktuality'" :class="{active: activeBtn === 'produkty'}"><router-link to="/aktuality" >Aktuality</router-link></li>
              <li @click="activeBtn = 'projekty'" :class="{active: activeBtn === 'servis'}"><router-link to="/projekty">Projekty</router-link></li>
              <li @click="activeBtn = 'neco'" :class="{active: activeBtn === 'kontakty'}"><router-link to="/kontakty">O nás</router-link></li>
              <li @click="activeBtn = 'kontakty'" :class="{active: activeBtn === 'kontakty'}"><router-link to="/kontakty">Kontakty</router-link></li>
              
              
          </ul>
          <!-- <div class="line"></div> -->
        </div>
        <router-view/>
    </body>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;1,400;1,500&display=swap" rel="stylesheet");

#app {
  font-family: 'Rubik', sans-serif;
}

.header {
  margin: 0px;
}

.logo img{
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  margin-bottom: 35px;
}

.menu {
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 35px 0 35px 0;
  margin: 0px;
  font-weight: 500;
  font-style: italic;
  white-space: nowrap;

}

li {
  /* margin: 20px; */
  /* border: 1px solid black; */
}

a {
  text-decoration: none;
  color: black;
  transition: 0.5s;
  padding: 10px;
  border-radius: 5px;

}

a:hover {
  background-color: black;
  color: white;
}

.line {
  border-bottom: solid 3px black;
  margin: 0 30px 0 30px;
}

@media (min-width: 600px) {
  body {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
