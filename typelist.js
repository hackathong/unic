// typelist ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//link: https://hq-otrs01.enelogk5.local/otrs-web/js/thirdparty/bsg_typelist/typelist.js
//call: typelist = new CTypelist(document.getElementById('targetSelectElement'));
//replaces target select by editable list

CTypelist = function (targetSelectElem, cat) {
    //in - place (div for placing)
    if (!targetSelectElem)
        return;
    this.place = null;
    this.target = targetSelectElem;

    this.varList = cat; //val:descr
    this.fitList = new Array(); //val:highlighted descr
    this.fitListInUse = 0;
    this.preHighlightedItem = null;
    this.hlIter = null;

    this.InitInterface();
    //preload defauld value
    /*
    for (var i = 0; i < this.target.options.length; i++) {
        if (this.target.options[i].value == this.target.value)
            this.editor.value = this.target.options[i].text;
    }
    */

}

CTypelist.prototype.InitInterface = function () {
    //place
    this.target.style.display = "none";
    this.place = document.createElement("span");
    this.target.parentElement.insertBefore(this.place, this.target);
    this.place.style.position = "relative";
    //editor
    this.editor = document.createElement("input");
    this.editor.type = "text";
    this.editor.style.width = "70%";
    this.editor.style.border = "solid 1px"
    this.place.appendChild(this.editor);
    //button
    this.button = document.createElement("span");
    this.button.innerHTML = "&nbsp;&#9662;&nbsp;";
    this.button.tabIndex = -1;
    //this.button.style.borderTop = "solid 1px";
    this.button.style.cursor = "pointer";
    this.place.appendChild(this.button);
    //br
    //this.place.appendChild(document.createElement("br"));
    //variants
    this.variant = document.createElement("span");
    this.variant.style.position = "absolute";

    this.variant.style.top = "22px";
    this.variant.style.left = "0px";

    this.variant.style.zIndex = "10000";
    this.variant.style.display = "none";
    this.variant.style.border = "solid 1px";
    this.variant.style.maxHeight = "300px";
    this.variant.style.minWidth = "100px";
    this.variant.style.overflow = "auto";
    this.variant.style.cursor = "pointer";
    this.variant.style.margin = "1px";
    this.place.appendChild(this.variant);

    //HANDLERS
    var typelist = this
    this.editor.onkeyup = function () {
        if (event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13) {
            event.returnValue = false;
            return;
        }
        typelist.OnEditorChange();
    }
    this.editor.onkeydown = function () {
        typelist.OnEditorSelect();
    }
    this.editor.onfocusout = function () {
        if (event.toElement != typelist.variant && event.toElement != typelist.button && event.toElement != null)
            typelist.ShowVariant(0);
        event.returnValue = false;
    }
    this.editor.onfocus = function () {
        typelist.editor.select();
    }
    this.variant.onfocusout = function () {
        if (event.toElement != typelist.editor && event.toElement != typelist.button && event.toElement != null)
            typelist.ShowVariant(0);
        event.returnValue = false;
    }
    this.button.onfocusout = function () {
        if (event.toElement != typelist.editor && event.toElement != typelist.variant && event.toElement != null)
            typelist.ShowVariant(0);
        event.returnValue = false;
    }
    this.button.onmousedown = function () {
        if (typelist.variant.style.display == "none")
            typelist.ShowVariant(1)
        else
            typelist.ShowVariant(0)
        this.focus(); //for onfocusout
        event.returnValue = false;
    }
}

CTypelist.prototype.LoadVarList = function () {
    delete (this.varList);
    this.varList = {};
    for (var i = 0; i < this.target.options.length; i++)
        this.varList[this.target.options[i].value] = this.target.options[i].text;
}

CTypelist.prototype.FormFitList = function () {
    var str = this.editor.value;
    this.ClearFitItem();
    //load variants
    //this.LoadVarList();
    //fill fitAry with values of varList that content str
    var re = new RegExp(str.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), "gi");//http://dumpsite.com/forum/index.php?topic=4.msg8#msg8
    var rs = null;
    var ary = null;
    //find fits
    for (var i in this.varList) {
        if (str == "") { //just copy
            this.AddFitItem(i, this.varList[i]);
        }
        else { //find consiliences
            rs = this.varList[i].replace(re, "<span style='color:red'>$&</span>");
            if (rs.length > this.varList[i].length) { //there is str
                this.AddFitItem(i, rs); //add to fitList
            }
            /*
            try {
                ary = this.varList[i].split(str);
                if (ary.length > 1) {
                    rs = ary.join("<span style='color:red'>" + str.toUpperCase() + "</span>");
                    this.AddFitItem(i, rs); //add to fitList
                }
            }
            catch (e) { }
            */
        }
    }
    this.MoveHLIter(3);
}

