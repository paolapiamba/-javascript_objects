function Hero(name){
    this.name = name 
    this.sayName = function(){
        //return 'Mi nombre es' + this .name
        return `Mi nombre es ${this.name}`
    
    }
}


const names =['chapullin' ,'stuar' ,'kevin', 'doctor nefario' ,'vector' ]

const heroes =[]
names.forEach((name) =>{
heroes .push(new Hero(name))

})
heroes.forEach((hero) => {
    console.log(hero.sayName());
})