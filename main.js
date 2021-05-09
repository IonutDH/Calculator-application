"use strict";

function help(){
    var cowsay = require("cowsay");
    console.log(cowsay.say({
       text: "Calculator, Author: Ioan"
    }));
    console.log("-");
    console.log("+");
    console.log("abs");
    console.log("cos");
    console.log("div");
    console.log("help");
    console.log("max");
    console.log("min");
    console.log("mod");
    console.log("mul");
    console.log("pwr");
    console.log("rev");
    console.log("sin");
    console.log("sort");
    console.log("sq");
    console.log("uniq");
}

function sum(a){
    var b = 0;
    if(a.length > 2){
        for(var i = 0; i < a.length - 1; i++){
            var c = parseFloat(a[i]);
            b += c;
        }
        console.log(b);
    }else{
        console.log("ERROR: + command takes at least 2 arguments");
    }
}
function dif(a){
    var b = parseFloat(a[0]);
    if(a.length > 2){
        for(var i = 1; i < a.length - 1; i++){
            var c = parseFloat(a[i]);
            b = b-c;
        }
        console.log(b);
    }else{
        console.log("ERROR: - command takes at least 2 arguments");
    }
}

function mul(a){
    var b = 1;
    if(a.length > 2){
        for(var i = 0; i < a.length - 1; i++){
            var c = parseFloat(a[i]);
            b *= c;
        }
        console.log(b);
    }else{
        console.log("ERROR: mul command takes at least 2 arguments");
    }
}

function div(a){
    var b = parseFloat(a[0]);
    if(a.length > 2){
        for(var i = 1; i < a.length - 1; i++){
            var c = parseFloat(a[i]);
            b = b/c;
        }
        console.log(b);
    }else{
        console.log("ERROR: div command uses at least 2 parameters");
    }
}

function mod(a){
    if(a.length > 2){
        var f = parseFloat(a[0]);
        var s = parseFloat(a[1]);
        console.log(f%s);
    }else{
        console.log("ERROR: mod command uses at least 2 parameters");

    }
}

function sq(a){
    if(a.length > 1){
        for(var i = 0; i < a.length - 1; i++){
            var b = parseFloat(a[i]);
            var res = Math.sqrt(b);
            console.log(res);
        }
    }else{
        console.log("ERROR: sq command uses at least 1 parameters");
    }
}

function abs(a){
    if(a.length > 1){
        for(var i = 0; i < a.length - 1; i++){
            var f = parseFloat(a[i]);
            console.log(Math.abs(f));
        }
    }else{
        console.log("ERROR: abs command uses at least 1 parameters");
    }
}

function pwr(a){
    if(a.length > 2){
        var f = parseFloat(a[0]);
        var s = parseFloat(a[1]);
        console.log(Math.pow(f,s));
    }else{
        console.log("ERROR: pwr command uses at least 2 parameters");
    }
}

function sortnr(a, b){
    return a - b;
}

function sort(a){
    var list = [];
    if(a.length > 1){
        for(var i = 0; i < a.length - 1; i++){
            var b = parseFloat(a[i]);
            list.push(b);
        }
        list.sort(sortnr);
        var c = list.join(" ");
        console.log(c);
    }else{
        console.log("ERROR: sort command uses at least 1 parameters");
    }
}

function rev(a){
    var list = [];
    if(a.length > 1){
        for(var i = 0; i < a.length - 1; i++){
            var b = parseFloat(a[i]);
            list.push(b);
        }
        list.reverse();
        var c = list.join(" ");
        console.log(c);
    }else{
        console.log("ERROR: rev command uses at least 1 parameters");
    }
}

function uniq(a){
    var list = [];
    if(a.length > 1){
        for (var i = 0; i < a.length - 1; i++){
            var b = parseFloat(a[i]);
            if(list.indexOf(b) === -1){
                list.push(b);
            }
        }
        var c = list.join(" ");
        console.log(c);
    }else{
        console.log("ERROR: uniq command uses at least 1 parameters");
    }
}

