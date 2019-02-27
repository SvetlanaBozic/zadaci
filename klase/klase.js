var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jezik = /** @class */ (function () {
    function Jezik(ime_pisma, broj_govorornika) {
        this.ime_pisma = ime_pisma;
        this.broj_govorornika = broj_govorornika;
    }
    return Jezik;
}());
var Japanski = /** @class */ (function (_super) {
    __extends(Japanski, _super);
    function Japanski() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Japanski.prototype.predstavljanje = function (ime) {
        alert('私の名前を挨拶するのは' + ime + '。お会いできてうれしいです。');
    };
    return Japanski;
}(Jezik));
var Srpski = /** @class */ (function (_super) {
    __extends(Srpski, _super);
    function Srpski() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Srpski.prototype.predstavljanje = function (ime) {
        alert('Pozdrav moje ime je ' + ime + ' i drago mi je da te upoznajem.');
    };
    return Srpski;
}(Jezik));
var j = new Japanski('Kanđi, Hiragana, Katakana', 125);
var s = new Srpski('Ćirilica, Latinica', 12);
j.predstavljanje('Amaterasu');
s.predstavljanje('Dušan');
