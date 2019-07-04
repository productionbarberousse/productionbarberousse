<?php include "header.php"?>
<title>Relaxer</title>
<div class="container-fluid bg2 img-fluid">
    <div class="row align-items-center text-center pt-5">
        <div class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-12">
            <h1 class="texteblanc titreprincipal2">L'été pour relaxer</h1>
            <hr class="hrtitre">
            <p class="texteblanc stprincipal2">Le seul site sur mes passions, occupation et mes projets de l'été 2019.</p>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row text-center align-items-center">
        <div class="col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
            <h1>Faire de la route</h1>
            <p>Ce promener sur les routes du Québec</p>
        </div>
    </div>
</div>


<div class="jumbotron jumbotron-fluid">
    <div class="container-fluid">
        <h1 class="display-4">L'alcool au volant</h1>
        <p class="lead">Il est important de rappeler que si vous conduisez il est important de ne pas être en faculté affaiblit par la drogue ou l'alcool.
            <br>
        En parlant d'alcool</p>
    </div>
</div>

<div class="container-fluid">
    <div class="row text-center align-items-center">
        <div class="col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
            <h1>Prendre une tite bière</h1>
            <p>Rien de mieux que de prendre une tite bière relax sur le perron</p>
        </div>
    </div>
</div>





<div class="container-fluid fondbleu py-4">
    <div class="col-10 offset-1 align-items-center text-center">
        <h1>Pour venir prendre une petite bière</h1>
    </div>
    <form action="formulaireEnvoye.html" class="align-items-center text-center">
        <div class="form-row">
            <div class="col-xl-4 offset-xl-2">
                <input type="text" class="form-control" placeholder="Nom">
            </div>
            <div class="col-xl-4">
                <input type="text" class="form-control" placeholder="Prénom">
            </div>
            <div class="col-xl-8 offset-xl-2">
                <input type="text" class="form-control" placeholder="Adresse courriel">
            </div>
        </div>

        <div class="form-group form-row text-center">
            <div class="col-xl-2 offset-xl-4">
            <label for="nbbiere">Nombre de bière</label>
            <select class="form-control"id="nbbiere" placeholder="nombre de bière">
                <option>-</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
            </select>
            </div>
            <div class="form-group col-xl-2">
                 <label for="repas">Choix de souper</label>
                    <select  class="form-control" name="repas" id="repas">
                        <option selected>Choisir</option>
                        <option value="1">Hamburger</option>
                        <option value="2">Hot-dogs</option>
                        <option value="3">Blé d'indes</option>
                        <option value="4">Salades</option>
                        <option value="5">Gros steaks</option>
                    </select>
            </div>
        </div>
        <div class="form-row">
            <div class="col-xl-12 text-center align-items-center">
                <iframe class="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.9662413977103!2d-72.56622783193721!3d46.37597333534715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc7c8f9f41de93f%3A0x94c2e66842bfd050!2sThe+White+Mansion!5e0!3m2!1sfr!2sca!4v1561681521892!5m2!1sfr!2sca" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="form-row">
            <div class="col-xl-12 text-center align-items-center">
                <button type="reset" class="btn btn-danger">Effacer tout</button>
                <button type="submit" class="btn btn-success">Envoyer</button>
            </div>
        </div>



    </form>


<?php include "footer.php"?>