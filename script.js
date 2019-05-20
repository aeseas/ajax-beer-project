const parseBeers = (data) => {
    data.forEach(beer => {
        //CARDS
        const card = document.createElement("div")
        const img = document.createElement("img");
        const title = document.createElement("h4");
        const year = document.createElement("h5");
        const tagline = document.createElement("p");
        
        card.classList.add("card")
        card.setAttribute("data-toggle", "modal")
        card.setAttribute("data-target", "#exampleModalCenter")
        // card.setAttribute("type", "button")
        img.classList.add("align-top")

        document.querySelector(".row").prepend(card)
        card.append(img)
        card.append(tagline)
        card.append(year)
        card.append(title)
        
        img.src = beer.image_url;
        title.textContent = beer.name;
        tagline.textContent = beer.tagline;
        year.textContent = beer.first_brewed;

        //MODAL
        const modalDialog = document.createElement("div"); //modal-dialog
        const modalContent = document.createElement("div"); //modal-content
        const modalheader = document.createElement("div"); //modal-header
        const titleModal = document.createElement("h4"); //title
        const modalBody = document.createElement("div"); //modal-body
        const descriptionTitle = document.createElement("h6") //own content description title
        const description = document.createElement("p"); //own content description
        const tipsTitle = document.createElement("h6") //own content tips title
        const tips = document.createElement("p") //own content tips
        const footer = document.createElement("footer"); //modal-footer
        const closeBtn = document.createElement("button") //real close

        modalDialog.classList.add("modal-dialog", "modal-dialog-centered")
        modalDialog.setAttribute("role", "document")
        modalContent.classList.add("modal-content")
        modalheader.classList.add("modal-header")
        titleModal.id = "exampleModalCenterTitle";
        modalBody.classList.add("modal-body");
        footer.classList.add("modal-footer")
        closeBtn.setAttribute("type", "button")
        closeBtn.classList.add("btn", "btn-secondary")
        closeBtn.setAttribute("data-dismiss", "modal")
        descriptionTitle.classList.add("title")
        tipsTitle.classList.add("title")
        description.classList.add("text")
        tips.classList.add("text")

        document.querySelector(".modal").prepend(modalDialog)
        modalDialog.append(modalContent)
        modalContent.append(modalheader)
        modalheader.append(titleModal)
        modalContent.append(modalBody)
        modalContent.append(descriptionTitle)
        modalContent.append(description)
        modalContent.append(tipsTitle)
        modalContent.append(tips)
        modalContent.append(footer)
        footer.append(closeBtn)

        descriptionTitle.textContent = "Description:"
        description.textContent = beer.description;
        titleModal.textContent = beer.name
        tipsTitle.textContent = "tips:"
        tips.textContent = beer.brewers_tips
        closeBtn.textContent = "close";
    })
}
//-----FETCH
fetch(`https://api.punkapi.com/v2/beers`)
    .then(r => r.json())
    .then(json => parseBeers(json))

