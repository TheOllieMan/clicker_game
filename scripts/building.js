class Building {
    constructor(baseCost, baseProd) {
        this.baseCost = baseCost;
        this.cost = this.baseCost;
        this.baseProd = baseCost;
        this.Prod = 0;
        this.amountOwned = 0;
    }
    // Triggered when the player buys a Building
    purchase() {
        this.amountOwned++;
        this.Prod = this.baseProd * this.amountOwned;
        score -= this.cost;
        this.cost = this.baseCost * ((1.15)** this.amountOwned);
    }

    // Updates the button, grey if can't afford, price, number owned, etc
    buttonState() {
    if(score > this.cost) {
        document.getElementById('button').style.color = "blue";
    }
    }
}

//add a math.floor