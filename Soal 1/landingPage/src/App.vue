<template>
  <nav class="navbar navbar-expand-lg justify-content-center">
    <a class="navbar-brand" href="#">
      <img src="./assets/nav-logos.png" class="img-logo" alt="logos">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-white">≡</span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portofolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="./assets/search.svg" classs="img-src" width="20px" alt="search">
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container-1">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="title">EXPLORE,DREAM & CREATE </div>
          <div class="desc-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <button type="button" class="btn my-5 btn-success">Read More</button>
        </div>
        <div class="carousel-item">
          <div class="title">EXPLORE,DREAM & CREATE</div>
          <div class="desc-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <button type="button" class="btn my-5 btn-success">Read More</button>

        </div>
        <div class="carousel-item">
          <div class="title">EXPLORE,DREAM & CREATE</div>
          <div class="desc-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <button type="button" class="btn my-5 btn-success">Read More</button>

        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <div class="container-2">
    <div class="left-side-1">
      <img src="./assets/img-1.jpg" class="img-1" alt="potrait image">
      <!-- <div>Aliqua adipisicing ullamco veniam do reprehenderit excepteur reprehenderit.</div> -->
    </div>
    <div class="right-side-1">
      <div class="title-2">Laboris aliquip Lorem occaecat elit fugiat laboris est aute anim.</div>
      <div class="mt-3 desc-2">
        Commodo aliquip eiusmod et qui elit. Do deserunt id commodo quis pariatur aliqua ad. Nisi sit aliquip mollit
        nostrud laborum mollit commodo. Anim dolor esse in fugiat qui magna laboris fugiat minim esse velit. Lorem
        reprehenderit do amet est aliquip aute. Enim velit voluptate eu qui id sit sint anim. Amet ea quis laborum minim
        laboris qui sint tempor pariatur irure laboris voluptate do.
      </div>
      <div class="container-btn-2">
        <button class="btn-1">
        </button>
      </div>
    </div>
  </div>
  <div class="container-3">
    <div class="title-3">WORKING AREAS</div>
    <div class="container-card">
      <div class="top-card">
        <img src="./assets/img-3.png" class="img-card .img-fluid" alt="">
      </div>
      <div class="top-card">
        <img src="./assets/img-3.png" class="img-card .img-fluid" alt="">
      </div>
      <div class="top-card">
        <img src="./assets/img-3.png" class="img-card .img-fluid" alt="">
      </div>
    </div>
  </div>
  <div class="container-4">
    <div class="bottom-card">
      <div class="title-card">
        RESIDENTAL
      </div>
      <div class="desc-card">
        Lorem ipsum sir dolor amet
      </div>
      <div class="type-card">
        Lorem ipsum
      </div>
      <div class="container-btn-2">
        <button class="btn-2">
        </button>
      </div>
    </div>
    <div class="bottom-card">
      <div class="title-card">
        RESIDENTAL
      </div>
      <div class="desc-card">
        Lorem ipsum sir dolor amet
      </div>
      <div class="type-card">
        Lorem ipsum
      </div>
      <div class="container-btn-2">
        <button class="btn-2">
        </button>
      </div>
    </div>
    <div class="bottom-card">
      <div class="title-card">
        RESIDENTAL
      </div>
      <div class="desc-card">
        Lorem ipsum sir dolor amet
      </div>
      <div class="type-card">
        Lorem ipsum
      </div>
      <div class="container-btn-2">
        <button class="btn-2">
        </button>
      </div>

    </div>
  </div>
  <div class="container-5">
    <div class="text-center title-contain-5">
      OUR PRODUCTS
    </div>
  </div>
</template>

<style>

.title-contain-5{
  font-size: 30px;
  font-weight: 500;
}
.container-3 {
  background-image: url("./assets/bg-img.webp");
  padding-top: 5%;
  background-size: cover;
  width: auto;
}

.container-4 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10%;
}

.title-card {
  font-size: 30px;
  font-weight: 500;
  margin: 7px;
}

.desc-card {
  margin: 7px;
  font-weight: 500;
}

.type-card {
  margin: 7px;
  font-weight: 500;
}

