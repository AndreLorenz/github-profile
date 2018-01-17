import angular from "angular";
import "jquery";
import "@uirouter/angularjs";
import routes from "./routes";
import config from "./config";

import indexComponents from './components/index.components';
import indexViews from './views/index.views';
import indexServices from './services/index.services';

import "./index.scss";

angular
    .module("github-profile", ["ui.router",
        indexComponents.name,
        indexViews.name,
        indexServices.name,
    ]).config(routes).config(config);