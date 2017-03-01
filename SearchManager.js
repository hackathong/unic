function SearchManager() {
    this.data = null; // array of types -> array of entitys -> entity obj
    this.subset = null;
    this.findedFields = ["name"];
    this.emploeeView = new EmployeeView();
    this.organizationView = new OrganizationView();
    this.directiveView = new DirectiveView();
}

SearchManager.prototype.PreparaData = function () {
    for (var table in this.data) {
        for (var i in this.data[table]) {
            this.data[table][i]["type"] = table;
        }
    }
}

SearchManager.prototype.Find = function (request, searchFieldName, inTable) {
    //fill subset by find results
    this.subset = new Array();
    for (var table in this.data) {
        if (inTable != null && inTable != table)
            continue;
        for (var i in this.data[table]) {
            if (this.Check(this.data[table][i], request, searchFieldName))
                this.subset.push(this.data[table][i])
        }
    }
}

SearchManager.prototype.Check = function (obj, request, searchFieldName) {
    //check in every find field
    for(var j in this.findedFields)
    {
        if (searchFieldName == null) { //поиск по fieldset
            if (obj[this.findedFields[j]] != null &&
                obj[this.findedFields[j]].toUpperCase().search(request.toUpperCase()) >= 0
            )
                return true;
        }
        else {//поиск по определенному полю
            if (obj[searchFieldName] != null && (obj[searchFieldName] == request || request == "*"))
                return true;
        }
    }
    return false;
}

SearchManager.prototype.LoadData = function (data) {
    this.data = data;
    this.PreparaData();
}

SearchManager.prototype.Visualize = function (container, type) {
    for (var i in this.subset) {
        if (this.subset[i].type == 'employees') {
            this.emploeeView.Charge(this.subset[i]);
            var itm;
            switch (type) {
                case "searched": itm = this.emploeeView.VizualizeSearched(); break;
                case "short": itm = this.emploeeView.VizualizeShort(); break;
                case "full": itm = this.emploeeView.VizualizeFull(); break;
            }
            container.appendChild(itm);
        }
        if (this.subset[i].type == 'organizations') {
            this.organizationView.Charge(this.subset[i]);
            var itm;
            switch (type) {
                case "searched": itm = this.organizationView.VizualizeSearched(); break;
                case "short": itm = this.organizationView.VizualizeShort(); break;
                case "full": itm = this.organizationView.VizualizeFull(); break;
            }
            container.appendChild(itm);
        }
        if (this.subset[i].type == 'directives') {
            this.directiveView.Charge(this.subset[i]);
            var itm;
            switch (type) {
                case "searched": itm = this.directiveView.VizualizeSearched(); break;
                case "short": itm = this.directiveView.VizualizeShort(); break;
                case "full": itm = this.directiveView.VizualizeFull(); break;
            }
            container.appendChild(itm);
        }
    }
}

SearchManager.prototype.GetObjById = function (table, id) {
    for (var i in this.data[table]) {
        if (this.data[table][i].id == id)
            return this.data[table][i];
    }
}
