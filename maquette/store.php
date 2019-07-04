<?php include "header.php"?>

    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-5">
                <span class="section-heading-upper">Vous voulez produire</span>
                <span class="section-heading-lower">Visitez-nous</span>
              </h2>
              <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                <li class="list-unstyled-item list-hours-item d-flex">
                  Dimanche
                  <span class="ml-auto">Fermé</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Lundi
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Mardi
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Mercredi
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Jeudi
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Vendredi
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Samedi
                  <span class="ml-auto">9:00 AM to 5:00 PM</span>
                </li>
              </ul>
              <p class="address mb-5">
                <em>
                  <strong>3500 rue de Courval</strong>
                  <br>
                  Trois-Rivières, QC
                </em>
              </p>
              <p class="mb-0">
                <small>
                  <em>Appeller quand vous voulez</em>
                </small>
                <br>
                (555) 555-5555
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

<section class="page-section about-heading">
    <div class="container">
        <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="img/755A2491.JPG" alt="">
        <div class="about-heading-content">
            <div class="row">
                <div class="col-xl-9 col-lg-10 mx-auto">
                    <div class="bg-faded rounded p-5">
                        <h2 class="section-heading mb-4">
                            <span class="section-heading-upper">oeil de lynx, oeil de faucon</span>
                            <span class="section-heading-lower">Votre regard</span>
                        </h2>
                        <p>Le Service de l’audiovisuel offre des services de vidéo et de photographie et accompagne le personnel du collège lors d’activités pédagogiques et institutionnelles à la création d’outils
                            audio vidéo favorisant les apprentissages et la réussite des étudiantes et étudiants. Il assure également le prêt de différents appareils audiovisuel à la communauté collégiale.</p>
                        <p class="mb-0">Afin de démarrer nos collaborations sur des bases solides, la première étape est l’analyse de vos besoins et la compréhension de vos objectiAfin de démarrer nos collaborations
                            sur des bases solides, la première étape est l’analyse de vos besoins et la compréhension de vos objectifs. Cela nous servira à saisir la mission de votre production vidéo. Notre équipe
                            vous proposera par la suite des avenues créatives adaptées puis un scénario et un story-board étoffé. fs. Cela nous servira à saisir la mission de votre production vidéo. Notre équipe vous
                            proposera par la suite des avenues créatives adaptées puis un scénario et un story-board étoffé.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

 <?php include "footer.php"?>

  <!-- Script to highlight the active date in the hours list -->
  <script>
    $('.list-hours li').eq(new Date().getDay()).addClass('today');
  </script>

</html>
