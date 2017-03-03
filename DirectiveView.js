function DirectiveView() {
    this.emp;
    this.translateMap = {
        "name": "Наименование",
        "date": "Дата оформления",
        "employeeList": "Cотрудники",
        "contractNumber": "Номер договора",
        "path": "Файл указания"
    }
}

DirectiveView.prototype.Charge = function (empObj) {
    this.emp = empObj;
}

DirectiveView.prototype.VizualizeSearched = function () {
    var itm = document.createElement("div");
    this.AddField("name", itm);
    return itm;
}

DirectiveView.prototype.VizualizeShort = function () {
    var itm = document.createElement("div");
    itm.className = "shortItem";
    this.AddField("name", itm);
    this.AddField("date", itm);

    var linkObj = this.emp;
    //link
    itm.onclick = function () {
        searchView.ShowObj(linkObj);
    }

    return itm;
}

DirectiveView.prototype.VizualizeFull = function () {
    var itm = document.createElement("div");
    itm.className = "fullItem";
    for (var fn in this.translateMap) {
        if (typeof (this.emp[fn]) != 'undefined')
            this.AddField(fn, itm);
    }
    //employee list
    var elVal = this.AddField("employeeList", itm);
    var orgId = this.emp.id;
    var dirName = this.emp.name;
    elVal.onclick = function () {
        searchView.OnSearch(orgId, "dirId", "employees", "сотрудники директивы " + dirName);
    }
    elVal.innerHTML = "список";
    elVal.classList.add("fieldLink");

    //список указаний


    return itm;
}

DirectiveView.prototype.AddField = function (fieldName, itm, linkedObj) {
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
        if (fieldName == 'path') {
            if (this.emp[fieldName] != null)
                value.innerHTML = '<a target="_blank" href="' + this.emp[fieldName] + '">скачать</a>';
            else
                value.innerHTML = "нет"
        }
        else
            value.innerHTML = this.emp[fieldName];
    }
    str.appendChild(label);
    str.appendChild(value);
    itm.appendChild(str);
    return value;
}