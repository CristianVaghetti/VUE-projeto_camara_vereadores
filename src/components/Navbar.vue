<template>
    <div class="col mx-auto text-center" style="background-color: rgba(0, 0, 0, 0.2);">
        <img src="https://www.camaracapaodoleao.rs.gov.br/img/header-logo.png" alt="">
    </div>
    <div class="row">
        <div class="col"></div>
        <div class="col">
            <nav class="navbar navbar-expand-sm bg-light navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item m-1">
                        <router-link class="btn btn-light btn-outline-primary" to="/">Home</router-link>
                    </li>
                    <li class="nav-item m-1">
                        <router-link class="btn btn-light btn-outline-primary" to="/fornecedor">Fornededores
                        </router-link>
                    </li>
                    <li class="nav-item m-1">
                        <router-link class="btn btn-light btn-outline-primary" to="/vereador">Vereadores</router-link>
                    </li>
                    <li class="nav-item m-1">
                        <router-link class="btn btn-light btn-outline-primary" to="/material">Materiais</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col"></div>
    </div>
</template>

<script>
export default {
    name: 'NavbarComp'
}
</script>
