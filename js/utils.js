// set random list
function shuffle(array) {
    var tmp, current, top = array.length
    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1))
        tmp = array[current]
        array[current] = array[top]
        array[top] = tmp
    }
    return array
}

function getUrl(item) {
    if (isHome() == true) {
        return "./pages/movie-detail.html?id=" + item.id
    } else {
        return "../pages/movie-detail.html?id=" + item.id
    }
}

function getFeature() {
    return getQuery('feature')
}

function getDetailId() {
    return getQuery('id')
}

function getQuery(q) {
    let href = window.location.search
    let url = new URLSearchParams(href)
    let query = url.get(q)
    return query
}

function getPath() {
    let href = window.location.href
    let path = href.split('/').pop()
    let lists = path.split('.html')
    let childs = lists[0]
    return childs
}

function getPage() {
    return getQuery('page')
}

function setQueryHistory(key, value) {
    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search)
        searchParams.set(key, value);
        var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
        history.pushState(null, '', newRelativePathQuery);
    }
}

function setPage(number) {
    setQueryHistory("page", number)
}

function setView(id) {
    setQueryHistory("view", id)
}

function getView() {
    return getQuery('view')
}

function isType(input) {
    return getPath().includes(input)
}

function isHome() {
    let href = window.location.href
    let isPages = href.includes("pages")
    return !isPages
}

function imageError(e) {
    $(e).attr("src", getImage(null))
}

function getImage(path) {
    let imageUrl = ""
    if (path == null) {
        if (isHome() == true) {
            imageUrl = "./images/image_placeholder.png"
        } else {
            imageUrl = "../images/image_placeholder.png"
        }
    } else {
        imageUrl = "https://image.tmdb.org/t/p/original" + path
    }
    return imageUrl
}

function getImagePerson(path) {
    let imageUrl = ""
    if (path == null) {
        if (isHome() == true) {
            imageUrl = "./images/icon_person.png"
        } else {
            imageUrl = "../images/icon_person.png"
        }
    } else {
        imageUrl = "https://image.tmdb.org/t/p/original" + path
    }
    return imageUrl
}

function getMenuAndFeature() {
    let output = {
        menu: "",
        feature: ""
    }
    // get type param
    if (isType("movie")) {
        output.menu = "movie"
        switch(getFeature()) {
            case "popular":
                output.feature = "popular"
                break
            case "top-rated":
                output.feature = "top-rated"
                break
            case "upcoming":
                output.feature = "upcoming"
                break
            default:
                output.feature = "now-playing"
        }
    } else if (isType("tv")) {
        output.menu = "tv"
        switch(getFeature()) {
            case "on-the-air":
                output.feature = "on-the-air"
                break
            case "popular":
                output.feature = "popular"
                break
            case "top-rated":
                output.feature = "top-rated"
                break
            default:
                output.feature = "airing-today"
        }
    } else if (isType("person")) {
        output.menu = "person"
    } else if (isType("about")) {
        output.menu = "about"
    } else {
        output.menu = "home"
    }
    return output
}
