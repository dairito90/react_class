// This keyboard review
// implicit binding (left of the dot at cal time)
// sxplicit bindind
// window binding


// where is the function is invoked?

//Implicit binding
var me = {
    name:'dairon',
    age:767,
    sayName: function (){
        console.log(this.name);
    }
};
me.sayName();


var sayNameMixin= function (obj) {
    obj.sayName = function() {
        console.log(this.name);
    }
};

me.sayName();


var me2 = {
    name:'dairito',
    age:26
};


var you = {
    name:'juli',
    age:24
}


sayNameMixin(me2);
sayNameMixin(you);
me.sayName();
you.sayName();




// Explicit binding


var sayName = function (lang1,lang2,lang3) {
    console.log('My name is dairitooo' + this.name + 'and I know' + lang1 + ','
    + lang2 + ',' + lang3);
}

var juli = {
    name:'juli',
    age:24
};

var languages = ['Javascript', 'Ruby', 'Python'];
sayName.call(juli, languages[0], languages[1],languages[2]);
sayName.apply(juli, languages);
var newFunc = sayName.bind(juli, languages[0], languages[1], languages[2]);
console.log('Invoke it later');
newFunc();



// Window binding
// If not binding is compiled , or explicit,  then the content defaults to the window
// object
// 'strict mode'
