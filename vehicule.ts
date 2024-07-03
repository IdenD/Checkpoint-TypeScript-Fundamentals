interface Vehicule {
    faire: string;
    modèle: string;
    année: number;
    démarrer(): void;
}

class Car implements Vehicule {
    faire: string;
    modèle: string;
    année: number;

    constructor(faire: string, modèle: string, année: number) {
        this.faire = faire;
        this.modèle = modèle;
        this.année = année;
    }

    démarrer(): void {
        console.log(`Le moteur de la voiture ${this.faire} ${this.modèle} a démarré.`);
    }
}


let maVoiture = new Car("Toyota", "Camry", 2022);
maVoiture.démarrer();
