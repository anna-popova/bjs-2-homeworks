class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name
		this.releaseDate = releaseDate
		this.pagesCount = pagesCount
    this.state = 100;
    this.type = null;
	}

  fix() {
    let fixedState = this.state * 1.5;
    return fixedState;
  }

  set stateQuality(fixedState) {
    if (fixedState < 0) {
      this.state = 0;
    } else if (fixedState > 100) {
      this.state = 100;
    } else {
      this.state = fixedState;
    }
  }

  get stateQuality() {
    return this.state;
  }

}