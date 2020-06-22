/* 1.Composición:  Se refiere a un tipo de asociación que indica relaciones de pertenencia 
                   entre clases y una depende (o es parte) de la otra.
                   Cuando se elimina el contenedor, el contenido también es eliminado.
                   Se representa en UML como un rombo negro.

     Agregación:   Se refiere a un tipo de asociación que indica que una clase pertenece a otra,
                   pero su existencia no está totalmente ligada a la clase a la que está ligada.
                   Cuando el contenedor es eliminado, el contenido usualmente no es destruido.
                   Se representa en UML como un rombo blanco.
              

2. El polimorfismo es una propiedad de la programmación orientada a objetos, la cual 
nos permite utilizar un mismo atributo o comportamiento en distintas clases y que 
éstas puedan reaccionar de forma distinta a un mismo llamado.

3. https://drive.google.com/file/d/1d5SaY9QPucDnKIfR5QFowTMwKN1W_QYS/view?usp=sharing

  En un videojuego por turnos hay 3 clases de personajes: Magos, guerreros y arqueros. Aunque los tres pueden moverse y usar 
  pociones de formas similares, cada uno ataca a distinta distancia y a algunos les toma un turno más. Los guerreros golpean 
  cuerpo a cuerpo, los magos golpean a 2 espacios de distancia y los arqueros también golpean a 2 de distancia pero les toma 
  un turno más realizar esta acción.

4. */

class Personaje {
    constructor (nombre, saludtotal, saludactual, danioataque, rangoataque, tiempoataque) {

        this.nombre = nombre;
        this.saludtotal = saludtotal;
        this.saludactual = saludactual;
        this.danioataque = danioataque;
        this.rangoataque = rangoataque;
        this.tiempoataque = tiempoataque;
        }
        atacar (){
            return `Este personaje:"${this.nombre}" no tiene definido su tipo de ataque.`
        }
        mover (){
            return `${this.nombre} se acercó un espacio al enemigo.`
        }
        usarPocion(){
            this.saludactual = this.saludactual + 20
            if (this.saludactual >= this.saludtotal) {
                this.saludactual = this.saludtotal
            }
            
            return `${this.nombre} se curó 20HP y ahora tiene ${this.saludactual}/${this.saludtotal}HP.`
        }
    }


class Mago extends Personaje {
    constructor(nombre, saludtotal, saludactual, danioataque, rangoataque, tiempoataque) {
        super(nombre, saludtotal, saludactual, danioataque)
        this.rangoataque = 2;
        this.tiempoataque = 1; 
    }
    atacar (){
        return `El mago ${this.nombre} realizó un ataque mágico e hizo ${this.danioataque} de daño al enemigo en el primer turno y ${this.danioataque} en el segundo.`;
    }
}

class Arquero extends Personaje {
    constructor(nombre, saludtotal, saludactual, danioataque, rangoataque, tiempoataque) {
        super(nombre, saludtotal, saludactual, danioataque)
        this.rangoataque = 2;
        this.tiempoataque = 2;
    }
    atacar (){
        return `El Arquero ${this.nombre} cargó su ataque en el primer turno y atacó en el segundo e hizo ${this.danioataque}.`;
    }
}

class Guerrero extends Personaje {
    constructor(nombre, saludtotal, saludactual, danioataque, rangoataque, tiempoataque) {
        super(nombre, saludtotal, saludactual, danioataque)
        this.rangoataque = 1;
        this.tiempoataque = 1;
    }
    atacar (){
        return `El Guerrero ${this.nombre} tomó un turno para acercarse al enemigo y en el siguiente turno realizó ${this.danioataque} de daño.`;
    }
}

console.info("----------------------------------------")
console.info("Se inició un ataque a 2 espacios de distancia:")
const m1 = new Mago ("Mateo", 50, 45, 6, 2, 1)
const atkMago = m1.atacar()
console.info(atkMago)
const curacion = m1.usarPocion()
console.info(curacion)
console.info("----------------------------------------")

console.info("Se inició un ataque a 2 espacios de distancia:")
const g1 = new Guerrero ("Gastón", 60, 10, 4, 1, 1)
const ataqueGuerrero = g1.atacar()
console.info(ataqueGuerrero)
const curacionGuer = g1.usarPocion()
console.info(curacionGuer)
console.info("----------------------------------------")

console.info("Se inició un ataque a 2 espacios de distancia:")
const a1 = new Arquero ("Adrián", 30, 25, 10, 1, 2)
const ataqueArq = a1.atacar()
console.info(ataqueArq)
console.info("----------------------------------------")

console.info("Se inició un ataque a 2 espacios de distancia:")
const p1 = new Personaje ("Pablo", 30, 25, 10, 1, 2)
const ataquePers = p1.atacar()
console.info(ataquePers)
console.info("----------------------------------------")
