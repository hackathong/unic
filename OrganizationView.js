function OrganizationView() {
    this.emp;
    this.translateMap = {
        "name": "Наименование",
        "employeeList": "Cотрудники",
        "contractStatus": "Статус договора"
    }
}

OrganizationView.prototype.Charge = function (empObj) {
    this.emp = empObj;
}

OrganizationView.prototype.VizualizeSearched = function () {
    var itm = document.createElement("div");
    this.AddField("name", itm);
    return itm;
}

OrganizationView.prototype.VizualizeShort = function () {
    var itm = document.createElement("div");
    itm.className = "shortItem";
    this.AddField("name", itm);

    var linkObj = this.emp;
    //link
    itm.onclick = function () {
        searchView.ShowObj(linkObj);
    }

    return itm;
}

OrganizationView.prototype.VizualizeFull = function () {
    var itm = document.createElement("div");
    itm.className = "fullItem";
    for (var fn in this.translateMap) {
        if (typeof (this.emp[fn]) != 'undefined')
            this.AddField(fn, itm);
    }
    //employee list
    var elVal = this.AddField("employeeList", itm);
    var orgId = this.emp.id;
    var orgName = this.emp.name;
    elVal.onclick = function () {
        searchView.OnSearch(orgId, "orgId", "employees", "сотрудники организации " + orgName);
    }
    elVal.innerHTML = "список";
    elVal.classList.add("fieldLink");

    //список указаний


    return itm;
}

OrganizationView.prototype.AddField = function (fieldName, itm, linkedObj) {
    var str = document.createElement("div");
    var label = document.createElement("span");
    label.className = "fieldName";
    label.innerHTML = this.translateMap[fieldName];
    var value = document.createElement("span");
    value.className = "fieldValue";
    if (linkedObj) {
        value.innerHTML = linkedObj.name;
        value.classList.add("fieldLink");
        value.onclick = function () {
            searchView.ShowObj(linkedObj);
        }
    }
    else {
        value.innerHTML = this.emp[fieldName];
    }
    str.appendChild(label);
    str.appendChild(value);
    itm.appendChild(str);
    return value;
}