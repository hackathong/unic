function EmployeeView() {
    this.emp;
    this.translateMap = {
        "name":"ФИО",
        "title": "Должность",
        "certNumber": "Номер удостоверения",
        "electroSafetyGroup": "Группа по ЭБ",
        "briefingDate": "Дата вводного инструктажа ",
        "examineData": "Дата проверки знаний",
        "role": "Роль по наряду",
        "status": "Статус",
        "skud": "СКУД",
        "geoCoordFrame": "Местоположение",
        "orgLink": "Организация",
        "dirLink": "Указание"
    }
}

EmployeeView.prototype.Charge = function (empObj) {
    this.emp = empObj;
}

EmployeeView.prototype.VizualizeSearched = function () {
    var itm = document.createElement("div");
    this.AddField("name", itm);
    return itm;
}

EmployeeView.prototype.VizualizeShort = function () {
    var itm = document.createElement("div");
    itm.className = "shortItem";
    this.AddField("name", itm);
    this.AddField("title", itm);

    var linkObj = this.emp;
    //link
    itm.onclick = function () {
        searchView.ShowObj(linkObj);
    }

    return itm;
}

EmployeeView.prototype.VizualizeFull = function () {
    var itm = document.createElement("div");
    itm.className = "fullItem";
    for (var fn in this.translateMap)
    {
        if (typeof (this.emp[fn]) != 'undefined')
            this.AddField(fn, itm);
    }
    //organization
    var orgObj = searchManager.GetObjById("organizations", this.emp.orgId);
    this.AddField("orgLink", itm, orgObj);
        
    //directives
    var dirObj = searchManager.GetObjById("directives", this.emp.dirId);
    this.AddField("dirLink", itm, dirObj);

    //geo
    var val = this.AddField("geoCoordFrame", itm);
    
    
    if (this.emp.geoCoord != null)
        val.innerHTML = '<br>'+this.emp.geoCoord;
    else
        val.innerHTML = "не на территории"
    
    return itm;
}

EmployeeView.prototype.AddField = function (fieldName, itm, linkedObj) {
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