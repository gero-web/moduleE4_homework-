function ElectricalAppliance(){
    this.name = 'ElectricalAppliance';
    this.power = 0;
    this.isTrun = false;
}

function Teapot(name){
    this.name = name;
    this.power = 100;
}

function DeskLamp(name){
    this.name = name;
    this.power = 20;
}

Teapot.prototype = new  ElectricalAppliance();
DeskLamp.prototype = new ElectricalAppliance();

teapot = new Teapot('мега чайник');
deskLamp = new DeskLamp('просто лампа');
console.log(teapot.power + deskLamp.power)