CTypelist.prototype.AddFitItem = function (val, descr) {
    if (this.fitListInUse >= this.fitList.length) {
        //create new element
        var item = document.createElement("div");
        this.variant.appendChild(item);
        this.fitList.push(item);
        item.style.background = "white";
        var typelist = this;
        item.onmouseover = function () {
            typelist.MoveHLIter(4, this.index);
        }
        item.onmousedown = function () {
            typelist.SelectItem();
            typelist.editor.focus();
            event.returnValue = false;
        }
        item.onmouseup = function () {
            typelist.SelectItem();
            typelist.editor.focus();
            event.returnValue = false;
        }
    }
    //use existed
    this.fitList[this.fitListInUse].innerHTML = descr;
    this.fitList[this.fitListInUse].val = val;
    this.fitList[this.fitListInUse].index = this.fitListInUse;
    this.fitList[this.fitListInUse].style.display = "block";
    this.fitListInUse++;
}

CTypelist.prototype.ClearFitItem = function () {
    //hide all items
    for (var i = 0; i < this.fitList.length; i++)
        this.fitList[i].style.display = "none";
    this.fitListInUse = 0;
}

CTypelist.prototype.OnEditorChange = function () {
    if (this.editor.value.length < 3) {
        this.ShowVariant(0);
        return;
    }
    //fill fit
    this.FormFitList();
    //show fits
    this.ShowVariant(1);
}

CTypelist.prototype.OnEditorSelect = function () {
    if (event.keyCode == 40) {//arrow down
        event.returnValue = false;
        this.MoveHLIter(1);
    }
    if (event.keyCode == 38) {//arrow up
        this.MoveHLIter(2);
    }
    if (event.keyCode == 27) {//esc
        this.ShowVariant(0);
    }
    if (event.keyCode == 13) {//enter
        event.returnValue = false;
        this.SelectItem();
    }
}

CTypelist.prototype.MoveHLIter = function (code, pos) {
    if (this.fitListInUse == 0) {
        this.hlIter = null;
        this.ShowVariant(0);
        return;
    }
    if (code == 1)
        this.hlIter++
    else if (code == 2)
        this.hlIter--
    else if (code == 3)
        this.hlIter = 0;
    else if (code == 4)
        this.hlIter = pos;
    if (this.hlIter >= this.fitListInUse)
        this.hlIter = this.fitListInUse - 1;
    if (this.hlIter <= 0)
        this.hlIter = 0;
    //scroll div
    if (code != 4)
        this.variant.scrollTop = this.fitList[this.hlIter].offsetTop;

    this.HighlightFitItem(this.fitList[this.hlIter]);
}

CTypelist.prototype.HighlightFitItem = function (Item) {
    if (this.preHighlightedItem)
        this.preHighlightedItem.style.background = "white";
    Item.style.background = "silver";
    this.preHighlightedItem = Item;
}

CTypelist.prototype.SelectItem = function () {
    if (this.hlIter == null)
        return;
    this.editor.value = this.varList[this.fitList[this.hlIter].val];
    this.target.value = this.fitList[this.hlIter].val;
    this.OnEditorChange();
    this.ShowVariant(0);
    //send event to target
    /*
    try { //use jquery
        $('#'+this.target.id).trigger('change');
    }
    catch (e) { //there are no jquery
        try { //for normal browsers
            var o = document.createEvent('HTMLEvents');
            o.initEvent('change', true, true);
            this.target.dispatchEvent(o);
        }
        catch (e) { } //nothing for ie < 9
    }
    */
}

CTypelist.prototype.ShowVariant = function (op) {
    if (op) {//show
        this.FormFitList();
        if (this.fitListInUse) {
            this.variant.style.display = "block";
        }
    }
    else
        this.variant.style.display = "none";
}
    