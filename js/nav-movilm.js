var navList = [
    {
        key: "nav-home",
        value: "index.html"
    },
    {
        key: "nav-movie",
        value: "movies-list.html"
    },
    {
        key: "nav-tv",
        value: "tvs-list.html"
    },
    {
        key: "nav-person",
        value: "persons-list.html"
    },
    {
        key: "nav-about",
        value: "about.html"
    },
]

function removeAllLinkActive() {
    navList.forEach(item => {
        let selectorId = item.key
        $(selectorId).removeClass("active")
        // console.log(selectorId)
    })
}

function getCurrentLinkActive() {
    let href = window.location.href
    // console.log(href)
    navList.forEach( item =>
        {
            let searchPos = href.search(item.value)
            let selectorId = "li#" + item.key
            if (searchPos > -1) {
                $(selectorId).addClass("active")
                // console.log(item)
            }
        }
    )
    let searchHom = href.search(".html")
    // console.log(searchHom)
    if (searchHom < 0) {
        let selectorId = "li#" + navList[0].key
        $(selectorId).addClass("active")
    }
}
getCurrentLinkActive()