.bottom-card {
  /* background-color: red; */
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-card {
  width: 80%;
  object-fit: cover;
}

.top-card {
  width: 90%;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 300px;
}

.container-card {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}


.title-3 {
  color: white;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;
}

.btn-1 {
  padding: 10px 20px;
  font-size: 1.1rem;
  background-color: rgb(89, 182, 35);
  border: none;
  color: white;
  position: relative;
  width: 150px;
  height: 45px;
  transition: background-color 0.2s ease-in, all 0.15s ease-in;
  margin-top: 20px;
}

.btn-1::after {
  display: flex;
  align-items: center;
  justify-content: center;
  content: "Read More";
  width: 150px;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(5px, 5px);
  background-color: white;
  color: rgb(53, 144, 0);
  border: 2px solid rgb(53, 144, 0);
  transition: all 0.15s ease-in;
}

.btn-1:hover::after {
  transform: translate(-8px, -9px);
}

.btn-1:hover {
  transform: translate(5px, 5px);
}

.btn-1:active::after {
  background-color: rgb(232, 255, 219);
}

.btn-2 {
  padding: 10px 20px;
  font-size: 1.1rem;
  background-color: rgb(89, 182, 35);
  border: none;
  color: white;
  position: relative;
  width: 150px;
  height: 45px;
  transition: background-color 0.2s ease-in, all 0.15s ease-in;
  margin-top: 20px;
}

.btn-2::after {
  display: flex;
  align-items: center;
  justify-content: center;
  content: "Learn About";
  width: 150px;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(5px, 5px);
  background-color: white;
  color: rgb(53, 144, 0);
  border: 2px solid rgb(53, 144, 0);
  transition: all 0.15s ease-in;
}

.btn-2:hover::after {
  transform: translate(-8px, -9px);
}

.btn-2:hover {
  transform: translate(5px, 5px);
}

.btn-2:active::after {
  background-color: rgb(232, 255, 219);
}

.navbar {
  background-color: #353535;
}

.title-2 {
  font-size: 30px;
  font-weight: 600;
}

.container-2 {
  margin-top: 10%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: row
}

.img-1 {
  width: 60%;
}

.desc-2 {
  font-size: 20px;
  text-align: left;
}

.right-side-1 {
  /* background-color: rebeccapurple; */
  padding: 10px;
  width: 100%;
  align-self: center
}

.left-side-1 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 50px;
}

.title {
  font-size: 50px;
  font-weight: bold;
  color: rgb(0, 0, 0);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  color: red;
}

.carousel {
  width: 100%;
  text-align: center;
}

.desc-1 {
  width: 100%;
  font-size: 20px;
  color: rgb(0, 0, 0);
  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: pretty;
  font-weight: 600
}

.img-logo {
  object-fit: cover;
  width: 100px;
}

.nav-link {
  font-size: 20px;
  color: white;
  font-weight: 600;
}

.nav-link:hover {
  color: rgb(149, 149, 149);
}

.navbar-nav {
  gap: 20px;
}

@media screen and (max-width: 768px) {

  .title-3 {
    font-size: 26px;
  }

  .btn-2 {
    padding: 10px 20px;
    font-size: 1.1rem;
    background-color: rgb(89, 182, 35);
    border: none;
    color: white;
    position: relative;
    width: 80px;
    height: 25px;
    transition: background-color 0.2s ease-in, all 0.15s ease-in;
    margin-top: 20px;
  }

  .btn-2::after {
    display: flex;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    content: "Learn About";
    width: 80px;
    height: 25px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(5px, 5px);
    background-color: white;
    color: rgb(53, 144, 0);
    border: 2px solid rgb(53, 144, 0);
    transition: all 0.15s ease-in;
  }

  .btn-2:hover::after {
    transform: translate(-8px, -9px);
  }

  .btn-2:hover {
    transform: translate(5px, 5px);
  }

  .btn-2:active::after {
    background-color: rgb(232, 255, 219);
  }

  .title-card {
    font-size: 16px;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
  }

  .desc-card {
    margin-top: 5px;
    text-align: center;
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 500;
  }

  .type-card {
    margin-top: 2px;
    margin-bottom: 2px;
    font-weight: 500;
    text-align: center;
    font-size: 12px;
  }

  .bottom-card {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .container-card {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .img-card {
    width: 100%;
    object-fit: cover;
  }

  .top-card {
    width: 80%;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100px;
  }

  .img-logo {
    width: 150px;
    position: relative;
    left: 0;
  }

  .navbar-nav {
    flex-direction: column;
  }

  .navbar-toggler {
    margin-left: auto;
  }

  .container-1 {
    background-image: url("./assets/img-2.jpg");
    max-height: 200px;
    background-size: contain;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  .desc-1 {
    font-size: 16px
  }

  .left-side-1 {
    justify-content: center;
    flex-direction: row;
    margin-bottom: 10px;

  }

  .container-2 {
    display: flex;
    flex-direction: column;
  }

  .title-2 {
    font-size: 20px;
    text-align: center;
  }

  .desc-2 {
    font-size: 16px;
    text-align: center;
  }

  .container-btn-2 {
    justify-content: center;
    display: flex;
  }

}

.container-1 {
  background-image: url("./assets/img-2.jpg");
  height: 600px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>