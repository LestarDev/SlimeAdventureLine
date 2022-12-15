export interface Weapon {
    animationName: string;

}

class SlimePlayer{
    private HP: number;
    private ATK: number;

    public lvl: number;

    constructor(HP: number, ATK: number){
        this.HP=HP;
        this.ATK=ATK;
        this.lvl=0;
    }
}

export default SlimePlayer