'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front-ada documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-429a7bc1692e0028bb6a4b6c9ad2c365"' : 'data-target="#xs-components-links-module-AppModule-429a7bc1692e0028bb6a4b6c9ad2c365"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-429a7bc1692e0028bb6a4b6c9ad2c365"' :
                                            'id="xs-components-links-module-AppModule-429a7bc1692e0028bb6a4b6c9ad2c365"' }>
                                            <li class="link">
                                                <a href="components/AlertasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConexaoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConexaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditPostagemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditPostagemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditUsuarioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditUsuarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpresaB2wComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmpresaB2wComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpresaConductorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmpresaConductorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpresaItauComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmpresaItauComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpresaMagaluComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmpresaMagaluComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpresaMc1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmpresaMc1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpresaMercadolivreComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmpresaMercadolivreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrincipalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrincipalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Postagem.html" data-type="entity-link">Postagem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tema.html" data-type="entity-link">Tema</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogin.html" data-type="entity-link">UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertasService.html" data-type="entity-link">AlertasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewsApiService.html" data-type="entity-link">NewsApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostagemService.html" data-type="entity-link">PostagemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemaService.html" data-type="entity-link">TemaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Window.html" data-type="entity-link">Window</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});