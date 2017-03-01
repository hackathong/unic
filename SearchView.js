function SearchView(searchManager) {
    this.searchManager = searchManager;
    this.input = document.getElementById("searchInput");
    //this.shortVariants = document.getElementById("searchShortVariants");
    this.shortVariants = document.getElementById("searchShortVariants");
    this.searchFull = document.getElementById("searchFull");
}

SearchView.prototype.Init = function()
{
    var t = this;
    this.input.onkeyup = function () {
        if (event.keyCode == 13) {
            event.returnValue = false;
            t.OnSearch();
        }        
    }
    document.getElementById("home").onclick = function () {
        t.Home();
    }

    this.Home();    
}


SearchView.prototype.Home = function ()
{
    this.OnSearch("*", "id", "directives", "действующие указания");
}
    

/*
SearchView.prototype.OnInputChange = function () {
    if (this.input.value.length >= 3)
        searchManager.Find(this.input.value);
    this.ShowVariant(1);
}

SearchView.prototype.ShowVariant = function (op) {
    if (op != 1) {
        while (this.variants.firstChild) {
            this.variants.removeChild(this.variants.firstChild);
        }
        this.variants.style.visibility = 'hidden';
    }
    else
    {
        this.searchManager.VisualizeShort(this.variants);
        this.variants.style.visibility = 'visible';
    }
}
*/

SearchView.prototype.OnSearch = function (request, field, table, description) {
    this.ClearContainer(this.shortVariants);
    this.shortVariants.style.visibility = 'visible';
    this.ClearContainer(this.searchFull);
    this.searchFull.style.visibility = 'hidden';
    document.getElementById("searchFilterText").innerHTML = "";

    if (this.input.value.length < 3 && request == null)
        return;

    if (request == null) {
        this.searchManager.Find(this.input.value);
        document.getElementById("searchFilterText").innerHTML = this.input.value;
    }
    else {
        document.getElementById("searchFilterText").innerHTML = description;
        this.searchManager.Find(request, field, table);
    }

    if (this.searchManager.subset.length == 1) {
        this.ShowObj(this.searchManager.subset[0]);
    }
    else {
        //clear
        this.ClearContainer(this.shortVariants);
        this.searchManager.Visualize(this.shortVariants, "short");
    }



}

SearchView.prototype.ShowObj = function (obj) {
    this.ClearContainer(this.shortVariants);
    this.shortVariants.style.visibility = 'hidden';
    this.ClearContainer(this.searchFull);
    this.searchFull.style.visibility = 'visible';
    document.getElementById("searchFilterText").innerHTML = "";

    this.searchManager.subset = new Array();
    this.searchManager.subset.push(obj);
    this.searchManager.Visualize(this.searchFull, "full");
}

SearchView.prototype.ClearContainer = function (elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }

}