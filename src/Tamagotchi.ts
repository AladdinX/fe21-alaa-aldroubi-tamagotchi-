export class Tamagotchi {
  private shit: number = 0;
  private hunger: number = 5;
  private happiness: number = 5;
  private timer1: number
  private timer2: number;
  private delay: number = 10000;

  constructor(public name: string, public type: string) {
    this.timer1 = setInterval(this.hungerTimer.bind(this), this.delay);
    this.timer2 = setInterval(this.happinessTimer.bind(this), this.delay);
    this.updateParagraph();
  }

  private hungerTimer(): void {
    this.hunger++;
    this.updateParagraph();
    if (this.hunger === 10) {
      clearInterval(this.timer1)
      alert(`${this.name} is dead :(`)
    }
  }
  private happinessTimer(): void {
    this.happiness--
    this.updateParagraph();
    if (this.happiness === 0) {
      clearInterval(this.timer2)
      alert(`${this.name} is dead :(`)
    }
  }
  private updateParagraph(): void {
    (document.querySelector('#my-par') as HTMLParagraphElement).innerText =
      `This is ${this.name} statues right now , try to keep it alive 
      Happiness:${this.happiness} ,Hunger:${this.hunger},Shit:${this.shit} `
  }
  private moreShit(): number {
    if (Math.random() < .5) return this.shit++
    this.updateParagraph();
  }

  public feed(): number {
    this.moreShit();
    this.updateParagraph();
    if (this.hunger === 0) return this.happiness--
    return this.hunger--
  }
  public play(): number {
    this.updateParagraph();
    if (this.happiness === 10) return this.hunger++
    else return this.happiness++
  }
  public cleanShit(): void {
    if (this.shit != 0) {
      this.shit = 0;
      this.happiness += 2;
      this.updateParagraph();
    }
  }
}
