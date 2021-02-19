class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.004
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
        this.bodyA=bodyA
        this.bodyB=bodyB
    }
    display(){
        line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y)
    }
}