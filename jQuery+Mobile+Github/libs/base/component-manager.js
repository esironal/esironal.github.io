Apperyio.c15r = (function () {
    "use strict";
    var facades = (function () {

        /* Facade */
        function Facade() {
        }

        Facade.prototype.__change_ids = function (c, id_mod) {
            c.find("[id]:not([_idx]):not('.ui-carousel-indicator')").addBack("[id]").each(function (i, elt) {
                $(elt).attr("id", $(elt).attr("id") + "_" + id_mod).attr("_idx", "_" + id_mod);
            });
            return c;
        };
        Facade.prototype.has = function (attr) {
            return attr && this._properties.indexOf(attr) !== -1;
        };
        Facade.prototype.get_text = function (c) {
            return c.text().trim();
        };
        Facade.prototype.set_text = function (c, val) {
            c.text(castValue(val));
        };
        Facade.prototype.get_visible = function (c) {
            return c.css('visibility') !== 'hidden' && c.css('display') !== 'none';
            //return c.is(":visible") doesn't work correct in chrome with display: inline;
        };
        Facade.prototype.set_visible = function (c, val) {
            var visible = (typeof val === "boolean" && val) || (typeof val === "string" && JSON.parse(val.toLowerCase()));
            if (visible) {
                c.show();
            } else {
                c.hide();
            }
        };
        Facade.prototype.clone = function (c, id_mod) {
            return this.__change_ids(c.clone(), id_mod);
        };
        Facade.prototype.refresh = function (c) {
            return c;
        };
        Facade.prototype.wrapper = function (c) {
            return c;
        };
        Facade.prototype.unwrapper = function (c) {
            return c;
        };
        Facade.prototype.__specialAtributesCopy = function (originalComponent, clonedComponent) {
            for (var i = 0; i < originalComponent[0].attributes.length; i++) {
                clonedComponent[0].attributes.setNamedItem(originalComponent[0].attributes.item(i).cloneNode(true));
            }
        };
        Facade.prototype.clone_children = function (c, id_mod) {
            c.children().each(function () {
                var facade;
                var firstDsidEl;
                var obj = $(this);
                if(obj.attr("dsid") === undefined){
                    if(obj[0].tagName == "DIV"){
                        firstDsidEl = obj.find("[dsid]:first");
                        if(firstDsidEl.length !== 0){
                            facade = findFacade(firstDsidEl);
                            if(facade !== undefined) obj.replaceWith(facade.clone(firstDsidEl,id_mod));
                        }
                    }
                } else {
                    facade = findFacade(obj);
                    if(facade !== undefined) obj.replaceWith(facade.clone(obj,id_mod));
                }
            });
        };
        
        Facade.prototype.set_children = function (c, child) {
            c.children().remove();
            c.append(child);
        };
        
        Facade.prototype.set_changed = function (c) {
        	if(!c.attr("data-changed")) {
        		c.attr("data-changed",true);
        	}
        }

        /* ButtonGroupFacade */
        function ButtonGroupFacade() {
        }

        ButtonGroupFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible"] }
        });
        ButtonGroupFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            c.children().children().each(function () {
                var button = findFacade($(this));
                $(this).replaceWith(button.clone($(this), id_mod));
            });
            c.controlgroup();
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        ButtonGroupFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };
        ButtonGroupFacade.prototype.refresh = function (c) {
            return c.controlgroup("refresh");
        };

        /* ButtonFacade */
        function ButtonFacade() {
        }

        ButtonFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text", "visible"] }
        });
        ButtonFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        ButtonFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };
        ButtonFacade.prototype.set_changed = function (c) {
            if(c.parent().parent().attr("data-role") === "controlgroup") {
                Facade.prototype.set_changed.call(this, c.parent().parent());
            }
        };

        /* LabelFacade */
        function LabelFacade() {
        }

        LabelFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text", "visible"] }
        });
        LabelFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        LabelFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };

        /* SpacerFacade */
        function SpacerFacade() {
        }

        SpacerFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible"] }
        });
        SpacerFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        SpacerFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };

        /* InputFacade */
        function InputFacade() {
        }

        InputFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text", "visible"] }
        });
        InputFacade.prototype.__change_ids = function (c, id_mod) {
            var input = InputFacade.prototype.unwrapper(c).clone();
            input.attr("dsrefid", input.attr("dsid")).attr("dsid", input.attr("dsid") + "_" + id_mod);
            c.children().remove();
            c.append(input);
            input.textinput();
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        InputFacade.prototype.set_text = function (c, val) {
            c.val(val);
        };
        InputFacade.prototype.get_text = function (c) {
            return c.val().trim();
        };
        InputFacade.prototype.set_visible = function (c, val) {
            Facade.prototype.set_visible.call(this, InputFacade.prototype.wrapper(c), val);
        };
        InputFacade.prototype.get_visible = function (c) {
            return Facade.prototype.get_visible.call(this, InputFacade.prototype.wrapper(c));
        };
        InputFacade.prototype.refresh = function (c) {
            return c.textinput("refresh");
        };
        InputFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, InputFacade.prototype.wrapper(c), id_mod);
        };
        InputFacade.prototype.wrapper = function (c) {
            return c.parent().parent();
        };
        InputFacade.prototype.unwrapper = function (c) {
            return c.children().children("input");
        };

        /* SearchFacade */
        function SearchFacade() {
        }

        SearchFacade.prototype = Object.create(InputFacade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text", "visible"] }
        });
        SearchFacade.prototype.__change_ids = function (c, id_mod) {
            var input = SearchFacade.prototype.unwrapper(c).clone();
            input.attr("dsrefid", input.attr("dsid")).attr("dsid", input.attr("dsid") + "_" + id_mod);
            c.children().last().remove();
            c.append(input);
            input.textinput();
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        SearchFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, InputFacade.prototype.wrapper(c), id_mod);
        };
        SearchFacade.prototype.unwrapper = function (c) {
            return c.children().last().children("input");
        };

        /* NavbarFacade */
        function NavbarFacade() {
        }

        NavbarFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible"] }
        });
        NavbarFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            c.children().children().each(function () {
                var navitem = $(this).children().first();
                var navitemFacade = findFacade(navitem);
                $(this).replaceWith(navitemFacade.clone(navitem, id_mod));
            });
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        NavbarFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };

        /* NavbarItemFacade */
        function NavbarItemFacade() {
        }

        NavbarItemFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text"] }
        });
        NavbarItemFacade.prototype.__change_ids = function (c, id_mod) {
            var navitem = NavbarItemFacade.prototype.unwrapper(c);
            navitem.attr("dsrefid", navitem.attr("dsid")).attr("dsid", navitem.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        NavbarItemFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, NavbarItemFacade.prototype.wrapper(c), id_mod);
        };
        NavbarItemFacade.prototype.wrapper = function (c) {
            return c.parent();
        };
        NavbarItemFacade.prototype.unwrapper = function (c) {
            return c.children("a");
        };

        /* TextareaFacade */
        function TextareaFacade() {
        }

        TextareaFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text", "visible"] }
        });
        TextareaFacade.prototype.__change_ids = function (c, id_mod) {
            var text = TextareaFacade.prototype.unwrapper(c);
            text.attr("dsrefid", text.attr("dsid")).attr("dsid", text.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        TextareaFacade.prototype.set_text = function (c, val) {
            c.val(val);
        };
        TextareaFacade.prototype.get_text = function (c) {
            return c.val();
        };
        TextareaFacade.prototype.set_visible = function (c, val) {
            Facade.prototype.set_visible.call(this, TextareaFacade.prototype.wrapper(c), val);
        };
        TextareaFacade.prototype.get_visible = function (c) {
            return Facade.prototype.get_visible.call(this, TextareaFacade.prototype.wrapper(c));
        };
        TextareaFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, TextareaFacade.prototype.wrapper(c), id_mod);
        };
        TextareaFacade.prototype.wrapper = function (c) {
            return c.parent();
        };
        TextareaFacade.prototype.unwrapper = function (c) {
            return c.children("textarea");
        };

        /* LinkFacade */
        function LinkFacade() {
        }

        LinkFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text", "visible", "url"] }
        });
        LinkFacade.prototype.__change_ids = function (c, id_mod) {
            var link = LinkFacade.prototype.unwrapper(c);
            link.attr("dsrefid", link.attr("dsid")).attr("dsid", link.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        LinkFacade.prototype.set_url = function (c, val) {
            c.prop("href", val);
        };
        LinkFacade.prototype.get_url = function (c) {
            return c.prop("href");
        };
        LinkFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, LinkFacade.prototype.wrapper(c), id_mod);
        };
        LinkFacade.prototype.wrapper = function (c) {
            return c.parent();
        };
        LinkFacade.prototype.unwrapper = function (c) {
            return c.children("a");
        };

        /* ImageFacade */
        function ImageFacade() {
        }

        ImageFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["image", "visible"] }
        });
        ImageFacade.prototype.__change_ids = function (c, id_mod) {
            if (c.attr("dsid")) {
                c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            }
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        ImageFacade.prototype.set_image = function (c, val) {
            c.prop("src", val);
        };
        ImageFacade.prototype.get_image = function (c) {
            return c.prop("src");
        };
        ImageFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };

        /* SliderFacade */
        function SliderFacade() {
        }

        SliderFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["value", "visible"] }
        });
        SliderFacade.prototype.__change_ids = function (c, id_mod) {
            var slider = SliderFacade.prototype.unwrapper(c).clone().slider();
            slider.attr("dsrefid", slider.attr("dsid")).attr("dsid", slider.attr("dsid") + "_" + id_mod);
            Facade.prototype.set_children(c, slider.parent());
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        SliderFacade.prototype.set_value = function (c, val) {
            c.val(val);
        };
        SliderFacade.prototype.get_value = function (c) {
            return c.val().trim();
        };
        SliderFacade.prototype.set_visible = function (c, val) {
            Facade.prototype.set_visible.call(this, SliderFacade.prototype.wrapper(c), val);
        };
        SliderFacade.prototype.get_visible = function (c) {
            return Facade.prototype.get_visible.call(this, SliderFacade.prototype.wrapper(c));
        };
        SliderFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, SliderFacade.prototype.wrapper(c), id_mod);
        };
        SliderFacade.prototype.wrapper = function (c) {
            return c.parent().parent();
        };
        SliderFacade.prototype.unwrapper = function (c) {
            return c.children().children("input");
        };
        SliderFacade.prototype.refresh = function (c) {
            return c.slider("refresh");
        };

        /* ToggleFacade */
        function ToggleFacade() {
        }

        ToggleFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["toggled", "visible"] }
        });
        ToggleFacade.prototype.__change_ids = function (c, id_mod) {
            var toggle = ToggleFacade.prototype.unwrapper(c).clone();
            toggle.attr("dsrefid", toggle.attr("dsid")).attr("dsid", toggle.attr("dsid") + "_" + id_mod);
            Facade.prototype.set_children(c, toggle);
            toggle.flipswitch();
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        ToggleFacade.prototype.set_toggled = function (c, value) {
            var val;
            var bool = false;
            if (typeof value !== "string") bool = Boolean(value);
            else if (["on", "true"].indexOf(value.toLowerCase()) !== -1) bool = true;
            val = bool ? "on" : "off";
            c.val(val);
        };
        ToggleFacade.prototype.get_toggled = function (c) {
            return c.val().trim();
        };
        ToggleFacade.prototype.set_visible = function (c, val) {
            Facade.prototype.set_visible.call(this, ToggleFacade.prototype.wrapper(c), val);
        };
        ToggleFacade.prototype.get_visible = function (c) {
            return Facade.prototype.get_visible.call(this, ToggleFacade.prototype.wrapper(c));
        };
        ToggleFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, ToggleFacade.prototype.wrapper(c), id_mod);
        };
        ToggleFacade.prototype.wrapper = function (c) {
            return c.parent().parent();
        };
        ToggleFacade.prototype.unwrapper = function (c) {
            return c.children().children("select");
        };
        ToggleFacade.prototype.refresh = function (c) {
            return c.flipswitch("refresh");
        };

        /* RadioGroupFacade */
        function RadioGroupFacade() {
        }

        RadioGroupFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible", "selectedOption"] }
        });
        RadioGroupFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod).attr("_idx", "_" + id_mod);
            c.children().children().children().each(function () {
                var radio = findFacade($(this));
                $(this).replaceWith(radio.clone($(this).attr("appery_parentclone", true), id_mod));
            });
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        RadioGroupFacade.prototype.set_selectedOption = function (c, value, checked) {
            if(checked === undefined) checked = "checked"; //Set default value for "checked" argument
            c.find("input[value='" + value + "']").prop("checked", checked);
        };
        RadioGroupFacade.prototype.get_selectedOption = function (c) {
            var selectedValue = c.find("input[type='radio']:checked").val();
            return selectedValue && selectedValue.trim();
        };
        RadioGroupFacade.prototype.refresh = function (c) {
            return c.children().controlgroup("refresh")
        };
        RadioGroupFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };

        /* CheckboxGroupFacade */
        function CheckboxGroupFacade() {
        }

        CheckboxGroupFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible", "selectedOption"] }
        });
        CheckboxGroupFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            c.children().children().children().each(function () {
                var chekbox = findFacade($(this));
                $(this).replaceWith(chekbox.clone($(this).attr("appery_parentclone", true), id_mod));
            });
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        CheckboxGroupFacade.prototype.set_selectedOption = function (c, value, checked) {
            if(checked === undefined) checked = "checked"; //Set default value for "checked" argument
            c.find("input[value='" + value + "']").prop("checked", checked);
        };
        CheckboxGroupFacade.prototype.get_selectedOption = function (c) {
            var result = [];
            c.find("input[type='checkbox']:checked").each(function () {
                result.push($(this).val().trim());
            });
            return result;
        };
        CheckboxGroupFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };
        CheckboxGroupFacade.prototype.refresh = function (c) {
            return c.children().controlgroup("refresh")
        };

        /* CheckItemFacade */
        function CheckItemFacade() {
        }

        CheckItemFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text", "visible", "value"] }
        });
        CheckItemFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod).attr("_idx", "_" + id_mod);
            Facade.prototype.clone_children(c.find("label:first"), id_mod);
            var labelfor = c.find("label:first").clone();
            labelfor.attr("for", labelfor.attr("for") + "_" + id_mod);
            var input = c.find("input:first").clone();
            if (c.attr("appery_parentclone")) {
                c.removeAttr("appery_parentclone");
                input.attr("name", input.attr("name") + "_" + id_mod);
            }
            CheckItemFacade.prototype.set_children(c, labelfor);
            input.attr("id", input.attr("id") + "_" + id_mod).attr("_idx", "_" + id_mod);
            c.append(input);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        CheckItemFacade.prototype.set_text = function (c, val) {
            c.find("label:first").text(castValue(val));
        };
        CheckItemFacade.prototype.get_text = function (c) {
            return c.find("label:first").text().trim();
        };
        CheckItemFacade.prototype.set_value = function (c, val) {
            c.find("input:first").val(val);
        };
        CheckItemFacade.prototype.get_value = function (c) {
            return c.find("input:first").val().trim();
        };
        CheckItemFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };

        /* RadioButtonFacade */
        function RadioButtonFacade() {
        }

        RadioButtonFacade.prototype = Object.create(CheckItemFacade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text", "visible", "value", "selected"] }
        });
        RadioButtonFacade.prototype.set_selected = function (c, val) {
            c.find("input:first").prop("checked", val);
        };
        RadioButtonFacade.prototype.get_selected = function (c) {
            return c.find("input:first").prop("checked");
        };
        RadioButtonFacade.prototype.set_changed = function (c) {
            Facade.prototype.set_changed.call(this, c.closest("[data-role=fieldcontain]"));
        };

        /* CheckboxFacade */
        function CheckboxFacade() {
        }

        CheckboxFacade.prototype = Object.create(CheckItemFacade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text", "visible", "value", "checkboxSelected"]}
        });
        CheckboxFacade.prototype.set_checkboxSelected = function (c, val) {
            c.find("input:first").prop("checked", val);
        };
        CheckboxFacade.prototype.get_checkboxSelected = function (c) {
            return c.find("input:first").prop("checked");
        };
        CheckboxFacade.prototype.set_changed = function (c) {
            Facade.prototype.set_changed.call(this, c.closest("[data-role=fieldcontain]"));
        };

        /* SelectMenuFacade */
        function SelectMenuFacade() {
        }

        SelectMenuFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible", "selectedMenuItem"] }
        });
        SelectMenuFacade.prototype.__change_ids = function (c, id_mod) {
            var select = SelectMenuFacade.prototype.unwrapper(c).clone();
            select.attr("dsrefid", select.attr("dsid")).attr("dsid", select.attr("dsid") + "_" + id_mod);
            select.attr("id", select.attr("id") + "_" + id_mod).attr("_idx", "_" + id_mod);
            c.children().children("select").children().each(function () {
                var selectitemFacade = findFacade($(this));
                $(this).replaceWith(selectitemFacade.clone($(this), id_mod));
            });
            Facade.prototype.set_children(select, c.children().children("select").children());
            Facade.prototype.set_children(c, select);
            select.selectmenu();
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        SelectMenuFacade.prototype.set_selectedMenuItem = function (c, val) {
            var optionToSelect = c.find("option[value='" + val + "']:eq(0)");
            if (optionToSelect.length > 0) {
                c.find("[selected='selected']").removeAttr("selected");
                c.val(val);
                optionToSelect.attr("selected", "selected");
            } else {
                // During mapping selected value can be set before the options so setting must be deferred
                c.attr("data-deferred-value", val);
            }
        };
        SelectMenuFacade.prototype.get_selectedMenuItem = function (c) {
            var val = c.val();
            if(val === null) {
                return "";
            }
            else {
                return $.isArray(val) ? val.join(",") : val.trim();
            }
        };
        SelectMenuFacade.prototype.set_visible = function (c, val) {
            Facade.prototype.set_visible.call(this, SelectMenuFacade.prototype.wrapper(c), val);
        };
        SelectMenuFacade.prototype.get_visible = function (c) {
            return Facade.prototype.get_visible.call(this, SelectMenuFacade.prototype.wrapper(c));
        };
        SelectMenuFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, SelectMenuFacade.prototype.wrapper(c), id_mod);
        };
        SelectMenuFacade.prototype.refresh = function (c) {
            return c.selectmenu("refresh");
        };
        SelectMenuFacade.prototype.wrapper = function (c) {
            return c.parent().parent();
        };
        SelectMenuFacade.prototype.unwrapper = function (c) {
            return c.children().children("select");
        };

        /* SelectMenuItemFacade */
        function SelectMenuItemFacade() {
        }

        SelectMenuItemFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["label", "value", "visible"] }
        });
        SelectMenuItemFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        SelectMenuItemFacade.prototype.set_label = function (c, val) {
            c.text(castValue(val));
        };
        SelectMenuItemFacade.prototype.get_label = function (c) {
            return c.text().trim();
        };
        SelectMenuItemFacade.prototype.set_value = function (c, val) {
            c.val(val);
        };
        SelectMenuItemFacade.prototype.get_value = function (c) {
            return c.val().trim();
        };
        SelectMenuItemFacade.prototype.set_visible = function (c, val) {
            var visible = (typeof val === "boolean" && val) || (typeof val === "string" && JSON.parse(val.toLowerCase()));
            if (visible) {
                c.show();
            } else {
                c.hide();
            }
            if (c.text().trim() == "") {
                c.prop('disabled', !visible);
            } else {
                c.prop('disabled', false);
            }
        };
        SelectMenuItemFacade.prototype.get_visible = function (c) {
            return Facade.prototype.get_visible.call(this, c);
        };
        SelectMenuItemFacade.prototype.clone = function (c, id_mod) {
            var clone = Facade.prototype.clone.call(this, c, id_mod);
            clone.attr("data-placeholder", "false");
            return clone;
        };
        SelectMenuItemFacade.prototype.set_changed = function (c) {
            Facade.prototype.set_changed.call(this, c.parent());
        };

        /* GridFacade */
        function GridFacade() {
        }

        GridFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible"] }
        });
        GridFacade.prototype.__change_ids = function (c, id_mod) {
            var t = GridFacade.prototype.unwrapper(c);
            t.attr("dsrefid", t.attr("dsid")).attr("dsid", t.attr("dsid") + "_" + id_mod);
            t.children("tbody").children().each(function () {
                $(this).children().each(function () {
                    Facade.prototype.clone_children($(this).children('div'), id_mod);
                });
            });
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        GridFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, GridFacade.prototype.wrapper(c), id_mod);
        };
        GridFacade.prototype.wrapper = function (c) {
            return c.parent();
        };
        GridFacade.prototype.unwrapper = function (c) {
            return c.children("table");
        };
        GridFacade.prototype.set_visible = function (c, val) {
            Facade.prototype.set_visible.call(this, GridFacade.prototype.wrapper(c), val);
        };
        GridFacade.prototype.get_visible = function (c) {
            return Facade.prototype.get_visible.call(this, GridFacade.prototype.wrapper(c));
        };

        /* ListViewFacade */
        function ListViewFacade() {
        }

        ListViewFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible"] }
        });
        ListViewFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            c.children().each(function () {
                var listitem = $(this);
                if (!listitem.is("[dsid]")) {
                    if (listitem.attr("data-role") !== "list-divider") {
                        listitem = listitem.children().first();
                        var listitemFacade = findFacade(listitem);
                        listitem.parent().replaceWith(listitemFacade.clone(listitem, id_mod));
                    }
                } else {
                    var listitemFacade = findFacade(listitem);
                    listitem.replaceWith(listitemFacade.clone(listitem, id_mod));
                }
            });
            c.listview();
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        ListViewFacade.prototype.clone = function (c, id_mod) {
            if (c.attr("data-filter") === "true")  c.prev("form").remove();
            return Facade.prototype.clone.call(this, c, id_mod);
        };
        ListViewFacade.prototype.refresh = function (c) {
            return c.listview("refresh");
        };

        /* ListItemFacade */
        function ListItemFacade() {
        }

        ListItemFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false,
                value: ["text", "visible", "image", "counter_value", "counter_visible"] }
        });
        ListItemFacade.prototype.__change_ids = function (c, id_mod) {
            var uc = ListItemFacade.prototype.unwrapper(c);
            if (uc.length > 1) {
                uc.eq(0).attr("dsrefid", uc.eq(0).attr("dsid")).attr("dsid", uc.eq(0).attr("dsid") + "_" + id_mod);
                uc.eq(1).attr("dsrefid", uc.eq(1).attr("dsid")).attr("dsid", uc.eq(1).attr("dsid") + "_" + id_mod);
            } else {
                uc.attr("dsrefid", uc.attr("dsid")).attr("dsid", uc.attr("dsid") + "_" + id_mod);
            }
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        ListItemFacade.prototype.set_text = function (c, val) {
            c.children("h3").text(castValue(val));
        };
        ListItemFacade.prototype.get_text = function (c) {
            return c.children("h3").text().trim();
        };
        ListItemFacade.prototype.set_image = function (c, val) {
            c.children("img").prop("src", val);
        };
        ListItemFacade.prototype.get_image = function (c) {
            return c.children("img").prop("src");
        };
        ListItemFacade.prototype.set_visible = function (c, val) {
            Facade.prototype.set_visible.call(this, ListItemFacade.prototype.wrapper(c), val);
        };
        ListItemFacade.prototype.get_visible = function (c) {
            return Facade.prototype.get_visible.call(this, ListItemFacade.prototype.wrapper(c));
        };
        ListItemFacade.prototype.set_counter_value = function (c, val) {
            c.children("span").text(castValue(val));
        };
        ListItemFacade.prototype.get_counter_value = function (c) {
            return c.children("span").text().trim();
        };
        ListItemFacade.prototype.set_counter_visible = function (c, val) {
            Facade.prototype.set_visible.call(this, c.children("span"), val);
        };
        ListItemFacade.prototype.get_counter_visible = function (c) {
            return  c.children("span").is(":visible");
        };
        ListItemFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, ListItemFacade.prototype.wrapper(c), id_mod);
        };
        ListItemFacade.prototype.wrapper = function (c) {
            if (c[0].tagName === "LI") {
                return c;
            }
            return c.parent();
        };
        ListItemFacade.prototype.unwrapper = function (c) {
            if (c.children("a").length > 0) {
                return c.children("a");
            }
            return c;
        };
        
        ListItemFacade.prototype.set_changed = function (c) {
        	Facade.prototype.set_changed.call(this, c.closest("[data-role=listview]"));
        };

        /* ListItemStaticFacade */
        function ListItemStaticFacade() {
        }

        ListItemStaticFacade.prototype = Object.create(ListItemFacade.prototype, {
            _properties: { writable: false, configurable: false,
                value: ["text", "visible", "image", "counter_value", "counter_visible"] }
        });
        ListItemStaticFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            Facade.prototype.clone_children(c.children(), id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        ListItemStaticFacade.prototype.set_text = function (c, val) {
            c.find("h3").text(castValue(val));
        };
        ListItemStaticFacade.prototype.get_text = function (c) {
            return c.find("h3").text().trim();
        };
        ListItemStaticFacade.prototype.set_image = function (c, val) {
            if (c.children() && c.children().children("img")) {
                c.children().children("img").prop("src", val);
            }
        };
        ListItemStaticFacade.prototype.get_image = function (c) {
        };
        ListItemStaticFacade.prototype.set_counter_value = function (c, val) {
            c.children().children("span").text(castValue(val));
        };
        ListItemStaticFacade.prototype.get_counter_value = function (c) {
            return c.children().children("span").text().trim();
        };
        ListItemStaticFacade.prototype.set_counter_visible = function (c, val) {
            Facade.prototype.set_visible.call(this, c.children().children("span"), val);
        };
        ListItemStaticFacade.prototype.get_counter_visible = function (c) {
            return  c.children().children("span").is(":visible");
        };
        ListItemStaticFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };
        ListItemStaticFacade.prototype.unwrapper = function (c) {
            return c;
        };

        /*  CollapsibleSetFacade */
        function CollapsibleSetFacade() {
        }

        CollapsibleSetFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible"] }
        });
        CollapsibleSetFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            c.children().each(function () {
                var collapsblockFacade = findFacade($(this));
                $(this).replaceWith(collapsblockFacade.clone($(this), id_mod));
            });
            c.collapsibleset();
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        CollapsibleSetFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };
        CollapsibleSetFacade.prototype.refresh = function (c) {
            return c.collapsibleset("refresh");
        };

        /*  CollapsibleBlockFacade */
        function CollapsibleBlockFacade() {
        }

        CollapsibleBlockFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible"] }
        });
        CollapsibleBlockFacade.prototype.__change_ids = function (c, id_mod, options) {
            var cc = $('<div data-role="collapsible"><h3></h3><div></div></div>');
            cc.collapsible(options);
            Facade.prototype.__specialAtributesCopy.call(this, c, cc);
            cc.attr("dsrefid", cc.attr("dsid")).attr("dsid", cc.attr("dsid") + "_" + id_mod);
            var headerFacade = findFacade(c.children('h3'));
            var clonedHeader = headerFacade.clone(c.children('h3'), id_mod);
            Facade.prototype.set_children(cc.children('h3'), clonedHeader.children());
            Facade.prototype.__specialAtributesCopy(clonedHeader, cc.children('h3'));
            Facade.prototype.clone_children(c.children('div'), id_mod);
            Facade.prototype.set_children(cc.children('div'), c.children('div').children());
            Facade.prototype.__specialAtributesCopy(c.children('div'), cc.children('div'));
            return Facade.prototype.__change_ids.call(this, cc, id_mod);
        };
        CollapsibleBlockFacade.prototype.clone = function (c, id_mod) {
            var options = {expandedIcon:  c.parent().data("expandedIcon"),
                           collapsedIcon: c.parent().data("collapsedIcon")};

            return this.__change_ids(c.clone(), id_mod, options);
        };
        CollapsibleBlockFacade.prototype.set_changed = function (c) {
            Facade.prototype.set_changed.call(this, c.parent())
        };
        
        /*  CollapsibleBlockHeaderFacade */
        function CollapsibleBlockHeaderFacade() {
        };

        CollapsibleBlockHeaderFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text"] }
        });
        CollapsibleBlockHeaderFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            Facade.prototype.clone_children(c.children(), id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        CollapsibleBlockHeaderFacade.prototype.set_text = function (c, val) {
            var span = c.children().children("span");
            var collapseA = c.children("a");
            collapseA.text(castValue(val));
            collapseA.html(collapseA.html() + span[0].outerHTML);
        };
        CollapsibleBlockHeaderFacade.prototype.get_text = function (c) {
            return c.children().clone()    //clone the element
                .children() //select all the children
                .remove()   //remove all the children
                .end()  //again go back to selected element
                .text().trim();
        };
        CollapsibleBlockHeaderFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };
        CollapsibleBlockHeaderFacade.prototype.set_changed = function (c) {
            Facade.prototype.set_changed.call(this, c.parent().parent());
        };

        /* MediaFacade */
        function MediaFacade() {
        }

        MediaFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false,
                value: ["visible", "source1", "source2", "source3", "mimeType1", "mimeType2", "mimeType3"] }
        });
        MediaFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        MediaFacade.prototype.set_visible = function (c, val) {
            var visible = (typeof val === "boolean" && val) || (typeof val === "string" && JSON.parse(val.toLowerCase()));
            if (visible) {
                c.show();
                if (c.css('display') === 'none') c.css("display", "inline");
            } else {
                c.hide();
            }
        };
        MediaFacade.prototype.get_visible = function (c) {
            return Facade.prototype.get_visible.call(this, c);
        };
        MediaFacade.prototype.set_source1 = function (c, val) {
            c.children("source").eq(0).prop("src", val);
        };
        MediaFacade.prototype.get_source1 = function (c) {
            return c.children("source").eq(0).prop("src");
        };
        MediaFacade.prototype.set_source2 = function (c, val) {
            c.children("source").eq(1).prop("src", val);
        };
        MediaFacade.prototype.get_source2 = function (c) {
            return c.children("source").eq(1).prop("src");
        };
        MediaFacade.prototype.set_source3 = function (c, val) {
            c.children("source").eq(2).prop("src", val);
        };
        MediaFacade.prototype.get_source3 = function (c) {
            return c.children("source").eq(2).prop("src");
        };
        MediaFacade.prototype.set_mimeType1 = function (c, val) {
            c.children("source").eq(0).prop("type", val);
        };
        MediaFacade.prototype.get_mimeType1 = function (c) {
            return c.children("source").eq(0).prop("type");
        };
        MediaFacade.prototype.set_mimeType2 = function (c, val) {
            c.children("source").eq(1).prop("type", val);
        };
        MediaFacade.prototype.get_mimeType2 = function (c) {
            return c.children("source").eq(1).prop("type");
        };
        MediaFacade.prototype.set_mimeType3 = function (c, val) {
            c.children("source").eq(2).prop("type", val);
        };
        MediaFacade.prototype.get_mimeType3 = function (c) {
            return c.children("source").eq(2).prop("type");
        };
        MediaFacade.prototype.refresh = function (c) {
            return c.load();
        };
        MediaFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };

        /* VimeoFacade */
        function VimeoFacade() {
        }

        VimeoFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible", "videoId"] }
        });
        VimeoFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        VimeoFacade.prototype.set_videoId = function (c, val) {
            c.prop("src", c.prop("src").replace(/([^/]*)\?/g, val + "?"));
        };
        VimeoFacade.prototype.get_videoId = function (c) {
            return c.prop("src").match(/([^/]*)\?/g)[0].split("?")[0];
        };
        VimeoFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };


        /* YoutubeFacade */
        /* See jquery.ui.youtube.js / registerYoutubeComponentNow function for details
         * of Youtube component internals.
         */
        function YoutubeFacade() {
        }

        YoutubeFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible", "videoId", "startTime", "endTime"] }
        });
        YoutubeFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        YoutubeFacade.prototype.set_videoId = function (c, val) {
            var playerObject = c.data("youtube-player-object");
            if (playerObject !== undefined && playerObject.playerVars!== undefined) {
                playerObject.playerVars.videoId = val;
                applyYTPlayerVars(playerObject);
            }
            else {
                if (c.prop("tagName").toLowerCase() == "div") {
                    //Youtube player is uninitialized and is an empty div.
                    c.attr("videoid", val);
                }
                else {
                    //YouTube player is created without YouTube API but as simple IFrame
                    c.prop("src", c.prop("src").replace(/([^/]*)\?/g, val + "?"));
                }
            }
        };
        YoutubeFacade.prototype.get_videoId = function (c) {
            var playerObject = c.data("youtube-player-object");
            if (playerObject !== undefined && "getVideoData" in playerObject) {
                return playerObject.getVideoData().video_id;
            }
            else {
                if (c.prop("tagName").toLowerCase() == "div") {
                    //Youtube player is uninitialized and is an empty div.
                    return c.attr("videoid");
                }
                else {
                    //YouTube player is created without YouTube API but as simple IFrame
                    return c.prop("src").match(/([^/]*)\?/g)[0].split("?")[0];
                }
            }
        };
        YoutubeFacade.prototype.set_startTime = function (c, val) {
            var playerObject = c.data("youtube-player-object");
            if (playerObject !== undefined && playerObject.playerVars!== undefined) {
                playerObject.playerVars.start = parseInt(val);
                applyYTPlayerVars(playerObject);
            }
            else {
                if (c.prop("tagName").toLowerCase() == "div") {
                    var playerVars = ytParsePlayerVars(c.attr("playervars"));
                    playerVars.start = val;
                    c.attr("playervars", ytEncodePlayerVars(playerVars));
                }
                else {
                    if (c.prop("src").match(/start(=[^&]*)/g) !== null) {
                        c.prop("src", c.prop("src").replace(/start(=[^&]*)/g, "start=" + val));
                    } else {
                        var splitedurl = c.prop("src").split("?");
                        c.prop("src", splitedurl[0] + "?start=" + val + "&" + splitedurl[1]);
                    }
                }
            }
        };
        YoutubeFacade.prototype.get_startTime = function (c) {
            var playerObject = c.data("youtube-player-object");
            if (playerObject !== undefined && playerObject.playerVars!== undefined) {
                return playerObject.playerVars.start || 0;
            }
            else {
                if (c.prop("tagName").toLowerCase() == "div") {
                    var playerVars = ytParsePlayerVars(c.attr("playervars"));
                    return playerVars.start || 0;
                }
                else if (c.prop("src").match(/start(=[^&]*)/g) !== null) {
                    return c.prop("src").match(/start(=[^&]*)/g)[0].split("=")[1];
                }
                else return "";
            }
        };
        YoutubeFacade.prototype.set_endTime = function (c, val) {
            var playerObject = c.data("youtube-player-object");
            if (playerObject !== undefined && playerObject.playerVars !== undefined) {
                playerObject.playerVars.end = parseInt(val);
                applyYTPlayerVars(playerObject);
            }
            else {
                if (c.prop("tagName").toLowerCase() == "div") {
                    var playerVars = ytParsePlayerVars(c.attr("playervars"));
                    playerVars.end = val;
                    c.attr("playervars", ytEncodePlayerVars(playerVars));
                }
                else {
                    if (c.prop("src").match(/end(=[^&]*)/g) !== null) {
                        c.prop("src", c.prop("src").replace(/end(=[^&]*)/g, "end=" + val));
                    } else {
                        var splitedurl = c.prop("src").split("?");
                        c.prop("src", splitedurl[0] + "?end=" + val + "&" + splitedurl[1]);
                    }
                }
            }
        };
        YoutubeFacade.prototype.get_endTime = function (c) {
            var playerObject = c.data("youtube-player-object");
            if (playerObject !== undefined && playerObject.playerVars !== undefined) {
                return playerObject.playerVars.end || 0;
            }
            else {
                if (c.prop("tagName").toLowerCase() == "div") {
                    var playerVars = ytParsePlayerVars(c.attr("playervars"));
                    return playerVars.end || 0;
                }
                else if (c.prop("src").match(/end(=[^&]*)/g) !== null) {
                    return c.prop("src").match(/end(=[^&]*)/g)[0].split("=")[1];
                }
                else return "";
            }
        };
        YoutubeFacade.prototype.clone = function (c, id_mod) {
            /* According to YouTube API <div> element must be created and passed to YT.Player constructor. */
            //Copy attributes from 'c' element to <div>
            var dsid = c.attr("dsid"),
                _id = c.attr("id"),
                _class = c.attr("class"),
                videoId = c.attr("videoId") || "",
                playerVars = c.attr("playervars") || "";
            var html = '<div data-role="appery_youtube" id="'+_id+'" dsid="'+dsid+'" name="'+dsid+'" ' +
                'class="'+_class+'" videoId="'+videoId+'" playervars="'+playerVars+'"></div>';
            var div = $(html);
            this.__change_ids(div, id_mod);
            return Apperyio.registerYoutubeComponent(div.attr("id"), div);
        };

        function applyYTPlayerVars(playerObject) {
            //All user defined parameters are applyed to actual YouTube component here.
            // Depending on "loop" and "autoplay" flags different methods
            // of YT.Player class are invoked. Object "parameters" is passed to a method.
            // If YoutubePlayer is not initialized, then parameters are applyed ascyn
            // after "onReady" event is fired.
            var playerVars = playerObject.playerVars;
            var videoId = playerVars.videoId;
            var isPlayerReady = "loadVideoById" in playerObject;
            var autoplay = playerVars.autoplay == "1";
            var loop = playerVars.loop == "1";
            //var start = playerVars.start === undefined ?parseInt(playerVars.start);
            var parameters = {};
            var methodName;

            var callYouTubeApi = function(playerObject, methodName, objArg, loop) {
                playerObject[methodName] (objArg);
                playerObject.setLoop(loop);
            };

            //Prepare parameters and define "methodName"
            parameters.startSeconds = 100;
            parameters.endSeconds = 100;
            if (loop) {
                parameters.listType = "playlist";
                parameters.playlist = [videoId];

                if(autoplay) {
                    methodName = "loadPlaylist";
                }
                else {
                    methodName = "cuePlaylist";
                }
            }
            else {
                parameters.videoId = videoId;
                if(autoplay) {
                    methodName = "loadVideoById";
                }
                else {
                    methodName = "cueVideoById";
                }
            }
            if (!isNaN (parseInt(playerVars.start)) ) {
                parameters.startSeconds = parseInt(playerVars.start);
            }
            if (!isNaN (parseInt(playerVars.end)) ) {
                parameters.endSeconds = parseInt(playerVars.end);
            }

            //Actual API method invocation
            if (isPlayerReady) callYouTubeApi(playerObject, methodName, parameters, loop);
            else playerObject.addEventListener("onReady", function() {
                callYouTubeApi(playerObject, methodName, parameters, loop)
            });

            /* Decoding/encoding of string into/from object
             * String: "start=30;end=90;controls=0;autoplay=1;loop=0"
             * Object: {start:30, end:90, controls:0, autoplay:1, loop:0} */
            function ytParsePlayerVars(str) {
                var params = str.split(";");
                var playerVars = {};
                for (var i = 0; i < params.length; i++) {
                    var param = params[i].split("=");
                    playerVars[param[0]] = param[1];
                }
                return playerVars;
            }

            function ytEncodePlayerVars(obj) {
                var props = [];
                for(var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        props.push(key + '=' + obj[key]) ;
                    }
                }
                return props.join(";");
            }
        }


        /* HtmlFacade */
        function HtmlFacade() {
        }

        HtmlFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["rawHtml", "visible"] }
        });
        HtmlFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            Facade.prototype.clone_children(c, id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        HtmlFacade.prototype.set_rawHtml = function (c, val) {
            c.html(val);
        };
        HtmlFacade.prototype.get_rawHtml = function (c) {
            return c.html();
        };
        HtmlFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };

        /* CarouselFacade */
        function CarouselFacade() {
        }

        CarouselFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible"] }
        });
        CarouselFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            CarouselFacade.prototype.clone_children(c, id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        CarouselFacade.prototype.set_visible = function (c, val) {
            c = CarouselFacade.prototype.get_apperyobj(c);
            c = c.carouselRoot;
            Facade.prototype.set_visible.call(this, c, val);
        };
        CarouselFacade.prototype.get_visible = function (c) {
            c = CarouselFacade.prototype.get_apperyobj(c);
            c = c.carouselRoot;
            return Facade.prototype.get_visible.call(this, c);
        };
        CarouselFacade.prototype.refresh = function (c) {
            if (c.carouselRoot) return c.carouselRoot.carousel("refresh");
            return c.carousel("refresh");
        };
        CarouselFacade.prototype.clone = function (c, id_mod) {
            c = CarouselFacade.prototype.get_apperyobj(c);
            var dsidclone = c.carouselRoot.attr("dsid") + "_" + id_mod;
            Apperyio.__registerComponent(dsidclone,
                new Apperyio.ApperyMobileCarouselComponent(c.carouselRoot.attr("id") + "_" + id_mod, c.carouselOptions));
            var clonedCarousel = Apperyio(dsidclone);
            clonedCarousel.carouselRoot = Facade.prototype.clone.call(this, c.carouselRoot, id_mod);
            if (clonedCarousel.carouselRoot.children().last().hasClass("ui-carousel-indicators")) {
                clonedCarousel.carouselRoot.children().last().remove();
            }
            clonedCarousel.carouselRootId = clonedCarousel.carouselRoot.attr("id");
            clonedCarousel.initializeCarousel();
            return clonedCarousel.carouselRoot;
        };
        CarouselFacade.prototype.clone_children = function (c, id_mod) {
            c.children().first().children("[dsid]").each(function () {
                var carouselitem = findFacade($(this));
                if (carouselitem != null) $(this).replaceWith(carouselitem.clone($(this), id_mod));
            });
        };
        CarouselFacade.prototype.get_apperyobj = function (c) {
            if (!c.carouselRoot) {
                return Apperyio(c.attr("dsid"));
            }
            return c;
        };

        /* CarouselItemFacade */
        function CarouselItemFacade() {
        }

        CarouselItemFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["dataTitle", "dataImageUrl", "visible"] }
        });
        CarouselItemFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            Facade.prototype.clone_children(c.children().first(), id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        CarouselItemFacade.prototype.set_dataTitle = function (c, val) {
            c.attr("data-title", val);
        };
        CarouselItemFacade.prototype.get_dataTitle = function (c) {
            return c.attr("data-title");
        };
        CarouselItemFacade.prototype.set_dataImageUrl = function (c, val) {
            c.attr("data-image-url", val);
        };
        CarouselItemFacade.prototype.get_dataImageUrl = function (c) {
            return c.attr("data-image-url");
        };
        CarouselItemFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };
        CarouselItemFacade.prototype.set_changed = function (c) {
            return Facade.prototype.set_changed.call(this, c.parent().parent());
        };

        /* DatePickerFacade */
        function DatePickerFacade() {
        }

        DatePickerFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible", "defaultDateValue", "dateFormat"] }
        });
        DatePickerFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        DatePickerFacade.prototype.set_defaultDateValue = function (c, val) {
            c = DatePickerFacade.prototype.get_apperyobj(c);
            c.setProperty("defaultDateValue", val);
        };
        DatePickerFacade.prototype.get_defaultDateValue = function (c) {
            c = DatePickerFacade.prototype.get_apperyobj(c);
            return c.datepicker_dataPickerOptions.defaultDate;
        };
        DatePickerFacade.prototype.set_dateFormat = function (c, val) {
            c = DatePickerFacade.prototype.get_apperyobj(c);
            c.setProperty("dateFormat", val);
        };
        DatePickerFacade.prototype.get_dateFormat = function (c) {
            c = DatePickerFacade.prototype.get_apperyobj(c);
            return c.datepicker_dataPickerOptions.dateFormat;
        };
        DatePickerFacade.prototype.set_visible = function (c, val) {
            c = DatePickerFacade.prototype.get_apperyobj(c);
            c = c.datapickerRoot;
            Facade.prototype.set_visible.call(this, c, val);
        };
        DatePickerFacade.prototype.get_visible = function (c) {
            c = DatePickerFacade.prototype.get_apperyobj(c);
            c = c.datapickerRoot;
            return Facade.prototype.get_visible.call(this, c);
        };
        DatePickerFacade.prototype.clone = function (c, id_mod) {
            c = DatePickerFacade.prototype.get_apperyobj(c);
            var dsidclone = c.datapickerRoot.attr("dsid") + "_" + id_mod;
            Apperyio.__registerComponent(dsidclone,
                new Apperyio.ApperyMobileDatePickerComponent(c.datapickerRoot.attr("id") + "_" + id_mod, c.datepicker_dataPickerOptions));
            var clonedDatepicker = Apperyio(dsidclone);
            clonedDatepicker.datapickerRoot = Facade.prototype.clone.call(this, c.datapickerRoot, id_mod);
            return clonedDatepicker.datapickerRoot;
        };
        DatePickerFacade.prototype.get_apperyobj = function (c) {
            if (!c.datapickerRoot) {
                return Apperyio(c.attr("dsid"));
            }
            return c;
        };

        /* GoogleMapFacade */
        function GoogleMapFacade() {
        }

        GoogleMapFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false,
                value: ["visible", "latitude", "longitude", "address", "zoom", "showLocationMarker"] }
        });
        GoogleMapFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        GoogleMapFacade.prototype.set_latitude = function (c, val) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            c.options.latitude = val;
            c.options.address = '';
        };
        GoogleMapFacade.prototype.get_latitude = function (c) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            return c.options.latitude;
        };
        GoogleMapFacade.prototype.set_longitude = function (c, val) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            c.options.longitude = val;
            c.options.address = '';
        };
        GoogleMapFacade.prototype.get_longitude = function (c) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            return c.options.longitude;
        };
        GoogleMapFacade.prototype.set_address = function (c, val) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            c.options.address = val;
            if (c.delayOptions == null) {
                c.delayOptions = {};
                c.delayOptions.address = val;
            }
        };
        GoogleMapFacade.prototype.get_address = function (c) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            return c.options.address;
        };
        GoogleMapFacade.prototype.set_zoom = function (c, val) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            try {
                val = parseInt(val);
            } catch (e) {
                return;
            }
            c.gmap.set("zoom", val);
            c.options.zoom = val;
        };
        GoogleMapFacade.prototype.get_zoom = function (c) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            return c.options.zoom;
        };
        GoogleMapFacade.prototype.set_showLocationMarker = function (c, val) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            c.options.showLocationMarker = val;
        };
        GoogleMapFacade.prototype.get_showLocationMarker = function (c) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            return c.options.showLocationMarker;
        };
        GoogleMapFacade.prototype.set_visible = function (c, val) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            c = c.options.mapElement;
            Facade.prototype.set_visible.call(this, c, val);
        };
        GoogleMapFacade.prototype.get_visible = function (c) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            c = c.options.mapElement;
            return Facade.prototype.get_visible.call(this, c);
        };
        GoogleMapFacade.prototype.clone = function (c, id_mod) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            var dsidclone = c.options.mapElement.attr("dsid") + "_" + id_mod;
            var clonedOptions = jQuery.extend(true, {}, c.options);
            Apperyio.__registerComponent(dsidclone,
                new Apperyio.ApperyMapComponent(c.options.mapElement.attr("id") + "_" + id_mod, clonedOptions));
            var clonedMap = Apperyio(dsidclone);
            clonedMap.options.markerSourceName = c.options.markerSourceName + "_" + id_mod;
            clonedMap.options.mapElement = Facade.prototype.clone.call(this, c.options.mapElement, id_mod);
            clonedMap.renderMap();

            var clonedMarkers = Apperyio(c.options.markerSourceName).clone();
            clonedMarkers.attr("dsrefid", clonedMarkers.attr("dsid")).attr("dsid", clonedMarkers.attr("dsid") + "_" + id_mod);
            clonedMarkers.attr("id", clonedMarkers.attr("id") + "_" + id_mod);
            Facade.prototype.clone_children(clonedMarkers, id_mod);
            clonedMarkers.children("[apperytype='marker']").attr("rerender", dsidclone);
            Apperyio(c.options.markerSourceName).parent().append(clonedMarkers);
            return clonedMap.options.mapElement;
        };
        GoogleMapFacade.prototype.refresh = function (c) {
            c = GoogleMapFacade.prototype.get_apperyobj(c);
            return c.refresh();
        };
        GoogleMapFacade.prototype.get_apperyobj = function (c) {
            if (!c.options) {
                return Apperyio(c.attr("dsid"));
            }
            return c;
        };

        /* MarkerFacade */
        function MarkerFacade() {
        }

        MarkerFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false,
                value: ["text", "visible", "latitude", "longitude", "address"] }
        });
        MarkerFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        MarkerFacade.prototype.set_text = function (c, val) {
            c.attr("text", val);
        };
        MarkerFacade.prototype.get_text = function (c) {
            return c.attr("text");
        };
        MarkerFacade.prototype.set_latitude = function (c, val) {
            c.attr("latitude", val);
        };
        MarkerFacade.prototype.get_latitude = function (c) {
            return c.attr("latitude");
        };
        MarkerFacade.prototype.set_longitude = function (c, val) {
            c.attr("longitude", val);
        };
        MarkerFacade.prototype.get_longitude = function (c) {
            return c.attr("longitude");
        };
        MarkerFacade.prototype.set_address = function (c, val) {
            c.attr("address", val);
        };
        MarkerFacade.prototype.get_address = function (c) {
            return c.attr("address");
        };
        MarkerFacade.prototype.set_visible = function (c, val) {
            c.attr("rendered", val);
        };
        MarkerFacade.prototype.get_visible = function (c) {
            return (c.attr("rendered") === "true");
        };
        MarkerFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };

        /* CustomComponentFacade */
        function CustomComponentFacade() {
        }

        CustomComponentFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["visible"] }
        });
        CustomComponentFacade.prototype.__change_ids = function (c, id_mod) {
            c.attr("dsrefid", c.attr("dsid")).attr("dsid", c.attr("dsid") + "_" + id_mod);
            Facade.prototype.clone_children(c, id_mod);
            return Facade.prototype.__change_ids.call(this, c, id_mod);
        };
        CustomComponentFacade.prototype.clone = function (c, id_mod) {
            return Facade.prototype.clone.call(this, c, id_mod);
        };

        /* HeaderFacade */
        function HeaderFacade() {
        }

        HeaderFacade.prototype = Object.create(Facade.prototype, {
            _properties: { writable: false, configurable: false, value: ["text"] }
        });

        function castValue(val) {
            if (val === undefined) {
                return "undefined";
            }
            if (val === null) {
                return "null";
            }
            return val;
        }

        /* Resulting facade register */
        return {
            "buttongroup": new ButtonGroupFacade(),
            "button": new ButtonFacade(),
            "label": new LabelFacade(),
            "input": new InputFacade(),
            "searchbar": new SearchFacade(),
            "link": new LinkFacade(),
            "textarea": new TextareaFacade(),
            "grid": new GridFacade(),
            "radiogroup": new RadioGroupFacade(),
            "radiobutton": new RadioButtonFacade(),
            "checkboxgroup": new CheckboxGroupFacade(),
            "checkbox": new CheckboxFacade(),
            "selectmenu": new SelectMenuFacade(),
            "selectmenuitem": new SelectMenuItemFacade(),
            "slider": new SliderFacade(),
            "toggle": new ToggleFacade(),
            "image": new ImageFacade(),
            "navbar": new NavbarFacade(),
            "navbaritem": new NavbarItemFacade(),
            "spacer": new SpacerFacade(),
            "video": new MediaFacade(),
            "audio": new MediaFacade(),
            "html": new HtmlFacade(),
            "listview": new ListViewFacade(),
            "listitem": new ListItemFacade(),
            "listitemstatic": new ListItemStaticFacade(),
            "collapsibleset": new CollapsibleSetFacade(),
            "collapsibleblock": new CollapsibleBlockFacade(),
            "collapsibleblockheader": new CollapsibleBlockHeaderFacade(),
            "vimeo": new VimeoFacade(),
            "youtube": new YoutubeFacade(),
            "carousel": new CarouselFacade(),
            "carouselitem": new CarouselItemFacade(),
            "datepicker": new DatePickerFacade(),
            "googlemap": new GoogleMapFacade(),
            "marker": new MarkerFacade(),
            "customcomponent": new CustomComponentFacade(),
            "header": new HeaderFacade()
        };
    })();

    var findComponent = function (component) {
        var result;

        if (!component) {
            throw new Error("c15r: component is undefined");
        }

        if (typeof component === "string") {
            result = Apperyio(component);
        } else if (component instanceof jQuery) {
            result = component;
        } else {
            result = jQuery(component);
        }

        if (result.length === 0) {
            throw new Error("c15r: component not found");
        }

        return result;
    };

    var findFacade = function (c) {
        var f;

        if (c.DOM_ELEMENT_ATTRIBUTES != null) {
            if (c.carouselRoot != null) return facades.carousel;
            else if (c.datapickerRoot != null) return facades.datepicker;
            else if (c.options != null && c.options.mapElement != null) return facades.googlemap;
        }

        switch (c[0].tagName) {
            case "INPUT":
                if (c.is("[type='text']") && c.is("[data-type='search']"))  f = facades.searchbar;
                else if (c.is("[type='number']") && c.hasClass("ui-slider-input"))  f = facades.slider;
                else f = facades.input;
                break;
            case "TEXTAREA":
                f = facades.textarea;
                break;
            case "BUTTON":
                f = facades.button;
                break;
            case "A":
                if (c.is("[data-role='button']")) f = facades.button;
                else if (c.parent().parent().is("[data-role='listview']")) f = facades.listitem;
                else if (c.parent().parent().parent().is("[data-role='navbar']")) f = facades.navbaritem;
                else if (c.hasClass("ui-link")) f = facades.link;
                break;
            case "DIV":
                if (c.is("[data-role='appery_label']")) f = facades.label;
                else if (c.is("[data-role='collapsible-set']")) f = facades.collapsibleset;
                else if (c.is("[data-role='controlgroup']")) f = facades.buttongroup;
                else if (c.is("[data-role='collapsible']")) f = facades.collapsibleblock;
                else if (c.is("[data-role='fieldcontain']") &&
                    c.find("input[type='radio']").length !== 0) f = facades.radiogroup;
                else if (c.is("[data-role='fieldcontain']") &&
                    c.find("input[type='checkbox']").length !== 0) f = facades.checkboxgroup;
                else if (c.is("[data-role='navbar']")) f = facades.navbar;
                else if (c.is("[data-role='appery_spacer']")) f = facades.spacer;
                else if (c.is("[data-role='appery_html']")) f = facades.html;
                else if (c.is("[data-role='__carousel']")) f = facades.carousel;
                else if (c.is("[data-role='appery_carouselitem']")) f = facades.carouselitem;
                else if (c.is("[apperyclass='datepicker']")) f = facades.datepicker;
                else if (c.is("[data-role='appery_googlemap']")) f = facades.googlemap;
                else if (c.is("[apperytype='mobiletemplate']")) f = facades.customcomponent;
                else if (c.is("[data-role='appery_youtube']")) f = facades.youtube;
                break;
            case "SPAN":
                if (c.children("div").hasClass("ui-radio") ||
                    c.children("input").is("[type='radio']")) f = facades.radiobutton;
                else if (c.children("div").hasClass("ui-checkbox") ||
                    c.children("input").is("[type='checkbox']")) f = facades.checkbox;
                else if (c.is("[data-role='appery_html']")) f = facades.html;
                break;
            case "TABLE":
                f = facades.grid;
                break;
            case "SELECT":
                if (c.is("[data-role='flipswitch']"))  f = facades.toggle;
                else if (c.is("[data-role='appery_selectmenu']")) f = facades.selectmenu;
                break;
            case "OPTION":
                if (c.parent().is("[data-role='appery_selectmenu']")) f = facades.selectmenuitem;
                break;
            case "IMG":
                f = facades.image;
                break;
            case "VIDEO":
                f = facades.video;
                break;
            case "AUDIO":
                f = facades.audio;
                break;
            case "UL":
                if (c.is("[data-role='listview']")) f = facades.listview;
                break;
            case "OL":
                if (c.is("[data-role='listview']")) f = facades.listview;
                break;
            case "LI":
                if (c.is("[data-role='list-divider']")) f = facades.listitem;
                else if (c.children().hasClass("ui-li-static-container")) f = facades.listitemstatic;
                else if (c.is("[apperytype='marker']")) f = facades.marker;
                break;
            case "H3":
                if (c.parent().is("[data-role='collapsible']")) f = facades.collapsibleblockheader;
                break;
            case "H1":
                if (c.parent().is("[data-role='header']")) f = facades.header;
                break;
            case "FORM":
                if (c.is("[data-role='appery_html']")) f = facades.html;
                break;
            case "IFRAME":
                if (c.is("[data-role='appery_vimeo']")) f = facades.vimeo;
                else if (c.is("[data-role='appery_youtube']")) f = facades.youtube;
                break;
        }
        return f;
    };

    return function (id, action, attr, value) {
        //console.debug(arguments);
        var component = findComponent(id),
            facade;
        if (action === "unwrapper" && !component.is("[dsid]")) {
            facade = findFacade(component.find("[dsid]:first"));
        } else {
            facade = findFacade(component);
        }
        if (facade) {
            // clone
            if (action === "clone") {
                if (attr !== undefined) {
                    return facade.clone(component, attr);
                } else {
                    throw new Error("c15r: clone, id modifier is empty");
                }
            } else if (action === "refresh") {
                return facade.refresh(component);
            } else if (action === "wrapper") {
                return facade.wrapper(component);
            } else if (action === "unwrapper") {
                return facade.unwrapper(component);
            } else if (action === "set_changed") {
            	return facade.set_changed(component);
            }
            // set & get attr
            if (facade.has(attr)) {
                var method = action + "_" + attr;
                if (facade[method] !== undefined) {
                    return facade[method](component, value);
                } else {
                    throw new Error("c15r: undefined action - " + method);
                }
            } else {
                throw new Error("c15r: undefined attribute - " + attr);
            }
        } else {
            throw new Error("c15r: component facade not found");
        }
    };
})();
