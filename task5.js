class ElectricalAppliance{
    constructor(){
        this.name = 'ElectricalAppliance';
        this.power = 0;
        this.isTrun = false;
    }
   
}

class Teapot extends ElectricalAppliance{
    constructor(name){
        super();
        this.name = name;
        this.power = 100;
    }
   
}

class DeskLamp extends ElectricalAppliance{
    constructor(name){
        super();
        this.name = name;
        this.power = 20;
    }
   
}



teapot = new Teapot('мега чайник');
deskLamp = new DeskLamp('просто лампа');
console.log(teapot.power + deskLamp.power)