function max(a){
    var list = [];
    if(a.length > 2){
        for(var i = 0; i < a.length - 1; i++){
            var b = parseInt(a[i]);
            list.push(b);
        }
    }else{
        console.log("There must be at least 2 parameters");
    }
    console.log(Math.max(...list));
}

function min(a){
    var list = [];
    if(a.length > 2){
        for(var i = 0; i < a.length - 1; i++){
            var b = parseInt(a[i]);
            list.push(b);
        }
    }else{
        console.log("There must be at least 2 parameters");
    }
    console.log(Math.min(...list));
}

function cos(a){
    if(a.length > 2){
        console.log("There must be maximum one parameter");
    }else{
        var b = parseInt(a[0]);
        console.log(Math.cos(b));
    }
}

function sin(a){
    if(a.length > 2){
        console.log("There must be maximum one parameter");
    }else{
        var b = parseInt(a[0]);
        console.log(Math.sin(b));
    }
}

function complexSum(a){
    var re = 0;
    var im = 0;
    for(var i = 0; i < a.length - 2; i++){
        if(i % 2 == 0){
            re += parseFloat(a[i]);
        }else{
            im += parseFloat(a[i]);
        }
    }
    if(im < 0){
        console.log(re + "" + im + "i");
    }else if(im === 0){
        console.log(a);
    }else{
        console.log(re + "+" + im + "i");
        }
}

function complexDif(a){
    var re = parseFloat(a[0]);
    var im = parseFloat(a[1]);
    for(var i = 2; i < a.length - 2; i++){
        if(i % 2 == 0){
            re -= parseFloat(a[i]);
        }else{
            im -= parseFloat(a[i]);
        }
    }
    if(im < 0){
        console.log(re + "" + im + "i");
    }else if(im === 0){
        console.log(a);
    }else{
        console.log(re + "+" + im + "i");
        }
}

function complexMul(a){
    var re = 1;
    var im = 1;
        im = parseFloat(a[0]) * parseFloat(a[3]) + parseFloat(a[1]) * parseFloat(a[2]);
        re = parseFloat(a[0] * parseFloat(a[2]) - parseFloat(a[1]) * parseFloat(a[3]));
    if(im < 0){
        console.log(re + "" + im + "i");
    }else if(im === 0){
        console.log(a);
    }else{
        console.log(re + "+" + im + "i");
        }
}

    process.argv.splice(0,2);
    var param = process.argv;
    var opr = param[param.length - 1];
    var opr2 = param[param.length - 2];
    switch(opr){
        case undefined:
            var cowsay = require("cowsay");
            console.log(cowsay.say({
            text: "Calculator, Author: Ioan"
            }));
            console.log("-");
            console.log("+");
            console.log("abs");
            console.log("cos");
            console.log("div");
            console.log("help");
            console.log("max");
            console.log("min");
            console.log("mod");
            console.log("mul");
            console.log("pwr");
            console.log("rev");
            console.log("sin");
            console.log("sort");
            console.log("sq");
            console.log("uniq");
            break;
        
        case "help":
            help();
            break;
        
        case "+":
            if(opr2 === "complex"){
                complexSum(param);
            }else{
                sum(param);
            }
            break;

        case "-":
            if(opr2 === "complex"){
                complexDif(param);
            }else{
                dif(param);
            }
            break;

        case "mul":
            if(opr2 === "complex"){
                complexMul(param);
            }else{
                mul(param);
            }
            break;
        
        case "div":
            div(param);
            break;

        case "mod":
            mod(param);
            break;

        case "sq":
            sq(param);
            break;

        case "abs":
            abs(param);
            break;

        case "pwr":
            pwr(param);
            break;

        case "sort":
            sort(param);
            break;

        case "rev":
            rev(param);
            break;

        case "uniq":
            uniq(param);
            break;

        case "max":
            max(param);
            break;
        
        case "min":
            min(param);
            break;

        case "cos":
            cos(param);
            break;

        case "sin":
            sin(param);
            break;


        default:
            console.log("ERROR: this command does not exist, use help to see available commands");
    }
