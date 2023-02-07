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
        this.lvl=1;
    }
}

export const createSlimePlayer = (HP: number=100, ATK: number=10) => {
    return new SlimePlayer(HP, ATK)
}

export default SlimePlayer