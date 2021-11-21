
class  User {
constructor(name,surname,secondname,secondsurname ){
this.rate = 0;
this.days = 0;
this.name = name;
this.surname = surname;
this.secondname =secondname;
this.secondsurname =secondsurname;
this.secondrate=0;
this.seconddays=0;
}
setSecondrate(secondrate){
if(secondrate>0 && secondrate<20){
this._secondrate =secondrate;
}
}
getsecondrate(){
return this._secondrate
}
setseconddays(seconddays){
if(seconddays>0&&seconddays<14){
this._seconddays=seconddays;}
}
getseconddays(){
return this._seconddays;
}
setRate(rate){
if (rate>0 && rate<70){
this._rate= rate;
}
}
getRate(){
    return this._rate
}
setDays(days){
if( days>0 && days<5){
this._days=days;
}
}
getDays(){
return this._days
}
getFullName(){return this.name +' '+this.surname+' '+this._rate+' '+this._days}
getSalary(){return this. _rate * this._days;}
getSecondfullName(){return this.secondname+' '+this.secondsurname+' '+this._secondrate+' '+this._seconddays}
getSecondsalary(){return this._secondrate * this._seconddays}
}
let user = new User('Василий','Иванович','Эдуард','Руднев');
user.setRate (60); 
user.setDays  (4);
user.setSecondrate(18);
user.setseconddays(7);

console.log(user.getFullName());
console.log(user.getSalary());
console.log(user.getSecondfullName());
console.log(user.getSecondsalary());


class myString{
constructor(str){
this.str=str;

}
getRevers(){return this.str}
getucFirst(){return this.str[0].toUpperCase() + this.str.slice(0);}
getucWords(){return this.str[0].toUpperCase()+this.str.split(0)+' '+this.str[0].toUpperCase()+this.str.split(0)+' '+this.str[0].toUpperCase()+this.str.split(0);}
}
var str = new myString('askde');
console.log(str.getRevers());
console.log(str.getucFirst(''));
console.log(str.getucWords(''));