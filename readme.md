# Corso Website

Bootstrap website for training courses, workshops, seminars, etc. It has a mixed design with both light and dark colors and a modern look.

<img src="./images/screen.png" />

## Features

- Modern layout with custom colors/styles/backgrounds
- Responsive design
- Sticky navbar with style changes on scroll
- Carousel image slider
- Register & email subscribe forms
- Font Awesome icons

## Usage

This website is built with [Bootstrap](https://getbootstrap.com/) and [Sass](https://sass-lang.com/). It uses [Font Awesome](https://fontawesome.com/) for icons.

In order to customize this website, you need to install [Node.js](https://nodejs.org/en/). Then, clone this repository and run:

```bash
npm install
```

This will install Bootstrap, Sass and Font Awesome. To build your CSS files from Sass, run:

```bash
npm run sass:build
```

To watch your Sass files for changes, run:

```bash
npm run sass:watch
```

You can add Bootstrap variables to the `bootstrap.scss` file. You can look at the file `node_modules/bootstrap/dist/scss/_variables.scss` for a list of all the variables. Do NOT edit the `variables.scss` file directly, as it will be overwritten when you update Bootstrap.

To add your own custom styles, use the `styles.scss` file.

## Datos borrados

<div class="row">
          <div class="col-12">
            
            <div id="slider" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button class="active" type="button" data-bs-slide-to="0" data-bs-target="#slider" aria-current="true"
                  aria-label="Slide 1"></button>
                <button type="button" data-bs-slide-to="1" data-bs-target="#slider" aria-label="Slide 2"></button>
                <button type="button" data-bs-slide-to="2" data-bs-target="#slider" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner rounded-5">
                <div class="carousel-item active">
                  <img src="images/header-slide-1.jpg" alt="" class="d-block w-100 rounded-5" />
                </div>
                <div class="carousel-item">
                  <img src="images/header-slide-2.jpg" alt="" class="d-block w-100 rounded-5" />
                </div>
                <div class="carousel-item">
                  <img src="images/header-slide-3.jpg" alt="" class="d-block w-100 rounded-5" />
                </div>
              </div>
              
  
              <button class="carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#slider">
                <span class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Previous</span>
              </button>
  
              <button class="carousel-control-next" type="button" data-bs-slide="next" data-bs-target="#slider">
                <span class="carousel-control-next-icon"></span>
                <span class="visually-hidden">Next</span>
              </button>

            </div>
          </div>
        </div>

            <section class="register bg-primary py-6 overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2>Unlock Your Potencial with Engaging Content</h2>
            <p>
              Our training and seminar videos are designed to help you grow your skills and knowledge, whether you're a
              beginner or an experienced professional.
            </p>
            <ul class="list-unstyled vstack gap-3">
              <li>
                <i class="fas fa-square"></i>
                <strong>Gain Expertise:</strong>Our Videos provide in-depth insights and practical tips to enhance your
                expertise in various domains.
              </li>
              <li>
                <i class="fas fa-square"></i>
                <strong>Gain Expertise:</strong>Our Videos provide in-depth insights and practical tips to enhance your
                expertise in various domains.
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>