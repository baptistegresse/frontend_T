import Dashboard from "./views/dashboard_view/Dashboard.js";
import Game from './views/game_view/Game.js'
import Settings from "./views/settings_view/Settings.js";
import Tournament from "./views/tournament_view/Tournament.js";
import History from "./views/history_view/History.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};


const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/game", view: Game },
        { path: "/settings", view: Settings },
        { path: "/tournament", view: Tournament },
        { path: "/history", view: History}
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

    if (typeof view.onRender === "function") {
        await view.onRender();
    }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    
    if (!localStorage.getItem('username'))
        localStorage.setItem('username', 'default');
    localStorage.setItem('language', ['fr', 'es', 'en'].includes(localStorage.getItem('language')) ? localStorage.getItem('language') : 'en');
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    
    router();
});

export default router;